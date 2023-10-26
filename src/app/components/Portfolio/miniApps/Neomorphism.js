import React, { useEffect, useRef, useState } from "react";
import css from "./Neomorphism.module.css";
function Neomorphism() {
  const [sun, setSun] = useState("A");
  const [color, setColor] = useState("#c20114");
  const [neoStyle, setNeoStyle] = useState("flat");
  const [size, setSize] = useState(300);
  const [rad, setRad] = useState(100);
  const [dist, setDist] = useState(13);
  const [inten, setInten] = useState(0.15);
  const [blur, setBlur] = useState(30);
  const sunRef = useRef();
  const neoStyleRef = useRef();
  const [shadow, setShadow] = useState("");
  const [grad, setGrad] = useState("");
  useEffect(() => {
    sunRef.current.click();
    neoStyleRef.current.click();
  }, []);
  useEffect(() => {
    let darkRGB, lightRGB;
    let { hue, sat, lig } = rgb2hsl(color);
    let dark = parseFloat(lig) - parseFloat(inten);
    let light = parseFloat(lig) + parseFloat(inten);
    darkRGB = `hsl(${(hue * 1).toFixed(0)},${(sat * 100).toFixed(0)}%,${(
      dark * 100
    ).toFixed(0)}%)`;
    lightRGB = `hsl(${(hue * 1).toFixed(0)},${(sat * 100).toFixed(0)}%,${(
      light * 100
    ).toFixed(0)}%)`;
    let angle = "";
    let newShadow = "";
    let inset = "";
    if (neoStyle == "flat") {
      inset = "";
      setGrad("");
    } else if (neoStyle == "pool") {
      inset = "inset";
      setGrad("");
    }
    if (sun == "A") {
      angle = "135deg";
      newShadow = `${dist}px ${dist}px ${blur}px ${darkRGB} ${inset}, -${dist}px -${dist}px ${blur}px ${lightRGB} ${inset}`;
    } else if (sun == "B") {
      angle = "225deg";
      newShadow = `-${dist}px ${dist}px ${blur}px ${darkRGB} ${inset}, ${dist}px -${dist}px ${blur}px ${lightRGB} ${inset}`;
    } else if (sun == "C") {
      angle = "45deg";
      newShadow = `${dist}px -${dist}px ${blur}px ${darkRGB} ${inset}, -${dist}px ${dist}px ${blur}px ${lightRGB} ${inset}`;
    } else if (sun == "D") {
      angle = "-45deg";
      newShadow = `-${dist}px -${dist}px ${blur}px ${darkRGB} ${inset}, ${dist}px ${dist}px ${blur}px ${lightRGB} ${inset}`;
    }
    if (neoStyle == "concave") {
      setGrad(`linear-gradient(${angle},${darkRGB},${lightRGB})`);
    } else if (neoStyle == "convex") {
      setGrad(`linear-gradient(${angle},${lightRGB},${darkRGB})`);
    }
    setShadow(newShadow);
  }, [sun, color, neoStyle, size, rad, dist, inten, blur]);
  return (
    <div className={css.main} style={{ background: `${color}` }}>
      <h1>Neomorphism</h1>
      <div className={css.display}>
        <div className={css.sun}>
          <div>
            <input
              type="radio"
              name="sun"
              onChange={() => setSun("A")}
              ref={sunRef}
            />
            <div></div>
          </div>
          <div>
            <input type="radio" name="sun" onChange={() => setSun("B")} />
            <div></div>
          </div>
          <div>
            <input type="radio" name="sun" onChange={() => setSun("C")} />
            <div></div>
          </div>
          <div>
            <input type="radio" name="sun" onChange={() => setSun("D")} />
            <div></div>
          </div>
        </div>
        <div
          className={css.object}
          style={{
            background: `${color} ${grad}`,
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: `${rad}px`,
            boxShadow: `${shadow}`,
          }}
        ></div>
      </div>
      <div className={css.ctrl}>
        <div className={css.input1}>
          <div>
            <input
              type="color"
              onChange={(e) => setColor(e.target.value)}
              value={color}
            />
          </div>
          <div>
            <input
              type="radio"
              name="style"
              onChange={() => setNeoStyle("flat")}
              ref={neoStyleRef}
            />
            <p>Flat</p>
          </div>
          <div>
            <input
              type="radio"
              name="style"
              onChange={() => setNeoStyle("concave")}
            />
            <p>Concave</p>
          </div>
          <div>
            <input
              type="radio"
              name="style"
              onChange={() => setNeoStyle("convex")}
            />
            <p>Convex</p>
          </div>
          <div>
            <input
              type="radio"
              name="style"
              onChange={() => setNeoStyle("pool")}
            />
            <p>Pool</p>
          </div>
        </div>
        <p>
          {`background:${color} ${grad}; width:${size}px; height:${size}px; border-radius:${rad}px; box-shadow:${shadow};`}
        </p>
        <div className={css.input2}>
          <input
            type="range"
            onChange={(e) => setSize(e.target.value)}
            min={0}
            max={350}
            step={1}
            value={size}
          />
          <input
            type="range"
            onChange={(e) => setRad(e.target.value)}
            min={0}
            max={200}
            step={1}
            value={rad}
          />
          <input
            type="range"
            onChange={(e) => setDist(e.target.value)}
            min={0}
            max={20}
            step={0.01}
            value={dist}
          />
          <input
            type="range"
            onChange={(e) => setInten(e.target.value)}
            min={0}
            max={0.2}
            step={0.01}
            value={inten}
          />
          <input
            type="range"
            onChange={(e) => setBlur(e.target.value)}
            min={0}
            max={50}
            step={1}
            value={blur}
          />
        </div>
        <div className={css.labelInput2}>
          <p>Size</p>
          <p>Radius</p>
          <p>Distance</p>
          <p>Intensity</p>
          <p>Blur</p>
        </div>
      </div>
    </div>
  );
}

