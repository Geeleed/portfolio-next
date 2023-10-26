import React, { useEffect, useRef, useState } from "react";
import css from "./Contact.module.css";
import Poster from "./Poster";

export default function WebBoard() {
  const [sw, setSw] = useState(true);
  const [base64, setBase64] = useState();
  const imgRef = useRef();
  const [comment, setComment] = useState([]);
  const textareaRef = useRef();
  function post(base64Image, sometext) {
    const timestamp = new Date();
    let data;
    if (base64Image) {
      data = { timestamp: timestamp, base64Image: base64Image, text: sometext };
    } else {
      data = { timestamp: timestamp, text: sometext };
    }

    fetch("https://back-portfolio-next.vercel.app/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  }
  useEffect(() => {
    fetch("https://back-portfolio-next.vercel.app/comment")
      .then((res) => res.json())
      .then((data) => setComment(data));
  }, [sw]);
  return (
    <section className={css.webboard}>
      <h1 id="webboard">Web board</h1>
      <article>
        {comment.map((i, index) => (
          <Poster id={index} key={index} data={i} />
        ))}
      </article>
      <form>
        <div>{base64 && <img src={base64} />}</div>
        <div className={css.webboardInput}>
          <textarea ref={textareaRef} placeholder="กรอกข้อความ" />
          <div>
            <p
              onClick={() => {
                imgRef.current.click();
              }}
              style={{ cursor: "pointer", textAlign: "center" }}
            >
              {base64 ? "เปลี่ยน" : "เพิ่มภาพ"}
            </p>
            <input
              ref={imgRef}
              style={{ display: "none" }}
              onClick={() => {
                base64 && setBase64();
              }}
              onChange={(e) => {
                const reader = new FileReader();
                const file = e.target.files[0];
                // const filetype = file.type
                // console.log(filetype)
                // แปลงไฟล์เป็น base64 ซึ่งเป็น string
                reader.readAsDataURL(file);
                // โหลด base64 ออกมาจาก reader
                reader.onloadend = () => {
                  setBase64(reader.result);
                };
              }}
              type="file"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                post(base64, textareaRef.current.value);
                textareaRef.current.value = "";
                setBase64();
                setSw((i) => !i);
              }}
            >
              โพสต์
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
