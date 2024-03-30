import React from 'react'

const Button1 = ({text}) => {
  return (
    <div className='w-full'>
        <button className='bg-[#469620] p-5 text-white font-semibold w-full shadow-lg hover:bg-[#fdd65b]' style={{
            '--tw-shadow': '5px 5px 0px 0px rgba(0, 0, 0, 1)'
        }}>{text}</button>
    </div>
  )
}

export default Button1