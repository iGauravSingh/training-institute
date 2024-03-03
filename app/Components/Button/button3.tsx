import React from 'react'

interface PropsButton1 {
    name: string;
    onClick?: () => void;
}

const ButtonBlueHover = ({name}: PropsButton1) => {
  return (
    <div>
        <button className=' text-navcolor hover:text-white border-2 border-navcolor hover:border-newblue hover:bg-newblue px-6 py-4 rounded-full font-bold text-md'>{name}</button>
    </div>
  )
}

export default ButtonBlueHover