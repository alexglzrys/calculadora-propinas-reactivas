import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CalculadoraPropinasApp from "./CalculadoraPropinasApp";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CalculadoraPropinasApp />
  </StrictMode>,
);
