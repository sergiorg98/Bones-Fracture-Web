---
layout: '@/templates/BasePost.astro'
title: Resultados preliminares
description: In this blog, we show the first progress we are making in detecting bone fractures.
pubDate: 2024-12-11T00:00:00Z
imgSrc: '/assets/images/miniatura1.webp'
imgAlt: 'Image post'

---

So far, we have been working on image preprocessing and have been

## Color Space Selection(Prueba)

We have been analyzing different color spaces and have realized that the XYZ color space filters the flesh quite well and leaves the image with a clean bone.
Here you can see an example.
![XYZ Space image](/assets/images/xyz_space_bone.png 'XYZ Space Bone Segmentation')

## Contour Detection
We have also been working on contour detection with the Canny algorithm to see if we would be able to detect the fracture contour with it.
![XYZ Space image](/assets/images/canny_contoruns.png 'Canny contours delectation')