import React from 'react'
import Breaker from '../../components/Breaker/Breaker'
import imgChild from "../../assets/images/img-child.jpg"
const Objective = () => {
   

    const ObjectiveCard = ({ serial, description }) => {
        return (<>
            <div className='text-center w-[90%] m-auto lg:flex  gap-10 '>
                <h1 className='text-[#fdd65b]  font-semibold text-3xl lg:text-5xl'>{serial}</h1>
                <p className='text-[#5c5c5c]'>{description}</p>
            </div>


        </>)
    }
    return (
        <div className='bg-[#171717] flex flex-col gap-10 justify-center items-center  lg:flex-row'>
            <div className='w-full lg:w-[50%] h-full'>

            <img className='w-full h-full' src={imgChild}/>
            </div>
            <div className='flex flex-col gap-10 justify-center items-center lg:w-[50%]'>
                
            <h1 className='text-5xl text-white font-semibold text-center'>Our Commitment</h1>
            <Breaker/>
            <ObjectiveCard serial={'01'}
                description={` Our primary objective is to champion 
                       the rights and well-being of the most 
                        neglected and vulnerable members of 
                        society, ensuring their voices are 
                         heard and their needs are addressed. 
`}

            />
            <ObjectiveCard serial={'02'}
                description={` We strive to encourage and 
                empower women to come together, 
                forming teams and groups that 
                amplify their collective strength and 
                resilience
`}

            />
            <ObjectiveCard serial={'03'}
                description={` Our organization is committed to 
                advancing human rights initiatives 
                specifically tailored to address the 
                unique challenges faced by women, 
                advocating for equality, dignity, and 
                justice for all.
`}



            />
            <ObjectiveCard serial={'04'}
                description={`We are dedicated to empowering 
                women in all aspects of their lives, 
                fostering a culture of confidence, 
                self-reliance, and empowerment that 
                celebrates the strength and resilience 
                of womanhood.
`} />
            </div>

        </div>
    )
}

export default Objective