import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CVApp from "./CVApp.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CVApp />
  </StrictMode>
);
