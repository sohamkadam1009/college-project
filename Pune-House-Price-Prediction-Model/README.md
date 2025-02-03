# Pune-House-Price-Prediction-Model

This project is designed to predict house prices in Pune based on various features such as location, square footage, number of bathrooms, and number of bedrooms. It includes a client-side interface, a machine learning model, and a server to handle requests.

Project Structure  

client/  
∙app.html: The main HTML file for the web interface.  
∙app.css: Stylesheet for the web interface.  
∙app.js: JavaScript file for handling client-side logic.  
  
model/  
∙Pune house data.csv: The dataset used for training and testing the model.  
∙house_price_prediction.ipynb: Jupyter notebook containing the data preprocessing, model training, and prediction steps.  
∙columns.json: JSON file containing the column names used in the model.  
∙model.pkl: Pickle file of the trained model.  

server/  
∙server.py: Python script to run the server and handle API requests.  
∙util.py: Utility script for loading the model, data preprocessing, and making predictions.  

Prerequisites   
∙Ensure you have Python 3.x installed along with the following packages:  

∙pandas  
∙numpy  
∙seaborn  
∙matplotlib  
∙scikit-learn  
∙Flask (for the server)  

Usage  
∙Predicting House Prices: Use the web interface to input details like location, square footage, number of bathrooms, and number of bedrooms. The predicted price will be displayed on the same page.  

Model Information  
∙The model was built using a Linear Regression algorithm.  
∙The data preprocessing and model training are documented in house_price_prediction.ipynb.  

Future Enhancements  
∙UI Improvements: Enhance the web interface with more features and responsive design.  
∙Model Improvements: Explore more advanced machine learning algorithms to improve prediction accuracy.  
∙Deployment: Deploy the application on a cloud platform like AWS  

Contributing  
∙Feel free to submit issues or pull requests if you want to contribute to the project.  
