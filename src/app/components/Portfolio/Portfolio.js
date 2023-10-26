"use client";
import { useEffect, useState } from "react";
import css from "./Portfolio.module.css";
import Snack from "./miniApps/Snack";
import RateExchange from "./miniApps/RateExchange";
import Glassmorphism from "./miniApps/Glassmorphism";
import Neomorphism from "./miniApps/Neomorphism";
import MiniGameCard from "./miniApps/MiniGameCard";
import { CardWeb } from "./CardWeb";
import { CardApp } from "./CardApp";
import { MyAPI } from "./MyAPI";
import { CardUI } from "./CardUI";

function Portfolio() {
  const [popup, setPopup] = useState(null);
  const [apis, setApis] = useState(null);
  useEffect(() => {
    fetch("https://back-portfolio-next.vercel.app/getApi")
      .then((res) => res.json())
      .then((data) => {
        setApis(
          data.map((elem, index) => (
            <MyAPI
              key={index}
              api_name={elem.api_name}
              api_endpoint={elem.api_endpoint}
              api_method={elem.api_method}
              api_input={elem.api_input}
              api_output={elem.api_output}
              api_href={elem.api_source}
            />
          ))
        );
      });
  }, []);
  return (
    <div id="portfolio" className={css.main}>
      <section className={css.miniProject}>
        <h1>HTML CSS JavaScript</h1>
        <CardWeb
          title={"Restaurant Landing Page"}
          detail={
            "Landing page แรกที่ deploy สำเร็จ ใช้ HTML CSS JS ทำ 12 ชั่วโมง แบ่งทำ 2 วัน เสียเวลาไปกับการออกแบบนานมาก ตอนเริ่มคือนึกภาพไม่ค่อยออกว่าจะวางโครงร่างยังไงเลยลองหา ref จากในเน็ตมารวม ๆ กัน"
          }
          img__src={"/images/landing_page/lp1.jpg"}
          url={"https://lp-1-nu.vercel.app/"}
        />
        <CardWeb
          title={"Cleaning Service"}
          detail={
            "ลองทำ landing page ด้วย HTML CSS JS ซึ่งใช้เวลาทำ 12 ชั่วโมง แบ่งทำ 2 วัน ได้เรียนรู้อย่างนึง คือ เวลาส่วนใหญ่เสียไปกับการหารูปมาแปะ"
          }
          img__src={"/images/landing_page/lp2.jpg"}
          url={"https://lp-2-two.vercel.app/"}
        />
        <CardWeb
          title={"Simple Design"}
          detail={
            "ลองออกแบบเว็บ portfolio ง่าย ๆ ด้วย HTML CSS JS ใช้เวลาทำ 12 ชั่วโมง แบ่งทำ 2 วัน ภาพที่ใช้เป็นภาพที่ถ่ายเองที่บ้าน น้อนน่ารักกก"
          }
          img__src={"/images/landing_page/lp4.jpg"}
          url={"https://lp-4-alpha.vercel.app/"}
        />
        <CardWeb
          title={"Parallax"}
          detail={
            "ลองทำ parallax website ด้วย HTML CSS JS ใช้เวลาทำ 12 ชั่วโมง แบ่งทำ 2 วัน อันที่จริงเคยเห็นการทำ parallax โดยใช้แค่ HTML กับ CSS ไม่ต้องใช้ JS อยู่"
          }
          img__src={"/images/landing_page/lp5.jpg"}
          url={"https://lp-5.vercel.app/"}
        />
      </section>
      <section className={css.miniProject}>
        <h1>Mini Apps</h1>
        <CardApp
          imageSrc={"/images/miniApps/glassmorphism.png"}
          setPopup={setPopup}
          componentData={{
            component: <Glassmorphism />,
            title: "Glassmorphism",
            how: "effect กระจก ลองปรับเลื่อนดู เสร็จแล้วจะได้โค้ด CSS คัดลอกไปใช้ได้เลย",
            about:
              "เป็นแอปทำ effect แบบกระจก ซึ่งเป็น UI ที่นิยมใช้กันเยอะ การปรับหลัก ๆ จะเป็นความ blur กับสีกระจกที่เป็น gradient",
            href: "https://github.com/Geeleed/portfolio-next/blob/master/src/app/components/miniApps/Glassmorphism.js",
          }}
        />
        <CardApp
          imageSrc={"/images/miniApps/neomorphism.png"}
          setPopup={setPopup}
          componentData={{
            component: <Neomorphism />,
            title: "Neomorphism",
            how: "ลองเล่นดูเองจะเข้าใจง่ายกว่า เสร็จแล้วจะได้โค้ด CSS คัดลอกไปใช้ได้เลย",
            about:
              "ข้อสำคัญเรื่องนี้คือการปรับค่า light ในโหมดสี hsl ซึ่งต่างจากค่าเดิมอยู่ที่ประมาณ 10%-20% จะมีส่วนที่เป็นเงาซึ่งต้องปรับค่าแสงลง ส่วนที่โดยแสงไฟก็ต้องปรับค่าแสงเพิ่ม ย้ำนะว่าปรับค่า l ใน hsl",
            href: "https://github.com/Geeleed/portfolio-next/blob/master/src/app/components/miniApps/Neomorphism.js",
          }}
        />
        <CardApp
          imageSrc={"/images/miniApps/rateExchange.png"}
          setPopup={setPopup}
          componentData={{
            component: <RateExchange />,
            title: "Rate Exchange",
            how: "เลือกสกุลเงินที่คุณต้องการแปลง ซึ่งเรามีให้เลือกเยอะเลยหละ",
            about:
              "แอปนี้ใช้งาน api เกี่ยวกับอัตราแลกเปลี่ยน ดึงข้อมูลมาแล้วที่เหลือเป็นเรื่องการคำนวณ แอปนี้ยุ่งยากตรงที่ทำให้ input และ output เป็น element เดียวกัน ทุกครั้งที่มีบางอย่างเปลี่ยนแปลงไม่ว่าจะเลือกสกุลเงินหรือเปลี่ยนจำนวนเงิน ก็จะคำนวณแล้วแสดงผลใหม่ทันที",
            href: "https://github.com/Geeleed/portfolio-next/blob/master/src/app/components/miniApps/RateExchange.js",
          }}
        />
        <CardApp
          imageSrc={"/images/miniApps/snack.png"}
          setPopup={setPopup}
          componentData={{
            component: <Snack />,
            title: "Snack",
            how: "แอปเปรียบเทียบความคุ้มค่า หากต้องตัดสินใจว่าซื้อของชิ้นไหนคุ้มกว่า ขอแนะนำแอปนี้ กรอกราคาและน้ำหนักสินค้าลงไป ตัวแอปจะแสดงค่าแถบคะแนนสีฟ้า อันไหนเยอะสุดก็เลือกซื้ออันนั้นแหละ!",
            about:
              "แอปนี้เกิดจากการไปหาเลือกซื้อของแล้วเปรียบเทียบราคาว่าซื้ออันไหนจึงจะคุ้ม ถ้าปริมาณต่อบาทมันเยอะแสดงว่าค่อนข้างคุ้ม แน่นอนว่าใช้เป็นแค่เกณฑ์เบื้องต้น เสียเวลาส่วนใหญ่ไปกับการออกแบบหน้าตาแอป การเขียนโค้ดมีความยุ่งยากตรงการแสดงแถบคะแนน เพราะเราต้องอัปเดตทุกครั้งที่มีการเพิ่มรายการ แล้วต้องปรับสเกลของแถบให้เต็มสำหรับตัวที่คุ้มสุดและเพื่อความดูเข้าใจง่ายอีกด้วย",
            href: "https://github.com/Geeleed/portfolio-next/blob/master/src/app/components/miniApps/Snack.js",
          }}
        />
        <CardApp
          imageSrc={"/images/miniApps/miniGameByReactJs.png"}
          setPopup={setPopup}
          componentData={{
            component: <MiniGameCard />,
            title: "Mini Game By React.js",
            how: "เกมส์จับคู่ จำให้ได้ว่าสีไหนอยู่อันไหน สีมันมีหลายเฉด เล่นให้ชนะ นะ! มันยากมาก ยิ่งหัวใจเหลือน้อยมันจะยิ่งเต้นเร็วนะ",
            about:
              "เกมส์นี้ใช้ react.js ทำ เป็นเกมส์จับคู่ง่าย ๆ จะสุ่มสีและตำแหน่งทุกครั้งเมื่อเริ่มเล่น",
            href: "https://github.com/Geeleed/portfolio-next/blob/master/src/app/components/miniApps/MiniGameCard.js",
          }}
        />
        {popup}
      </section>
      <h1>Simple UI</h1>
      <section className={css.basicUI}>
        <CardUI
          title={"Button"}
          src={"elements/button/btn1.html"}
          url={
            "https://github.com/Geeleed/portfolio-next/blob/master/public/elements/button/btn1.html"
          }
        />
        <CardUI
          title={"Button"}
          src={"elements/button/btn2.html"}
          url={
            "https://github.com/Geeleed/portfolio-next/blob/master/public/elements/button/btn2.html"
          }
        />
        <CardUI
          title={"Button"}
          src={"elements/button/btn3.html"}
          url={
            "https://github.com/Geeleed/portfolio-next/blob/master/public/elements/button/btn3.html"
          }
        />
        <CardUI
          title={"Button"}
          src={"elements/button/btn4.html"}
          url={
            "https://github.com/Geeleed/portfolio-next/blob/master/public/elements/button/btn4.html"
          }
        />
        <CardUI
          title={"Button"}
          src={"elements/button/btn5.html"}
          url={
            "https://github.com/Geeleed/portfolio-next/blob/master/public/elements/button/btn5.html"
          }
        />
        <CardUI
          title={"Loader Animation"}
          src={"elements/loader/loader1.html"}
          url={
            "https://github.com/Geeleed/portfolio-next/blob/master/public/elements/loader/loader1.html"
          }
        />
        <CardUI
          title={"Loader Animation"}
          src={"elements/loader/loader2.html"}
          url={
            "https://github.com/Geeleed/portfolio-next/blob/master/public/elements/loader/loader2.html"
          }
        />
        <CardUI
          title={"Loader Animation"}
          src={"elements/loader/loader3.html"}
          url={
            "https://github.com/Geeleed/portfolio-next/blob/master/public/elements/loader/loader3.html"
          }
        />
        <CardUI
          title={"Loader Animation"}
          src={"elements/loader/loader4.html"}
          url={
            "https://github.com/Geeleed/portfolio-next/blob/master/public/elements/loader/loader4.html"
          }
        />
      </section>
      <h1>My APIs Service</h1>
      <section className={css.myAPI}>{apis}</section>
    </div>
  );
}

export default Portfolio;
