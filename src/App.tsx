import { useState } from 'react'
import Matrix from './components/Matrix/index'
import Settings from './components/Settings'

const COLS = 30
const ROWS = 10

export default function App() {
  const [matrix, setMatrix] = useState<number[]>(new Array(COLS * ROWS).fill(0))
  
  const newMatrix = new Array(COLS * ROWS).fill(0)

  return (
    <main className='w-screen h-screen flex justify-center items-center flex-col gap-6'>
      <Matrix 
        matrix={matrix}
        setMatrix={setMatrix}
        COLS={COLS}
        ROWS={ROWS}
      />
      <Settings 
        run={run}
        clear={clear}
      />
    </main>
  )

  function run() {

    steps()

    setMatrix(newMatrix)

  }

  function clear() {
    newMatrix.map(() => (0))
    setMatrix(newMatrix)
  }

  function steps() {
    
    for(let pos = 0; pos < matrix.length; pos++){
      // if(matrix[pos] !== 0) continue

      const x = Math.floor(pos/COLS)
      const y = pos % COLS
      const yLeft = (x * COLS) + y - 1
      const yRight = (x * COLS) + y + 1
      const xTopLeftCorner = x - 1 < 0? -5: ((x - 1) * COLS) + y - 1
      const xBottomLeftCorner = ((x + 1) * COLS) + y - 1
      
      let neighbours = 0

      for(let i = 0; i < 3; i++) {
        if(matrix[xTopLeftCorner + i] === 1 && (xTopLeftCorner + i) >= 0 && (xTopLeftCorner + i) <= (COLS * ( x + 2 ))) {
          neighbours ++
        }
      }

      for(let i = 0; i < 3; i++) {
        if(matrix[xBottomLeftCorner + i] === 1 && (xBottomLeftCorner + i) >= 0 && (xBottomLeftCorner + i) <= (COLS * ( x + 2 ))) {
          neighbours ++
        }
      }

      if(yLeft >= 0 && matrix[yLeft] === 1) {
        neighbours ++
      }

      if(yRight < (COLS * ( x + 2 )) && matrix[yRight] === 1) {
        neighbours ++
      }

      // if(neighbours < 2) {
      //   newMatrix[pos] = 0
      // } else {
      //   newMatrix[pos] = 1
      // }

      if(matrix[pos] === 0) {
        if(neighbours === 3) {
          newMatrix[pos] = 1
        }
        continue
      }

      if(matrix[pos] === 1) {
        if(neighbours < 2 || neighbours > 3) {
          newMatrix[pos] = 0
        } else {
          newMatrix[pos] = 1
        }
      }
    }

  }
}
