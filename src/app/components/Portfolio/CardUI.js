import css from "./Portfolio.module.css";
import { GitHub } from "./GitHub";

export function CardUI({ title, src, url }) {
  return (
    <main className={css.main3}>
      <h1>{title}</h1>
      <iframe src={src} />
      <GitHub href={url} />
    </main>
  );
}
