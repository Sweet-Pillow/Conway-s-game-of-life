import Button from "./Button";

export default function Settings() {
  return(
    <div className='flex flex-row gap-9'>
      <Button 
        text={'Run/Stop'}
        onClickFunction={() => {}}
      />
      <Button 
        text={'One step'}
        onClickFunction={() => {}}
      />
      <Button 
        text={'Clear/Restart'}
        onClickFunction={() => {}}
      />
    </div>
  )
}