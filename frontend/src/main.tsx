import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import WelcomePages from "./Pages/WelcomePages";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WelcomePages />
  </StrictMode>
);
