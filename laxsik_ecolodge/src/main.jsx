import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DinningPage from "./dinning/DinningPage.jsx";
import HomePage from "./home/HomePage.jsx";
import SpaMassage from "./spa/SpaMassage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage></HomePage>}></Route>
          <Route path="dinning" element={<DinningPage></DinningPage>}></Route>
          <Route path="spa&massage" element={<SpaMassage></SpaMassage>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
