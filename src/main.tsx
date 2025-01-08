import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import TitleProvider from "./hooks/TitleContext.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <TitleProvider isAuthProp={null}>
      <App />
    </TitleProvider>
  </BrowserRouter>
);
