import { Cell } from "./Cell"

interface props {
  matrix: number[]
  setMatrix: React.Dispatch<React.SetStateAction<number[]>>
  COLS: number
  ROWS: number
}

export default function Matrix({
  matrix,
  setMatrix,
  COLS,
  ROWS,
}: props) {
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