import logo from "../src/assets/images/logo/logo_2.png";
import down from "../src/assets/images/chevron_down.png";
import flag from "../src/assets/images/flag_eng.png";
import "./header.css";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const openBooking = () => {
    setOpen(true);
  };
  const closeBooking = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="header-row">
        <div className="header-left">
          <img src={logo} alt="" className="logo" />
          <div className="name-title">Laxsik Ecolodge</div>
        </div>
        <div className="bd"></div>
        <div className="header-center">
          <span className="brand-name">Laxsik Ecolodge</span>
          <ul className="nav-list">
            <li>
              OVERVIEW <img src={down} alt="" />
            </li>
            <li>
              ROOMS <img src={down} alt="" />
            </li>
            <li>DINING</li>
            <li>
              SPA & MASSAGE <img src={down} alt="" />
            </li>
            <li>
              NEWS <img src={down} alt="" />
            </li>
            <li>
              GALLERY <img src={down} alt="" />
            </li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="header-right">
          <div className="language">
            <img src={flag} alt="" />
            ENG <img src={down} alt="" />
          </div>
          <button className="menu-icon">☰</button>
          <button onClick={openBooking} className="cta">
            FIND NOW
          </button>
        </div>
      </div>
      <div className={open ? "booking-bar show" : "booking-bar"}>
        <button onClick={closeBooking} className="btn-hide">
          HIDE
        </button>
        <div className="booking-form">
          <div className="field">
            <label>Checkin Date</label>
            <input type="text" />
          </div>

          <div className="field">
            <label>Check-out Date</label>
            <input type="text" placeholder="Select date" />
          </div>

          <div className="field">
            <label>Guest</label>
            <input type="text" placeholder="" />
          </div>

          <div className="field field--promo">
            <label>Promo Code</label>
            <input type="text" placeholder="Enter code" />
          </div>

          <button className="cta-2 ">FIND NOW</button>
        </div>
      </div>
    </div>
  );
}
