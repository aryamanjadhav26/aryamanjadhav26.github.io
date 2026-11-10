"""Check the generated site's internal links, assets, and portfolio structure."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import sys

ROOT = Path(__file__).resolve().parents[1] / '_site'


class Page(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.path = path
        self.ids = set()
        self.references = []
        self.errors = []
        self.headings = 0
        self.projects = 0
        self.next_projects = 0
        self.feed(path.read_text(encoding='utf-8-sig'))

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        identifier = attrs.get('id')
        if identifier:
            if identifier in self.ids:
                self.errors.append(f'duplicate id: {identifier}')
            self.ids.add(identifier)
        if tag == 'h1':
            self.headings += 1
        if 'data-project' in attrs:
            self.projects += 1
        if 'project-next' in attrs.get('class', '').split():
            self.next_projects += 1
        if tag == 'img' and 'alt' not in attrs:
            self.errors.append('image has no alt attribute')
        if tag == 'a' and attrs.get('target') == '_blank':
            if 'noopener' not in attrs.get('rel', '').split():
                self.errors.append('new-tab link lacks noopener')
        if tag in ('a', 'link', 'img', 'script'):
            value = attrs.get('href' if tag in ('a', 'link') else 'src')
            if value:
                self.references.append(value)


def target_path(source, url):
    path = unquote(url.path)
    target = ROOT / path.lstrip('/') if path.startswith('/') else source.parent / path
    if not path:
        target = source
    if target.is_dir():
        target = target / 'index.html'
    return target.resolve()


pages = {path.resolve(): Page(path) for path in ROOT.rglob('*.html')}
errors = []
for path, page in pages.items():
    for error in page.errors:
        errors.append(f'{path.relative_to(ROOT)}: {error}')
    # Search verification documents have no portfolio layout.
    if 'main-content' in page.ids and page.headings != 1:
        errors.append(f'{path.relative_to(ROOT)}: expected one h1, got {page.headings}')
    for reference in page.references:
        url = urlsplit(reference)
        if url.scheme or url.netloc:
            continue
        target = target_path(path, url)
        if not target.exists():
            errors.append(f'{path.relative_to(ROOT)}: missing {reference}')
        elif url.fragment and target in pages and unquote(url.fragment) not in pages[target].ids:
            errors.append(f'{path.relative_to(ROOT)}: missing anchor {reference}')

home = pages.get((ROOT / 'index.html').resolve())
archive = pages.get((ROOT / 'projects/index.html').resolve())
if not home or not home.projects:
    errors.append('homepage has no featured projects')
if not archive or archive.projects < home.projects:
    errors.append('project index does not contain the selected work')
for path, page in pages.items():
    if path.parent.parent == (ROOT / 'projects').resolve() and path.name == 'index.html':
        if page.next_projects != 1:
            errors.append(f'{path.relative_to(ROOT)}: missing next-project navigation')
for excluded in ('design', 'Reference', 'scripts'):
    if (ROOT / excluded).exists():
        errors.append(f'authoring directory leaked into output: {excluded}')

if errors:
    print('\n'.join(errors))
    sys.exit(1)
print(f'Checked {len(pages)} generated HTML pages: local links, fragments, assets, headings, project navigation, and authoring exclusions passed.')
