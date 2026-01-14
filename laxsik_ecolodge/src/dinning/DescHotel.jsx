import React from "react";
import styles from "./DescHotel.module.css";

export default function DescHotel({ title, desc }) {
  return (
    <div className={styles["container"]}>
      <div className={styles["box"]}>
        <h1 className={styles["title"]}>{title}</h1>
        <p className={styles["desc"]}>{desc}</p>
      </div>
    </div>
  );
}
