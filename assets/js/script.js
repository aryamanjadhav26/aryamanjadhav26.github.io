document.addEventListener('DOMContentLoaded', () => {
  // The full introduction is the default, including when scripting or storage is unavailable.
  const intro = document.querySelector('[data-typed-intro]');
  if (intro) {
    const text = intro.querySelector('[data-typed-text]');
    const message = text.textContent;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let seen = false;
    try { seen = sessionStorage.getItem('aj-intro-v1') === 'seen'; } catch (_) {}
    if (!seen && !motion.matches && !document.hidden) {
      const characters = Array.from(message);
      let index = 0;
      let timer;
      text.textContent = '';
      intro.classList.add('is-typing');
      const finish = () => {
        clearTimeout(timer);
        text.textContent = message;
        intro.classList.remove('is-typing');
        document.removeEventListener('visibilitychange', onVisibility);
        if (motion.removeEventListener) motion.removeEventListener('change', onMotion);
        try { sessionStorage.setItem('aj-intro-v1', 'seen'); } catch (_) {}
      };
      const onVisibility = () => { if (document.hidden) finish(); };
      const onMotion = () => { if (motion.matches) finish(); };
      const type = () => {
        text.textContent = characters.slice(0, ++index).join('');
        if (index < characters.length) timer = setTimeout(type, 28);
        else finish();
      };
      document.addEventListener('visibilitychange', onVisibility);
      if (motion.addEventListener) motion.addEventListener('change', onMotion);
      type();
    }
  }

  const browser = document.querySelector('[data-project-browser]');
  if (browser) {
    const controls = browser.querySelector('[data-project-filters]');
    const buttons = Array.from(controls.querySelectorAll('[data-filter]'));
    const projects = Array.from(browser.querySelectorAll('[data-project]'));
    const count = browser.querySelector('[data-project-count]');
    const known = new Set(buttons.map(button => button.dataset.filter));
    const applyFilter = (filter) => {
      const active = known.has(filter) ? filter : 'all';
      let visible = 0;
      projects.forEach(project => {
        project.hidden = active !== 'all' && project.dataset.discipline !== active;
        if (!project.hidden) visible++;
      });
      buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === active)));
      count.textContent = visible + (visible === 1 ? ' project' : ' projects') + (active === 'all' ? '' : ' / ' + active);
    };
    const fromURL = () => applyFilter(new URL(location.href).searchParams.get('area') || 'all');
    buttons.forEach(button => button.addEventListener('click', () => {
      applyFilter(button.dataset.filter);
      const url = new URL(location.href);
      if (button.dataset.filter === 'all') url.searchParams.delete('area');
      else url.searchParams.set('area', button.dataset.filter);
      try { history.pushState(null, '', url); } catch (_) {}
    }));
    window.addEventListener('popstate', fromURL);
    fromURL();
    controls.hidden = false;
  }

  // Conceptual illustrations play once in view; content never depends on motion.
  const illustrations = Array.from(document.querySelectorAll('[data-project-motion]'));
  if (illustrations.length) {
    const visualMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const replayButtons = Array.from(document.querySelectorAll('[data-replay-visual]'));
    const playIllustration = (illustration) => {
      if (visualMotion.matches) return;
      illustration.classList.remove('is-playing');
      // Restart only this small illustration when explicitly replayed.
      void illustration.offsetWidth;
      illustration.dataset.played = 'true';
      illustration.classList.add('is-playing');
    };
    illustrations.forEach(illustration => {
      const row = illustration.closest('.project-row');
      if (row) {
        row.addEventListener('pointerenter', () => playIllustration(illustration));
        row.addEventListener('focus', () => playIllustration(illustration));
      }
    });
    replayButtons.forEach(button => {
      button.addEventListener('click', () => {
        const illustration = button.closest('[data-project-visual]').querySelector('[data-project-motion]');
        playIllustration(illustration);
      });
    });
    const applyMotionPreference = () => {
      replayButtons.forEach(button => { button.hidden = visualMotion.matches; });
      if (visualMotion.matches) illustrations.forEach(illustration => illustration.classList.remove('is-playing'));
    };
    applyMotionPreference();
    if (visualMotion.addEventListener) visualMotion.addEventListener('change', applyMotionPreference);
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          entry.target.classList.toggle('is-outside', !entry.isIntersecting);
          if (entry.isIntersecting && !entry.target.dataset.played) playIllustration(entry.target);
        });
      }, { threshold: .25 });
      illustrations.forEach(illustration => observer.observe(illustration));
    } else {
      illustrations.forEach(playIllustration);
    }
    const pauseHiddenMotion = () => document.documentElement.classList.toggle('motion-paused', document.hidden);
    document.addEventListener('visibilitychange', pauseHiddenMotion);
    pauseHiddenMotion();
  }

  const article = document.querySelector('[data-project-content]');
  const toc = document.querySelector('[data-project-toc]');
  if (article && toc) {
    const list = toc.querySelector('ol');
    article.querySelectorAll('h2[id]').forEach(heading => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = '#' + heading.id;
      link.textContent = heading.textContent;
      item.appendChild(link);
      list.appendChild(item);
    });
    toc.hidden = !list.children.length;
  }

  const copy = document.querySelector('[data-copy-email]');
  if (copy && navigator.clipboard && window.isSecureContext) {
    copy.hidden = false;
    copy.addEventListener('click', async () => {
      const status = document.querySelector('[data-copy-status]');
      try {
        await navigator.clipboard.writeText(copy.dataset.copyEmail);
        status.textContent = 'Email copied.';
      } catch (_) {
        status.textContent = 'Select the email address to copy it, or open it in your mail app.';
      }
    });
  }
});
