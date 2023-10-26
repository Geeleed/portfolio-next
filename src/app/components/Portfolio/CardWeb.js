import css from "./Portfolio.module.css";
import Image from "next/image";
import Link from "next/link";

export function CardWeb({ title, detail, img__src, url }) {
  const gen = (x) => parseInt(Math.random() * x);
  const offset = `path('M0,0 C${gen(-50)},0 ${gen(50)},${gen(50)} ${gen(
    50
  )},${gen(-50)} Z') 0deg`;
  return (
    <Link
      style={{ scale: `${1 - Math.random() * 0.1}`, offset: offset }}
      href={url}
      target="_blank"
      className={css.card__web__main}
    >
      <h1>{title}</h1>
      <div>
        <Image src={img__src} objectFit="cover" fill alt="" />
      </div>
      <p>{detail}</p>
      <button>{">"}</button>
    </Link>
  );
}
