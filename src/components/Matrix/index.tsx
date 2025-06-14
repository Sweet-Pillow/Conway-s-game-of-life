import { useState } from "react"
import { Cell } from "./Cell"

const COLS = 30
const ROWS = 10

export default function Matrix() {
  const [matrix, setMatrix] = useState<number[]>(new Array(COLS * ROWS).fill(0))
  // const i = Math.floor(index/ROWS)
  // const j = Math.floor(index % COLS)

  return (
    <div className={`grid [grid-template-columns:repeat(30,minmax(0,1fr))] w-fit`}>
      {Array(COLS * ROWS).fill(0).map((_value, index) => (
        <Cell 
          key={crypto.randomUUID()}
          setMatrix={setMatrix}
          matrix={matrix}
          pos={index}
        />
      ))}
    </div>
  )
}