"use client";

import React, { useRef, useEffect, useState } from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-wasm";
import NavHeader from "@/components/atoms/headers/NavHeader";
import DashboardTitle from "@/components/atoms/typography/DashboardTitle";

const ObjectDetection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [model, setModel] = useState<cocoSsd.ObjectDetection | null>(null);
  const [backendLoaded, setBackendLoaded] = useState(false);

  useEffect(() => {
    const initializeTensorFlow = async () => {
      try {
        await tf.setBackend("webgl");
      } catch (error) {
        console.error("WebGL backend failed, falling back to WASM", error);
        await tf.setBackend("wasm");
      }
      await tf.ready();
      setBackendLoaded(true);

      const loadedModel = await cocoSsd.load();
      setModel(loadedModel);
    };

    initializeTensorFlow();

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
            videoRef.current.play();
          }
        })
        .catch((err) => {
          console.error("Error accessing the camera: ", err);
        });
    }
  }, []);

  const detectObjects = async () => {
    if (model && videoRef.current && videoRef.current.readyState === 4) {
      const predictions = await model.detect(videoRef.current);
      drawPredictions(predictions);
    }
  };

  const drawPredictions = (predictions: cocoSsd.DetectedObject[]) => {
    if (canvasRef.current && videoRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      const videoWidth = videoRef.current.videoWidth;
      const videoHeight = videoRef.current.videoHeight;
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      if (ctx) {
        ctx.clearRect(0, 0, videoWidth, videoHeight);

        predictions.forEach((prediction) => {
          const [x, y, width, height] = prediction.bbox;
          ctx.strokeStyle = "green";
          ctx.lineWidth = 2;
          ctx.strokeRect(x, y, width, height);
          ctx.font = "18px Arial";
          ctx.fillStyle = "green";
          ctx.fillText(
            `${prediction.class} (${Math.round(prediction.score * 100)}%)`,
            x,
            y > 10 ? y - 5 : 10
          );
        });
      }
    }
  };

  useEffect(() => {
    if (backendLoaded) {
      const interval = setInterval(() => {
        detectObjects();
      }, 100);

      return () => clearInterval(interval);
    }
  }, [model, backendLoaded]);

  return (
    <>
      <DashboardTitle title="Deteksi" />
      <div
        style={{ position: "relative", maxWidth: "100%", overflow: "hidden" }}
      >
        <div style={{ position: "relative", width: "100%" }}>
          <video
            ref={videoRef}
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              borderRadius: "20px",
            }}
          />
          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "auto",
              pointerEvents: "none",
              borderRadius: "20px",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ObjectDetection;
