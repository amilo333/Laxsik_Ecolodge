import React from "react";
import Banner from "../Banner";
import Content from "../Content";
import RoomInfoSlide from "../RoomInfoSlide";
import ExploreSapa from "../ExploreSapa";
import PostSapa from "../PostSapa";
import ServiceSection from "../ServiceSection";
import galery_1 from '../assets/images/galery/galery_1.png'
export default function HomePage() {
  return (
    <div>
      
      <Banner  banner={galery_1}></Banner>
      <Content></Content>
      <RoomInfoSlide></RoomInfoSlide>
      <ServiceSection></ServiceSection>
      <ExploreSapa></ExploreSapa>
      <PostSapa></PostSapa>
      {/* <Footer></Footer> */}
    </div>
  );
}
