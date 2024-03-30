import React from 'react'
import Breaker from '../../components/Breaker/Breaker'
import emp from '../../assets/images/emp.jpg'
import bg3 from '../../assets/images/bg3.jpg'
const Vision = () => {
    
    const VisionCard = ({ heading , img , text}) => {
        return (
            <>
                <div className='bg-white transition-all w-auto  hover:translate-y-[-20px] border-b-[20px] border-[#fdd65b] cursor pointer group lg:w-[500px] '>
                    <img src={img}/>
                    <div className='px-6'>

                    <h3 className='text-2xl font-bold mt-10  group-hover:text-[#469620]'>{heading}</h3>
                    <p className='my-10'>
                   {text}</p>
                    </div>
                </div>
            </>
        )

    }
    return (
        <div className='w-full bg-[#469620] mt-[50px]'>
            <div className='w-[90%] m-auto flex flex-col justify-center items-center'>
                <h1 className='text-5xl font-bold mt-[30px] mb-[30px] text-white text-center'>Our Core Beliefs</h1>
                <Breaker />
                <p className='mt-[30px] text-center text-white'>Our primary objective is to champion
                    the rights and well-being of the most
                    neglected and vulnerable members of
                    society, ensuring their voices are
                    heard and their needs are addressed. </p>

                <div className='flex flex-col lg:flex-row gap-10 my-10'>
                    <VisionCard
                    img={emp}
                    heading={' Womens Empowerment for Social and Economic Advancement'} 
                    text={`Our 
                    organization is dedicated to fostering the 
                    social and economic empowerment of 
                    women, recognizing their pivotal role in 
                    driving positive change within 
                    communities. Through tailored programs 
                    and initiatives, we aim to equip women 
                    with the necessary resources, skills, and 
                    opportunities to thrive in both social and 
                    economic spheres`}
                    />
                      <VisionCard
                    img={bg3}
                    heading={' Capacity Building and Competency Based Skill Development:'} 
                    text={`We prioritize 
                    capacity building and skill development 
                    initiatives that are centered on fostering 
                    competencies essential for sustainable 
                    livelihoods. By offering targeted training 
                    and educational programs, we empower 
                    individuals to enhance their capabilities, 
                    thereby paving the way for long-term 
                    economic stability and prosperity.`}
                    />
                    


                </div>
            </div>
        </div>
    )
}

export default Vision