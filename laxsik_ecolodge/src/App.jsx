import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import { Outlet } from "react-router-dom";
import SpaMassage from "./spa/SpaMassage";


function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>     
      <BackToTop></BackToTop>
      
    </>
  );
}

export default App;
