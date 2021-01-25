from flask import Flask, request, jsonify
# 필요한 모듈 임포트 및 필요한 설정
import numpy as np
import matplotlib.pyplot as plt

import sklearn  # scikit-learn 모듈 임포트

import pandas as pd # data processing, CSV file I/O (e.g. pd.read_csv)
from tensorflow.keras import layers
import keras 
from tensorflow.python.keras.models import Sequential


from keras.preprocessing.image import img_to_array
from keras.models import load_model
import os
from keras.preprocessing import image
from PIL import Image

import glob


# 졸음 모델 복원(로딩)
drowsiness_model= keras.models.load_model("drowsiness_model.h5")
print(drowsiness_model)




app = Flask(__name__)
 

 
@app.route('/environments/<language>')
def environments(language):
    return jsonify({"language":language})

 
@app.route('/korea')
def country():
        # Get test image ready
        test_image = image.load_img('face.jpg', target_size=(150, 150))
        print(test_image)
        test_image = image.img_to_array(test_image)
        test_image = np.expand_dims(test_image, axis=0)

        
        result = drowsiness_model.predict_classes(test_image, batch_size=1)


        return str(result)

 
if __name__ == "__main__":
    app.run()








