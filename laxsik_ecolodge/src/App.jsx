
import "./App.css";
import Header from "./Header";
import Banner from "./Banner";
import Content from "./Content";
import RoomInfoSlide from "./RoomInfoSlide";
import ServiceSection from "./ServiceSection";
import ExploreSapa from "./ExploreSapa";
import PostSapa from "./PostSapa";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import { Outlet } from "react-router-dom";
import galery_1 from './assets/images/galery/galery_1.png'

function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>     
      <Footer></Footer>
      <BackToTop></BackToTop>
    </>
  );
}

export default App;
