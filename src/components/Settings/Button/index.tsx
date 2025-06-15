interface Props{
  text: string
  onClick: () => void
}

export default function Button({
  text,
  onClick,
}: Props) {
  return(
    <button type="button" onClick={onClick} className='text-gray-900 hover:text-white border border-gray-400 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
      {text}
    </button>
  )
}