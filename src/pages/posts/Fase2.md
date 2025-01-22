---
layout: '@/templates/BasePost.astro'
title: Phase 2:Advancements
description: In this phase, we focused on refining the preprocessing techniques and making progress with YOLO-based detection. Below is a summary of the challenges, advancements, and next steps.
pubDate: 2025-01-09T00:00:00Z
imgSrc: '/assets/images/fractura4yolo.png'
imgAlt: 'Image post'

---

# Phase 2: Advancements in Preprocessing and YOLO Implementation



---

## Preprocessing Challenges

Initially, preprocessing aimed to simplify the X-ray images by isolating bone structures. However, we encountered the following problem:

- **Inconsistencies in X-ray Properties**:  
  While X-rays are often grayscale, their contrast, brightness, and the visibility of muscles or surrounding tissues can vary significantly between patients. This variability makes it difficult to generalize the preprocessing pipeline.  
  For instance:
  - High contrast may exaggerate certain features, leading to false positives.
  - Low contrast may obscure critical fractures or fissures.

One of the main challenges we encountered was the inconsistency in preprocessing X-rays. Variations in contrast, brightness, and tissue visibility among patients made it difficult to generalize the preprocessing pipeline. These inconsistencies resulted in poor fracture detection in some cases.

Here is an example of how incorrect preprocessing affected X-ray analysis and fracture detection:  
![Preprocessing Issues Example](/assets/images/Preprocesameinto_error.jpg)  
*The preprocessing failed to isolate the fracture accurately, making it challenging to detect.*


---

## Transition to Full Image Processing

Given the challenges with preprocessing, we decided to work with the original X-ray images for fracture detection. A more detailed explanation of this technique can be found in the following article:  
[Go to Phase 2: Image Processing](../posts/Fase1.md)

The key advantages of this approach include:
- Retaining all features in the original image for YOLO to process.
- Avoiding the loss of subtle details, such as small fissures, that may be eliminated during preprocessing.

---

## Progress with YOLO

The focus now shifts to implementing **YOLO (You Only Look Once)** for fracture detection. YOLO's ability to detect objects in real-time makes it an excellent choice for this task. In this phase, we began the groundwork for YOLO, which includes:

### First Steps:
1. **Dataset Selection**:  
   - We are identifying a comprehensive dataset of labeled X-ray images that includes various types of fractures and fissures.  
   - Ideal datasets should contain:
     - A diverse range of X-rays (e.g., hands, legs, skulls).
     - Annotations for fractures, fissures, and bone boundaries.

2. **Data Augmentation**:  
   - Techniques like flipping, rotation, and scaling will be applied to increase the dataset size and improve YOLO's robustness.

3. **Model Training**:  
   - The selected dataset will be used to train YOLO to detect fractures with high accuracy.  

4. **Initial Validation**:  
   - A subset of images will be used to validate the model's performance before large-scale testing.

---

## Comparing Results: Processing vs. YOLO

To validate the effectiveness of the full image processing and YOLO, a dual-validation approach will be used:
1. **Processing Validation**:  
   - The full processing technique will be applied to X-rays to detect fractures and compare the results with ground truth data.
2. **YOLO Validation**:  
   - YOLO will process the original X-rays, and its results will be compared against both ground truth data and the processing technique.

### Why YOLO is Critical

Fractures, especially small fissures, are often subtle and difficult to detect. These cases require YOLO’s advanced detection capabilities to ensure no fractures are missed.

Below are the initial results from the first YOLO training session:

#### 1. Training Results
The following graph shows the progress of the YOLO model during its first training phase. Metrics like loss and precision are tracked over epochs to assess performance:

![YOLO Training Results](/assets/images/results_train_1.png)  
*The training results showcase the model's improvement over epochs.*

#### 2. Confusion Matrix
The confusion matrix provides an overview of the model's performance in detecting different fracture types during validation. It highlights areas where the model excels and where improvements are needed:

![YOLO Confusion Matrix](/assets/images/conf_matrix_train1.png)  
*The confusion matrix displays the accuracy and misclassifications during validation.*

By analyzing these results, we can refine the training process, adjust hyperparameters, and further improve YOLO's ability to detect fractures and fissures effectively.


---

## Next Steps

1. Complete dataset selection and annotation.
2. Finalize the preprocessing pipeline for the comparative analysis.
3. Train YOLO on the selected dataset with data augmentation techniques.
4. Conduct initial validation and refine the model parameters for improved accuracy.

---

This phase emphasizes the importance of balancing preprocessing techniques with YOLO's capabilities to achieve reliable and accurate fracture detection in X-rays.
