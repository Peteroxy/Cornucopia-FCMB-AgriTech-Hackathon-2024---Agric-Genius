# AGRIC GENIUS🌿
#### A simple ML and DL based website which recommends the best crop to grow, fertilizers to use and the diseases caught by your crops.

### *Project Overview: AgricGenius*

*DISCLAIMER ⚠*  
This project is a Proof of Concept (POC). The data used is not guaranteed, and it is not intended for real farming decisions. The creator is not responsible for any outcomes resulting from its use. However, it presents how Machine Learning (ML) and Deep Learning (DL) can be applied to *precision farming* if developed at scale with verified data.

---

### *MOTIVATION 💪*

Agriculture is critical to economic growth, especially in countries like India, where a large portion of the population depends on farming. Modern technologies like ML and DL are transforming agriculture to improve crop yield and efficiency. This project implements three major applications:
1. *Crop Recommendation*
2. *Fertilizer Recommendation*
3. *Plant Disease Prediction*

---

### *Features & Applications*

1. **Crop Recommendation System**:  
   - The user inputs soil data, including N-P-K (Nitrogen, Phosphorus, Potassium) ratios, and the system recommends the best crops to grow based on the soil and environmental data (fetched from a Weather API).
   
2. **Fertilizer Recommendation System**:  
   - Based on the soil data and the chosen crop, the system identifies what nutrients the soil lacks or has in excess. The system then suggests appropriate fertilizers to improve soil health.

3. **Plant Disease Detection**:  
   - The user uploads an image of a plant leaf, and the system predicts whether the plant is healthy or diseased. If diseased, it identifies the disease and provides recommendations for treatment and prevention.

---

### *Data Sources 📊*
- **Crop Recommendation Dataset**: Custom-built
- **Fertilizer Suggestion Dataset**: Custom-built
- **Disease Detection Dataset**: Pre-trained model using public datasets

---

### *How to Use 💻*

1. **Crop Recommendation**:  
   Enter the soil nutrient values (N-P-K ratio), state, and city. The system provides crop recommendations based on the input.
   
2. **Fertilizer Suggestion**:  
   Input soil nutrient contents and the crop you're growing, and the system will suggest the necessary fertilizers.

3. **Disease Detection**:  
   Upload an image of the plant’s leaf. The system detects if it's healthy or diseased, provides the cause of the disease, and suggests remedies.

---

### *Running Locally 🛠*

1. Clone the project from GitHub:
   ```bash
   git clone https://github.com/Peteroxy/Cornucopia-FCMB-AgriTech-Hackathon-2024---Agric-Genius.git

