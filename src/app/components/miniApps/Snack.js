'use client'
import React, { useEffect, useRef, useState } from 'react'
import css from './Snack.module.css'

const List = ({ id, price, weight, score, remove }) => {
  return (
    <div className={css.list}>
      <div>{price}</div>
      <div>{weight}</div>
      <div><div style={{ width: `${score * 100}%` }}></div></div>
      <div onClick={() => remove(id)}>X</div>
    </div>
  )
}

let id = 0
let maxScore = 0
let normalize = []
function Snack() {
  const [list, setList] = useState()
  const [data, setData] = useState([])
  const priceRef = useRef()
  const weightRef = useRef()

  function add() {
    const price = priceRef.current.value
    const weight = weightRef.current.value
    if (!(price && weight)) { return }
    const score = weight / price
    id++
    setData(i => [...i, { id, price, weight, score }])
    priceRef.current.value = ''
    weightRef.current.value = ''
  }

  function remove(id) {
    let newData = []
    for (let i = 0; i < data.length; i++) { if (data[i].id != id) { newData.push(data[i]) } }
    setData(newData)
  }

  useEffect(() => {
    maxScore = Math.max(...data.map(data => data.score))
    normalize = data.map(elem => ({ id: elem.id, price: elem.price, weight: elem.weight, normScore: elem.score / maxScore }))
    setList(normalize.map(elem => (
      <List key={elem.id} id={elem.id} price={elem.price} weight={elem.weight} score={elem.normScore} remove={remove} />
    )))
    priceRef.current.focus()
  }, [data])
  return (
    <div className={css.main}>
      <header className={css.header}>
        <h1>SNACK</h1>
        <div className={css.bar}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </header>

      <section className={css.section}>
        <div className={css.head}>
          <h1>Price</h1> <h1>Weight</h1> <h1>Score</h1> <h1 onClick={() => setData([])}>X</h1>
        </div>

        {list}

        <div className={css.input}>
          <input onKeyDown={event => event.key === 'Enter' && add()} type='number' ref={priceRef} autoFocus />
          <input onKeyDown={event => event.key === 'Enter' && add()} type='number' ref={weightRef} />
          <div onClick={() => { add(); priceRef.current.focus() }}>+</div>
        </div>
      </section>
    </div>
  )
}

export default Snack