export default Neomorphism;
// https://www.had2know.org/technology/hsl-rgb-color-converter.html
function rgb2hsl(hexRGB) {
  let R, G, B;
  R = hexRGB[1] + hexRGB[2];
  G = hexRGB[3] + hexRGB[4];
  B = hexRGB[5] + hexRGB[6];
  R = parseInt(R, 16);
  G = parseInt(G, 16);
  B = parseInt(B, 16);
  let M = Math.max(R, G, B);
  let m = Math.min(R, G, B);
  let d = (M - m) / 255;
  let L = (0.5 * (M + m)) / 255;
  let S;
  if (0 < L <= 1) {
    S = d / (1 - Math.abs(2 * L - 1));
  } else {
    S = 0;
  }
  let H;
  if (G >= B) {
    H =
      (Math.acos(
        (R - 0.5 * G - 0.5 * B) /
          Math.sqrt(R * R + G * G + B * B - R * G - R * B - G * B)
      ) *
        180) /
      Math.PI;
  } else if (B > G) {
    H =
      360 -
      (Math.acos(
        (R - 0.5 * G - 0.5 * B) /
          Math.sqrt(R * R + G * G + B * B - R * G - R * B - G * B)
      ) *
        180) /
        Math.PI;
  }

  return { hue: H.toFixed(2), sat: S.toFixed(2), lig: L.toFixed(2) };
}
// function hsl2rgb(H, S, L) {
//     let d = S * (1 - Math.abs(2 * L - 1))
//     let m = 255 * (L - 0.5 * d)
//     let x = d * (1 - Math.abs((H / 60) % 2 - 1))
//     let R, G, B
//     if (0 <= H < 60) {
//         R = 255 * d + m
//         G = 255 * x + m
//         B = m
//     } else if (60 <= H < 120) {
//         R = 255 * x + m
//         G = 255 * d + m
//         B = m
//     } else if (120 <= H < 180) {
//         R = m
//         G = 255 * d + m
//         B = 255 * x + m
//     } else if (180 <= H < 240) {
//         R = m
//         G = 255 * x + m
//         B = 255 * d + m
//     } else if (240 <= H < 300) {
//         R = 255 * x + m
//         G = m
//         B = 255 * d + m
//     } else if (300 <= H < 360) {
//         R = 255 * d + m
//         G = m
//         B = 255 * x + m
//     } else if (H == 360) {
//         R = 255 * d + m
//         G = 255 * x + m
//         B = m
//     }
//     R = parseInt(R)
//     G = parseInt(G)
//     B = parseInt(B)
//     return '#' + R.toString(16) + G.toString(16) + B.toString(16)
// }
