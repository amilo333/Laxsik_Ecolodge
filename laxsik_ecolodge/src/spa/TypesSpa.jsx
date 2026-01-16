import React from "react";
import { spas } from "../data/spas";
import styles from "./TypesSpa.module.css";
import ServiceDining from "../dinning/ServiceDining";
import { services } from "../data/spas";

export default function TypesSpa() {
  return (
    <div className={styles["container"]}>
      {spas.map((spa, index) => (
        <React.Fragment key={index}>
          <div className={styles.box}>
            <div className={styles.infor}>
              <p className={styles.title}>{spa.title}</p>
              <div className={styles.line}></div>
              <p className={styles.desc}>{spa.desc}</p>
            </div>
            <img src={spa.img} alt="" className={styles.img1} />
          </div>

          {/* Chèn component vào giữa */}
          {index === 0 && <ServiceDining services={services}></ServiceDining>}
        </React.Fragment>
      ))}
    </div>
  );
}
