import React, { cloneElement } from "react";
import css from "./Home.module.css";

export function Anim({ numList, elementList }) {
  let elems = [];
  for (let i = 0; i < elementList.length; i++) {
    let element = elementList[i];
    for (let j = 0; j < numList[i]; j++) {
      elems.push(cloneElement(element, { key: `${i}-${j}` }));
    }
  }
  return <div className={css.anim__main}>{elems}</div>;
}
export const XY = (r, deg) => {
  const angle = (deg * Math.PI) / 180;
  const x = Math.cos(angle) * r;
  const y = Math.sin(angle) * r;
  return [x, y];
};
