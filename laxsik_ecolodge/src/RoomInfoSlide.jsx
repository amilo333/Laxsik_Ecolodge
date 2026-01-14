import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import room1 from "../src/assets/images/rooms/room.png";
import room2 from "../src/assets/images/rooms/room_img.png";
import styles from "./roomInfoSlide.module.css";

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

export default function RoomInfoSlide() {
  return (
    <div className={styles["room-info-slide-container"]}>
      <h3>Room & Sutes</h3>
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {rooms.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={styles["slide-container"]}>
              <img src={item.image} alt="image" />
              <div className={styles["slide-title"]}>{item.title}</div>
              <div className={styles["slide-desc"]}>{item.desc}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
