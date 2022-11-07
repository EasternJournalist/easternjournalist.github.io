---
title: "Single-View View Synthesis in the Wild with Learned Adaptive Multiplane Images"
collection: publications
permalink: /publication/adampi
excerpt: 
date: 2022-08-01
venue: 'ACM SIGGRAPH'
authors: "Yuxuan Han, <b>Ruicheng Wang</b>, Jiaolong Yang"
paper: https://arxiv.org/pdf/2205.11733.pdf
arxiv: https://arxiv.org/pdf/2205.11733
projectpage: https://yxuhan.github.io/AdaMPI/
abstract: "This paper deals with the challenging task of synthesizing novel views for in-the-wild photographs. Existing methods have shown promising results leveraging monocular depth estimation and color inpainting with layered depth representations. However, these methods still have limited capability to handle scenes with complex 3D geometry. We propose a new method based on the multiplane image (MPI) representation. To accommodate diverse scene layouts in the wild and tackle the difficulty in producing high-dimensional MPI contents, we design a network structure that consists of two novel modules, one for plane depth adjustment and another for depth-aware color prediction. The former adjusts the initial plane positions using the RGBD context feature and an attention mechanism. Given adjusted depth values, the latter predicts the color and density for each plane separately with proper inter-plane interactions achieved via a feature masking strategy. To train our method, we construct large-scale stereo training data using only unconstrained single-view image collections by a simple yet effective warp-back strategy"
---