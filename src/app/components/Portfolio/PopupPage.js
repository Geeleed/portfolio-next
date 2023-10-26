import { useState } from "react";
import css from "./Portfolio.module.css";
import { GitHub } from "./GitHub";

export function PopupPage({ setPopup, componentData }) {
  const [toggle, setToggle] = useState(true);
  return (
    <div className={css.popupPage}>
      <div
        onClick={() => setPopup(null)}
        style={{
          position: "absolute",
          top: "0rem",
          right: "0rem",
          fontSize: "3rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "3rem",
          width: "3rem",
          cursor: "pointer",
          zIndex: "1",
        }}
      >
        X
      </div>
      <div className={css.popupApp}>{componentData.component}</div>
      <div className={toggle ? css.popupDetail : css.popupDetail2}>
        <h1>{componentData.title}</h1>
        <h2>วิธีใช้</h2>
        <p>{componentData.how}</p>
        <h2>เกี่ยวกับ...</h2>
        <p>{componentData.about}</p>
        <label>Source </label>
        <GitHub href={componentData.href} />
      </div>
      <button
        className={toggle ? css.helpBtn : css.helpBtn2}
        onClick={() => setToggle((i) => !i)}
      >
        ?
      </button>
    </div>
  );
}
