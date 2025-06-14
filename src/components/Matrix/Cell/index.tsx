interface props {
  setMatrix: React.Dispatch<React.SetStateAction<number[]>>
  matrix: number[]
  pos: number
}

export function Cell({
  setMatrix,
  matrix,
  pos,
}: props) {

  return (
    <div className={'w-10 h-10 border ' + (matrix[pos] === 1? 'bg-gray-300': 'bg-white')} onClick={handleClick}>
    </div>
  )

  function handleClick() {
    setMatrix(prev => prev.map((item, i) => {
      if (i !== pos) {
        return item
      }

      if(item === 0) {
        return 1
      }

      return 0
    }))
  }
}