---
layout: post
title: Plant Disease Detection
permalink: /projects/plant-disease-detection/
category: Applied Computer Vision
card_order: 50
year: 2025
github: https://github.com/aryamanjadhav26/PlantDiseaseDetection.git
report: https://github.com/aryamanjadhav26/PlantDiseaseDetection/blob/main/Project-Report.pdf
description: Built a plant disease classifier using preprocessing, leaf masking, feature extraction, and a 5-layer CNN across 87,000 images.
card_summary: Computer vision pipeline that isolates leaves, extracts features, and classifies disease across 38 classes.
visual_alt: Diagram of a plant disease detection pipeline from leaf image to mask, features, CNN layers, and classification confidence.
glance:
  - label: Dataset
    value: 87k images
  - label: Classes
    value: 38 labels
  - label: Result
    value: 95% accuracy
skills:
  - Python
  - PyTorch
  - Computer Vision
  - Image Processing
  - CNNs
  - Classification
main-image: /project-visual.svg
---

## What It Does

The pipeline classifies plant leaf images as healthy or diseased across 38 labels, with preprocessing designed for noisy photos and cluttered backgrounds.

## Model Pipeline

- Leaf masking removes distracting background regions before classification.
- Histogram equalization, K-means clustering, contours, DWT, PCA, and GLCM extract color, shape, and texture signals.
- A 5-layer CNN with batch normalization and dropout learns disease patterns from the processed images.
- Confusion matrices, ROC curves, and per-class precision/recall track generalization.

## Engineering Focus

- Moved beyond a shallow 3-layer CNN after it overfit and missed subtle patterns.
- Found that masking and augmentation improved robustness more than model depth alone.
- Used adaptive tuning experiments to reduce manual learning-rate and dropout sweeps.
