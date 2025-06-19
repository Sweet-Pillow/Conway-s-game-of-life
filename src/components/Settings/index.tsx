import Button from "./Button";

interface props {
  run: () => void
  clear: () => void
}

export default function Settings({
  run,
  clear,
}: props) {
  return(
    <div className='flex flex-row gap-9'>
      <Button
        text={'Run'}
        onClick={run}
      />
      <Button 
        text={'Clear'}
        onClick={clear}
      />
    </div>
  )
}