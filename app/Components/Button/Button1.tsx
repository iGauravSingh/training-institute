import React from 'react'

interface PropsButton1 {
    name: string;
    onClick?: () => void;
}

const ButtonGrey = ({name}: PropsButton1) => {
  return (
    <div>
        <button className=' bg-navcolor text-white px-6 py-4 rounded-full font-bold text-md'>{name}</button>
    </div>
  )
}

export default ButtonGrey