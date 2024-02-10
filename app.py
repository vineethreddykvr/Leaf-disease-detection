import os
import numpy as np
from flask_cors import CORS

import tensorflow as tf
from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import load_img, img_to_array
from tensorflow.keras.applications.mobilenet_v2 import preprocess_input
from tensorflow.keras.preprocessing.image import ImageDataGenerator

model = load_model('./model.h5')
train_dir = r"C:\Users\vineeth reddy\Documents\New Plant Diseases Dataset(Augmented)\train"

# Set up data generator
train_datagen = ImageDataGenerator(rescale=1./255)
train_generator = train_datagen.flow_from_directory(
    train_dir,
    target_size=(224, 224),
    batch_size=32,
    class_mode='categorical')

app = Flask(__name__)
CORS(app)
def predict_image(image_path):
    img = load_img(image_path, target_size=(224, 224))
    x = img_to_array(img)
    x = np.expand_dims(x, axis=0)
    x = preprocess_input(x)
    pred = model.predict(x)[0]
    class_idx = np.argmax(pred)
    class_indices = train_generator.class_indices
    class_indices_inv = {v: k for k, v in class_indices.items()}
    class_label = class_indices_inv[class_idx]
    return class_label


@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return 'No file found', 400

    file = request.files['file']
    if file.filename == '':
        return 'No selected file', 400

    save_dir = os.path.join(os.path.dirname(__file__), 'images')
    if not os.path.exists(save_dir):
        os.makedirs(save_dir)

    file_path = os.path.join(save_dir, file.filename)
    file.save(file_path)
    predicted_class = predict_image(file_path)
    response = {'class_label': predicted_class}
    print(response)
    return jsonify(response)


if __name__ == '__main__':
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.run(debug=True)
