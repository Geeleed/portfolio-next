import React, { useEffect, useState } from 'react'
import css from './MiniGameCard.module.css'
// import { range, randColor, permutation } from '../../functions/utility'
function range(n) {
    let array = []
    for (let i = 0; i < n + 1; i++) {
        array.push(i)
    }
    return array
}
function randColor() {
    const hex = '0123456789abcdef'
    let hexCode = '#'
    for (let i = 0; i < 6; i++) {
        hexCode += hex[Math.floor(Math.random() * 15.99)]
    }
    return hexCode
}
function permutation(list) {
    const len = list.length
    let ndex = []
    let rands = []; for (let i = 0; i < len; i++) { rands.push(Math.random()) }
    for (let i = 0; i < len; i++) {
        let theIndex = rands.indexOf(Math.max(...rands))
        ndex.push(theIndex)
        rands[theIndex] = -1
    }
    let p = []
    for (const i of ndex) { p.push(list[i]) }
    return p
}

function MiniGameCard() {
    const [on, setOn] = useState(false)
    const [end, setEnd] = useState(false)
    const [gameState, setGameState] = useState(null)
    return (
        <div className={css.main}>
            <Begin setOn={setOn} />
            {on ? <Player setOn={setOn} setEnd={setEnd} setGameState={setGameState} /> : <></>}
            {end ? <End setOn={setOn} setEnd={setEnd} gameState={gameState} /> : <></>}
        </div>
    )
}

export default MiniGameCard

function Begin({ setOn }) {
    const [help, setHelp] = useState()
    return (
        <div className={css.begin}>
            <h1>Game</h1>
            <div onClick={() => setOn(true)}>Start</div>
            <div onClick={() => {
                setHelp(
                    <p className={css.howTo}
                        onClick={() => setHelp()}>
                        วิธีเล่น: มาเช้คสายตากันหน่อย กด Start แล้วจับคู่สีให้ตรงกัน ระวังนะ เฉดสีอาจจะใกล้เคียงกันจนคุณจำผิด!
                    </p>
                )
            }}>Help</div>
            {help}
        </div>
    )
}

function Player({ setOn, setGameState, setEnd }) {
    const [hexCode, setHexCode] = useState(range(9).map(i => randColor()))
    const [count, setCount] = useState(15)
    const [pair, setPair] = useState(10)
    const [id1, setId1] = useState(null)
    const [id2, setId2] = useState(null)

    useEffect(() => {
        setHexCode(permutation([...hexCode, ...hexCode]))
    }, [])
    function process(e) {
        if (id1 == null && id2 == null) {
            setId1(e.target.id)
        } else if (id1 != null && id2 == null && id1 != e.target.id) {
            setId2(e.target.id)
        }
    }
    useEffect(() => {
        if (id1 != null && id2 != null) {
            setTimeout(() => {
                if (hexCode[id1] == hexCode[id2]) {
                    setPair(i => i - 1)
                    document.getElementById(id1).style.cssText = `visibility:hidden;`
                    document.getElementById(id2).style.cssText = `visibility:hidden;`
                } else {
                    setCount(i => i - 1)
                    document.getElementById(id1).style.cssText = `background-color:var(--tiny-color);`
                    document.getElementById(id2).style.cssText = `background-color:var(--tiny-color);`
                }
            }, 800);
            setId1(null)
            setId2(null)
        }
        if (pair == 0 && count >= 0) {
            setGameState('ยอดเลย คุณชนะแล้ว!')
            setEnd(true)
            setOn(false)
        } else if (pair > 0 && count == 0) {
            setGameState('แย่จังนะ คุณแพ้แล้ว!')
            setEnd(true)
            setOn(false)
        }

    }, [id1, id2, pair, count])
    return (
        <div className={css.player} >
            <header>
                <p className={css.heart} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
                    <svg style={{ animationDuration: `${count / 15}s` }} xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="var(--tiny-color)" class="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                    </svg>
                    {count}
                </p>
                <div>
                    <div onClick={() => setOn(false)}>X</div>
                </div>
            </header>
            <section className={css.section}>
                {hexCode
                    .map((color, index) => <Box color={color} key={index} index={index} process={process} />)}
            </section>
        </div>
    )
}

function Box({ color, index, process }) {
    return (
        <div
            key={index}
            id={index}
            className={css.box}
            onClick={(e) => {
                e.target.style.cssText = `background-color:${color};box-shadow: 0 0 30px ${color};`;
                process(e)
            }}
        ></div>
    )
}

function End({ gameState, setOn, setEnd }) {
    return (
        <div className={css.end}>
            <h1>{gameState}</h1>
            <h2 onClick={() => { setEnd(false); setOn(true); }} >New game</h2>
        </div>
    )
}