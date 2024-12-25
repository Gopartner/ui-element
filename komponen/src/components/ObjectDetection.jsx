import React, { useEffect, useRef } from 'react';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import * as tf from '@tensorflow/tfjs';

const ObjectDetection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const runObjectDetection = async () => {
      // Memuat model COCO-SSD
      await tf.ready();  // Tunggu TensorFlow siap
      const model = await cocoSsd.load();
      console.log('Model loaded');

      // Ambil gambar yang akan dianalisis
      const imgElement = imageRef.current;
      
      // Melakukan deteksi objek pada gambar
      const predictions = await model.detect(imgElement);
      console.log(predictions);

      // Menampilkan hasil deteksi objek
      predictions.forEach(prediction => {
        console.log(`Predicted object: ${prediction.class} with probability: ${prediction.score}`);
      });
    };

    runObjectDetection();
  }, []);

  return (
    <div>
      <h2>Object Detection with COCO-SSD</h2>
      <img
        ref={imageRef}
        src="https://via.placeholder.com/600" // Ganti dengan gambar Anda
        alt="Sample"
        width="600"
      />
    </div>
  );
};

export default ObjectDetection;
