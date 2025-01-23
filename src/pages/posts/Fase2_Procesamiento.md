---
layout: '@/templates/BasePost.astro'
title: Phase 2:Image Processing
description: Processing.
pubDate: 2025-01-09T00:00:00Z
imgSrc: '/assets/images/Fase2_portada.jpg'
imgAlt: 'Image post'

---

# Detecting Fractures in Images: A Technical Overview  

Fracture detection in images involves several image processing steps to identify and measure damaged areas. Here’s a concise breakdown of the method:

---

### **1. Image Preprocessing**
The image is first converted to grayscale to simplify analysis. Grayscale images retain brightness information and eliminate color data, reducing computational complexity.  

![Preprocessing Steps](/assets/images/Fases_hasta_antes_deteccion.jpg)  
*From left to right: original image, grayscale, binarized image, erosion, hole filling, and contours with regions.*

---

### **2. Binarization**
We apply a threshold to the grayscale image to create a binary image (black and white). This highlights areas of interest (potential fractures) by separating them from the background.

---

### **3. Morphological Processing**
Noise in the binary image is removed using morphological operations:
- **Erosion:** Eliminates small, isolated white regions (noise).
- **Hole Filling:** Connects fragmented regions within fractures to make them continuous.

---

### **4. Boundary Detection**
Contours or boundaries of connected regions are identified to isolate each fracture. These boundaries allow us to extract geometric properties, such as area, perimeter, and shape.  

---

### **5. Detecting and Analyzing Fractures**
The two largest connected regions (fractures) are identified based on their area. For each region, a bounding box—a rectangle that fully encloses the region—is calculated.

#### **Bounding Box Coordinates:**  
Each box is defined by its top-left corner `(x_min, y_min)` and dimensions `(width, height)`. This provides the horizontal and vertical extent of the fracture.

#### **Separation Analysis:**  
To measure the separation between fractures:
1. The overlapping vertical range of the two bounding boxes is calculated.
2. The minimum and maximum horizontal limits of both boxes are determined.
3. A **separation rectangle** is drawn around the gap, using these coordinates:
   - Left edge: Minimum `x` of the two boxes.
   - Right edge: Maximum `x` of the two boxes.
   - Top edge: Start of the overlap (`y_min`).
   - Bottom edge: End of the overlap (`y_max`).

This rectangle represents the gap or separation between the fractures and is used to analyze fracture propagation.

![Separation Detection Example](/assets/images/Sepracion_detectada_entrecolumnas.jpg)  
*Example of separation analysis using bounding boxes to measure fracture gaps.*

---

### **6. Visualization**
The results are visualized with:
- The original and processed images.
- Boundaries and bounding boxes around fractures.
- The separation rectangle, clearly marked to highlight the gap.

![Fracture Detection Example](/assets/images/Bone_fracture_detection.jpg)  
*The final detection showing fractures and their bounding boxes.*

---

### **Why Bounding Boxes?**
Bounding boxes provide a simple, yet precise way to localize and measure fractures. By comparing box positions and dimensions, we can evaluate fracture interactions, identify gaps, and quantify structural damage.

This approach is ideal for analyzing fracture patterns in materials, detecting structural damage, or understanding failure mechanisms in engineering systems.
