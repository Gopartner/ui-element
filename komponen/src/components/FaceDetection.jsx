import React, { useEffect, useRef } from 'react';
import * as blazeface from '@tensorflow-models/blazeface';
import * as tf from '@tensorflow/tfjs';

const FaceDetection = () => {
  const imageRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const runFaceDetection = async () => {
      // Memuat model BlazeFace
      await tf.ready();
      const model = await blazeface.load();
      console.log('BlazeFace model loaded');

      // Ambil gambar yang akan dianalisis
      const imgElement = imageRef.current;
      
      // Melakukan deteksi wajah pada gambar
      const predictions = await model.estimateFaces(imgElement, false);
      console.log(predictions);

      // Gambar kotak pada wajah yang terdeteksi
      drawPredictions(predictions);
    };

    const drawPredictions = (predictions) => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      predictions.forEach(face => {
        // Gambar kotak untuk setiap wajah yang terdeteksi
        ctx.beginPath();
        ctx.rect(
          face.topLeft[0], 
          face.topLeft[1], 
          face.bottomRight[0] - face.topLeft[0], 
          face.bottomRight[1] - face.topLeft[1]
        );
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'red';
        ctx.fillStyle = 'red';
        ctx.stroke();
        ctx.fillText('Face', face.topLeft[0], face.topLeft[1] > 10 ? face.topLeft[1] - 5 : 10);
      });
    };

    runFaceDetection();
  }, []);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <h2>Face Detection with BlazeFace</h2>
      <img
        ref={imageRef}
        src="https://via.placeholder.com/600" // Ganti dengan gambar Anda
        alt="Sample"
        width="600"
      />
      <canvas
        ref={canvasRef}
        width="600"
        height="400"
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          zIndex: '1',
        }}
      ></canvas>
    </div>
  );
};

export default FaceDetection;
