import React from "react";
import css from "./Home.module.css";
import { XY } from "./Anim";

export function Sq2() {
  const [X, Y] = XY(1000, Math.random() * 360);
  return (
    <div
      className={css.sq2}
      style={{
        offset: `path('M0,0 L${parseInt(X)},${parseInt(Y)}') 0deg`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${Math.random() * 2 + 1}s`,
        backgroundColor: `var(--tiny-color)`,
      }}
    ></div>
  );
}
