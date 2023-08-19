import React from "react";
import mapboxgl from "mapbox-gl";
import { createRoot } from "react-dom/client";
import "mapbox-gl/dist/mapbox-gl.css";
import "./index.css";
import App from "./App";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYmVudXM2NzY3IiwiYSI6ImNsbGJsaGRhZzA2bzUzaHFvdTB6dDhqaTYifQ.eg3gCWLvN--6j7u4BeH_EQ";

createRoot(document.getElementById("root")).render(<App />);
