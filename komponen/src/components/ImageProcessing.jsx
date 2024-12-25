import React, { useState, useEffect } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import * as blazeface from "@tensorflow-models/blazeface";
import "@tensorflow/tfjs";

const ImageProcessing = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [image, setImage] = useState(null);
  const [objectsDetected, setObjectsDetected] = useState([]);
  const [facesDetected, setFacesDetected] = useState([]);

  useEffect(() => {
    // Load the models when the component mounts
    const loadModels = async () => {
      await cocoSsd.load(); // Load object detection model
      await blazeface.load(); // Load face detection model
    };

    loadModels();
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImageSrc(URL.createObjectURL(file));
    setImage(file);
  };

  const detectObjectsAndFaces = async () => {
    if (image) {
      const imgElement = document.getElementById("image");
      // Load the models
      const objectModel = await cocoSsd.load();
      const faceModel = await blazeface.load();

      // Detect objects in the image
      const objects = await objectModel.detect(imgElement);
      setObjectsDetected(objects);

      // Detect faces in the image
      const faces = await faceModel.estimateFaces(imgElement, false);
      setFacesDetected(faces);
    }
  };

  return (
    <div>
      <h1>Image Processing for Object and Face Detection</h1>
      <input type="file" onChange={handleImageUpload} />
      {imageSrc && <img id="image" src={imageSrc} alt="Uploaded" width="400" />}
      <button onClick={detectObjectsAndFaces}>Detect Objects and Faces</button>

      <div>
        <h3>Detected Objects:</h3>
        <ul>
          {objectsDetected.map((object, index) => (
            <li key={index}>
              {object.class} - Confidence: {object.score.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Detected Faces:</h3>
        {facesDetected.length > 0 ? (
          <ul>
            {facesDetected.map((face, index) => (
              <li key={index}>
                Face {index + 1} - Top Left: ({face.topLeft[0]},{" "}
                {face.topLeft[1]})
              </li>
            ))}
          </ul>
        ) : (
          <p>No faces detected</p>
        )}
      </div>
    </div>
  );
};

export default ImageProcessing;
