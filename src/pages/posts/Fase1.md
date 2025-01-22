---
layout: '@/templates/BasePost.astro'
title: Phase 1:Initial Results
description: In this blog, we present the challenges and solutions encountered during the first phase of detecting bone fractures.
pubDate: 2024-12-22T00:00:00Z
imgSrc: '/assets/images/Contornos_bien.png'
imgAlt: 'Image post'

---
# Phase 1: Evaluation of Techniques for Fracture Detection

In the first phase of the project, we evaluated several techniques to identify fractures in X-rays. Below is a summary of the methods tested, their purpose, and the challenges encountered.

---

## Techniques Evaluated

### 1. Evaluate Thresholding and Segmentation Techniques
This technique involves isolating the bone from the rest of the X-ray using thresholding (to differentiate between light and dark areas) and segmentation methods.  
**Purpose:** To preprocess the image, leaving it clean and focused only on the bone, ideally highlighting fractures.

![Thresholding and Segmentation Example](/assets/images/Theresholding_segmentation.jpg)  
*Example of basic segmentation and thresholding applied to an X-ray.*

**Conclusion:**  
This method showed potential for preprocessing, as it could simplify the image and isolate the fractured area. However, it was insufficient for detecting the fracture itself, requiring further analysis.

---

### 2. Evaluate Edge and Key Point Detection
This approach focuses on detecting the edges and key points of the bone structure to locate fractures.  

![Edge and Key Point Detection Example](/assets/images/Canny_buena_dettecion_bordes.jpg)  
*Example of edge and key point detection applied to an X-ray.*

**Problem:**  
While this method highlighted edges, it struggled with low-contrast areas like fissures.  
![Edge Detection Problem](/assets/images/Canny_mala_dettecion_bordes.jpg)  
*Hover over the image to zoom in and see how edge detection fails to capture low-contrast fractures.*

---

### 3. Projection Analysis
This technique uses vertical and horizontal lines projected over the X-ray. Each line stops when it crosses an object or reaches the edge of the image. This can help detect where fractures or separations occur.


**Problem:**  
While effective for specific bones, this technique fails with complex X-rays, such as hands or areas with multiple bones. For example, it could incorrectly detect the spaces between fingers as fractures.  
![Projection Analysis Problem](/assets/images/Proyection_mal.jpg  )  
*Example of incorrect detection in a hand X-ray due to projection analysis.*

---

### 4. YOLO (You Only Look Once)
YOLO is a computer vision algorithm designed for real-time object detection. It divides the image into grids and predicts bounding boxes for objects. YOLO was tested as a potential solution for its ability to detect subtle features, such as fractures or fissures.

**Why YOLO?**  
YOLO provides:
- Accurate detection, even for small fissures.
- Real-time analysis capabilities.
- Scalability for training with a wide range of X-rays.


---

## Summary of Problems

After evaluating the techniques, the following challenges were identified:
1. **Thresholding and Segmentation**: Useful for preprocessing but insufficient for detecting fractures directly.
2. **Edge and Key Point Detection**: Struggled with low-contrast areas, making it unreliable for small fissures.
3. **Projection Analysis**: Effective for single bones but problematic for areas with multiple bones, such as hands.
4. **YOLO**: Demonstrated the highest potential, especially with preprocessing to clean the image and focus on fractures.

---

## Changing Focus: YOLO Implementation with Preprocessing

After assessing the limitations of the previous methods, we shifted our focus to implementing **YOLO (You Only Look Once)**.

### What is YOLO, and Why is it Effective?

YOLO divides an image into grids and predicts the regions where objects are located. This makes it ideal for identifying fractures, even in challenging cases like fissures.  
With YOLO and preprocessing techniques like segmentation, we can achieve:
- **Accurate fracture detection**.
- **Training the model to identify subtle fissures**.
- **Reduced errors compared to contour-based methods**.

[![YOLO Trained Example](/assets/images/web_yolo.png)](https://www.v7labs.com/blog/yolo-object-detection)  
*Click on the image to learn more about YOLO and its functionality in detail.*


---

This evaluation phase helped us refine our approach and move toward a more robust and adaptable model for fracture detection.

