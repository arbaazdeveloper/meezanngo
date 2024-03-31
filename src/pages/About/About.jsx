import React from 'react'
import aboutBg from '../../assets/images/about-bg.webp'
import rd1 from '../../assets/images/rd-1.jpg'
import rd2 from '../../assets/images/rd-2.jpg'
import rd3 from '../../assets/images/rd-3.jpg'
import Breaker from '../../components/Breaker/Breaker'
import hand from '../../assets/images/hand.svg'
export const About = () => {
  const IntroCard=({})=>{
    return(
      <div className='p-10 w-[90%] lg:w-[350px] flex flex-col gap-10 shadow-lg hover:bg-[#469620] transition-all duration-200 hover:text-white group'>
      <div>
      <img src={hand} className='h-20'/>
      </div>
      <h1 className='text-2xl font-bold '>We Help</h1>
      <p className='text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem corrupti officia enim non quae est iusto eum, saepe ipsa neque deleniti quas voluptas delectus eius? Voluptatibus sint voluptatum nihil modi.</p>
      <button className='bg-white border p-2 border-[#000] w-[200px] font-semibold uppercase hover:shadow-lg hover:bg-[#469620] hover:text-white group-hover:bg-[#fdd65b]' style={{
        '--tw-shadow': '5px 5px 0px 0px rgba(0, 0, 0, 1)'
      }}>Read More</button>
    </div>
    )
  }
  return (
    <div>
      <div className='w-full h-[80vh] flex' style={{ background: `url(${aboutBg})` }} >

        <div className='w-full h-full flex flex-col  justify-center px-10'>
          <div className='bg-[#469620] p-5 w-[150px] text-center'>
            <h1 className='font-semibold text-white'>About Us</h1>
          </div>
          <h1 className='font-semibold text-2xl lg:text-5xl mt-10'>Join Us Contact Us To Better Know About Us</h1>
        </div>

        <div className='w-[50%] relative'>
          <img className='h-20 lg:h-64 absolute top-64' src={rd1} alt='RD1' />
          <img className='h-20 lg:h-64 absolute right-64 top-10' src={rd3} alt='RD1' />
          <img className='h-20 lg:h-64 absolute top-20 right-10' src={rd2} alt='RD1' />
        </div>
      </div>

      <div className='flex justify-center items-center flex-col'>
        <h1 className='text-5xl font-bold mt-[30px] mb-[30px]  text-center'>Who Are We</h1>
        <Breaker />
        <div className='flex items-center flex-col lg:flex-row gap-5 my-10'>
         <IntroCard/>
         <IntroCard/>
         <IntroCard/>
          
        </div>

      </div>

    </div>
  )
}
