import { useEffect, useState } from "react";
import styles from "./backToTop.module.css"

export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
  }, []);
  if (!show) return null;
  return (
    <div>
      <button className={styles.backToTop}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        
      >
        ↑
      </button>
    </div>
  );
}
