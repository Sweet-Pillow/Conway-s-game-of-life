import Button from "./Button";

interface props {
  run: () => void
  stop: () => void
  clear: () => void
  onStep: () => void
  isRunning: boolean
}

export default function Settings({
  run,
  stop,
  clear,
  onStep,
  isRunning,
}: props) {
  return(
    <div className='flex flex-row gap-9'>
      <Button 
        text={isRunning? 'Stop': 'Run'}
        onClick={isRunning? stop: run}
      />
      <Button 
        text={'Clear'}
        onClick={clear}
      />
      <Button 
        text={'One step'}
        onClick={onStep}
      />
    </div>
  )
}