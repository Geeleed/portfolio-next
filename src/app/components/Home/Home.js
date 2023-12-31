import React from "react";
import css from "./Home.module.css";
import Link from "next/link";
import { Anim } from "./Anim";
import { Sq2 } from "./Sq2";
import { Sq } from "./Sq";
function Home() {
  return (
    <main id="home" className={css.main}>
      <Anim
        numList={[20, 5]}
        elementList={[<Sq key={""} />, <Sq2 key={""} />]}
      />
      <div
        style={{
          width: "inherit",
          height: "inherit",
          backgroundColor: "#000000aa",
        }}
      ></div>
      <div className={css.content}>
        <h1>PORTFOLIO</h1>
        <p>สวัสดีครับ ยินดีที่ได้รู้จัก เว็บนี้ทำไว้เป็นแฟ้มสะสมผลงานด้าน IT</p>
        <div>
          <Link href={"resume-front-end-2.pdf"} target="_blank">
            Resume
          </Link>
          <Link href={"#profile"}>Profile</Link>
        </div>
      </div>
      <Link href={"#profile"} className={css.scroll__down}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-double-down"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
          <path
            fill-rule="evenodd"
            d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </Link>
    </main>
  );
}

export default Home;
