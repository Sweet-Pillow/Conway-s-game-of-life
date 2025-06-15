import { useState } from 'react'
import Matrix from './components/Matrix/index'
import Settings from './components/Settings'

const COLS = 30
const ROWS = 10

export default function App() {
  const [matrix, setMatrix] = useState<number[]>(new Array(COLS * ROWS).fill(0))
  const [isRunning, setIsRunning] = useState<boolean>(false)

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
        stop={stop}
        clear={clear}
        onStep={onStep}
        isRunning={isRunning}
      />
    </main>
  )

  function run() {
    setIsRunning(true)
  }

  function stop() {
    setIsRunning(false)
  }

  function clear() {

  }

  function onStep() {

  }
}
