import React from 'react'
import aboutBg from '../../assets/images/about-bg.webp'
export const About = () => {
  return (
    <div>
        <div className='w-full h-[80vh]' style={{background:`url(${aboutBg})`}} >

          <div className='w-full h-full'>
            <div className='bg-green-100'>
              <h1>About Us</h1>
            </div>
          </div>
        </div>
    </div>
  )
}
