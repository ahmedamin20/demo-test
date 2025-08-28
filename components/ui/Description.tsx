import React from 'react'

const Description = ({text}:{text: string}) => {
  return (
    <p className='text-gray-400 text-[15px] font-semibold'>
      {text}
    </p>
  )
}

export default Description
