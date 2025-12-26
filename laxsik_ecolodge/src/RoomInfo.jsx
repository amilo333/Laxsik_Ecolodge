import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "./roomInfo.css";
import room1 from "../src/assets/images/rooms/room.png";
import room2 from "../src/assets/images/rooms/room_img.png";
const rooms = [
  {
    title: "DELUXE BANCONY",
    image: room1,
    desc: "The spacious double room features air conditioning, a private entrance, a  terrace with garden views as well as a private bathroom boasting a  shower. The unit has 1 bed.",
  },
  {
    title: "KING ROOM WITH BALCONY",
    image: room2,
    desc: "The spacious double room features air conditioning, a private entrance, a  terrace with garden views as well as a private bathroom boasting a  shower. The unit has 1 bed.",
  },
  {
    title: "BUNGALOW",
    image: room1,
    desc: "The spacious double room features air conditioning, a private entrance, a  terrace with garden views as well as a private bathroom boasting a  shower. The unit has 1 bed.",
  },
  {
    title: "DELUXE BANCONY",
    image: room1,
    desc: "The spacious double room features air conditioning, a private entrance, a  terrace with garden views as well as a private bathroom boasting a  shower. The unit has 1 bed.",
  },
  {
    title: "KING ROOM WITH BALCONY",
    image: room2,
    desc: "The spacious double room features air conditioning, a private entrance, a  terrace with garden views as well as a private bathroom boasting a  shower. The unit has 1 bed.",
  },
  {
    title: "BUNGALOW",
    image: room1,
    desc: "The spacious double room features air conditioning, a private entrance, a  terrace with garden views as well as a private bathroom boasting a  shower. The unit has 1 bed.",
  },
];
export default function RoomInfo() {
  const swiperWrappedRef = useRef(null);
  function adjustMargin() {
    const screenWidth = window.innerWidth;
    if (swiperWrappedRef.current) {
      swiperWrappedRef.current.style.marginLeft =
        screenWidth <= 520
          ? "0px"
          : screenWidth <= 650
          ? "-50px"
          : screenWidth <= 800
          ? "-100px"
          : "-150px";
    }
  }

  useEffect(() => {
    adjustMargin();
    window.addEventListener("resize", adjustMargin);
    return () => window.removeEventListener("resize", adjustMargin);
  }, []);
  return (
    <main>
      <div className="container">
        <h3>Room & Sutes</h3>
        <Swiper
          modules={[Pagination]}
          grabCursor
          initialSlide={2}
          centeredSlides
          slidesPerView="auto"
          speed={800}
          slideToClickedSlide
          pagination={{ clickable: true }}
          breakpoints={{
            320: { spaceBetween: 40 },
            650: { spaceBetween: 30 },
            1000: { spaceBetween: 20 },
          }}
          onSwiper={(swiper) => {
            swiperWrappedRef.current = swiper.wrapperEl;
          }}
        >
          {rooms.map((room, index) => (
            <SwiperSlide key={index}>
              <img src={room.image} alt="" className="img-room"/>
              <div className="info-room">
                <div className="title">
                <h1>{room.title}</h1>
              </div>
              <div className="content">
                <div className="text-box">
                  <p>{room.desc}</p>
                </div>
              </div>
              <div className="footer">
                <button>
                  <span className="lable">EXPLORE</span>
                </button>
              </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}
