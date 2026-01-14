import React from "react";
import styles from "./ServiceDining.module.css";
import ic_service_time from "../assets/images/icon/ic_service_time.png";
import ic_buffets from "../assets/images/icon/ic_buffets.png";
import ic_couple_dinner from "../assets/images/icon/ic_couple_dinner.png";
import ic_cocktail_and_drink from "../assets/images/icon/ic_cocktail_and_drink.png";
import ic_organic_ingredients from "../assets/images/icon/ic_clock.png";
import ic_firewood from "../assets/images/icon/ic_firewood.png";
import ServiceItem from "./ServiceItem";
import Contact from "./Contact";

export default function ServiceDining() {
  const service = [
    {
      image: ic_service_time,
      title: "Serving time",
      desc: "7:00 - 21h00",
    },
    {
      image: ic_buffets,
      title: "Buffets",
      desc: "+50 dished",
    },
    {
      image: ic_couple_dinner,
      title: "Couple Dinner",
      desc: "90 minutes, herbal massage",
    },
    {
      image: ic_cocktail_and_drink,
      title: "Cocktails & Drinks",
      desc: "Unique cocktail & fresh juice",
    },

    {
      image: ic_organic_ingredients,
      title: "organic ingredients",
      desc: "Local vegatables",
    },
    {
      image: ic_firewood,
      title: "firewood",
      desc: "Special grill food",
    },
  ];
  
  return (
    <div className={styles["container"]}>
      <h3>SERVICES</h3>
      <div className={styles["box-service"]}>
        {service.map((item,index)=>(
            <ServiceItem  key={index} item = {item}></ServiceItem>
        ))}
      </div>
      <div className={styles["contact"]}>
        <Contact></Contact>
      </div>
    </div>
  );
}
