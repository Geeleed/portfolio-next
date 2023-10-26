import css from "./Contact.module.css";

export default function Poster({ id, data }) {
  return (
    <div className={css.poster}>
      <h1>ความเห็น {id}</h1>
      <p style={{ fontSize: "0.7rem" }}>{data.timestamp}</p>
      {data.base64Image && (
        <img src={data.base64Image} style={{ width: "100%" }} alt="" />
      )}
      <p>{data.text}</p>
    </div>
  );
}
