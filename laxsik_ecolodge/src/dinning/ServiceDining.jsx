import React from "react";
import styles from "./ServiceDining.module.css";
import ServiceItem from "./ServiceItem";
import Contact from "./Contact";

export default function ServiceDining({services}) {
  
  return (
    <div className={styles["container"]}>
      <h3>SERVICES</h3>
      <div className={styles["box-service"]}>
        {services.map((item,index)=>(
            <ServiceItem  key={index} item = {item}></ServiceItem>
        ))}
      </div>
      <div className={styles["contact"]}>
        <Contact></Contact>
      </div>
    </div>
  );
}
