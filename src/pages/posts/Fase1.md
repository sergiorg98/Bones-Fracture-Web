---
layout: '@/templates/BasePost.astro'
title: Phase 1:Initial Results
description: In this blog, we present the challenges and solutions encountered during the first phase of detecting bone fractures.
pubDate: 2024-12-22T00:00:00Z
imgSrc: '/assets/images/miniatura1.webp'
imgAlt: 'Image post'

---

In this phase, we explored the initial methods for detecting bone fractures. Our primary focus was on contour detection techniques, but we faced several challenges that pushed us to rethink our approach. Below, we discuss these issues and the solutions implemented.

# Phase 1: Fracture Detection Using Contours

In the initial phase of the project, we attempted to detect fractures using contour detection techniques. However, several challenges emerged:

- **Specific X-ray analysis**: The approach required a very detailed and specific analysis of X-rays, increasing complexity.
- **Fissures**: In cases where only fissures were present, contours failed to differentiate the bone parts clearly, making detection difficult.

Below are two images illustrating the issues encountered:

### Problem 1: Insufficient Contours
![Contour Detection Issue]
![XYZ Space image](/assets/images/contour_difficulty.jpg 'XYZ Space Bone Segmentation')
*Hover over the image to zoom in and see how contour detection fails due to the low visibility of the fissure.*

### Problem 2: Errors in Contour Detection
![Contour Detection Error]![XYZ Space image](/assets/images/contour_error.jpg 'XYZ Space Bone Segmentation')
*Click on the image to see an example of how contour detection generated errors in an X-ray analysis.*

---

## Changing Focus: YOLO Implementation with Preprocessing

After assessing the limitations of contour-based methods, we decided to implement **YOLO (You Only Look Once)**, an advanced computer vision algorithm for real-time object detection.

### What is YOLO, and Why is it Effective?

YOLO is a model that divides an image into grids and predicts the regions where objects are located. This makes it ideal for identifying fractures, even in challenging cases like fissures.  
By using YOLO with preprocessing techniques like segmentation, we can achieve:
- **Accurate fracture detection**.
- **Training the model to identify subtle fissures**.
- **Reduced errors compared to contour-based methods**.

Here is an example of YOLO detecting fractures:  
![YOLO Trained Example](path-to-your-image-yolo-example.png)  
*Hover over the detected areas to see explanations, or click on the image to explore YOLO's functionality in detail.*

---

This phase allowed us to shift toward a more efficient and adaptable model, paving the way for comprehensive analysis of bone fractures in X-rays.
