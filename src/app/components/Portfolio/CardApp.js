import css from "./Portfolio.module.css";
import Image from "next/image";
import { PopupPage } from "./PopupPage";

export function CardApp({ title, imageSrc, setPopup, componentData }) {
  // const gen = (x) => parseInt(Math.random() * (x))
  // const offset = `path('M0,0 C${gen(-50)},0 ${gen(50)},${gen(50)} ${gen(50)},${gen(-50)} Z') ${parseInt((Math.random()*2-1)*5)}deg`
  return (
    <div
      // style={{ scale: `${1 - Math.random() * 0.1}`, rotate: `${parseInt((Math.random() * 2 - 1) * 5)}deg` }}
      className={css.card__app__main}
      onClick={() =>
        setPopup(
          <PopupPage setPopup={setPopup} componentData={componentData} />
        )
      }
    >
      <h1>{title}</h1>
      <div>
        <Image src={imageSrc} objectFit="cover" fill alt="" />
      </div>
    </div>
  );
}
