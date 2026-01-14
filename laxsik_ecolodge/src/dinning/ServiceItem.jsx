import React from "react";
import ic_service_time from "../assets/images/icon/ic_service_time.png";
import ic_buffets from "../assets/images/icon/ic_buffets.png";
import ic_couple_dinner from "../assets/images/icon/ic_couple_dinner.png";
import ic_cocktail_and_drink from "../assets/images/icon/ic_cocktail_and_drink.png";
import ic_organic_ingredients from "../assets/images/icon/ic_clock.png";
import ic_firewood from "../assets/images/icon/ic_firewood.png";
import styles from './ServiceItem.module.css'
export default function ServiceItem({ item }) {
  return (
    <div className={styles["box"]}>
      <img src={item.image} alt="image" />
      <div className={styles['info']}>
        <p className={styles['title']}>{item.title}</p>
        <p className={styles['desc']}>{item.desc}</p>
      </div>
    </div>
  );
}
