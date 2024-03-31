import React from 'react'
import bg1 from '../../assets/images/intro.jpg'
import Breaker from '../../components/Breaker/Breaker'
import Button1 from '../../components/Buttons/Button1'
import { useNavigate } from 'react-router-dom'

const Introduction = () => {
    const navigate=useNavigate()
    return (
        <div className='flex flex-col lg:flex-row gap-10 w-[90%] lg:w-[80%] m-auto mt-20 lg:h-[80vh] lg:items-center'>
            <div className='w-full lg:w-[50%]'>
                <img src={bg1} />
            </div>
            <div className='w-fll lg:w-[50%]'>
                <h1 className='text-5xl font-bold mt-[30px] mb-[30px]'>Who are we & What We Do</h1>
                <Breaker/>
                <p className='mt-[30px]'>
                    <strong className='text-[#469620]'>Meezan Education Welfare Society</strong>, based in Bhopal, Madhya Pradesh, is a non-profit
                    organization duly registered under the Society Registration Act of 1973. Our primary
                    mission is to serve the marginalized segments of society, including impoverished and
                    orphaned girls, as well as unemployed and illiterate youth.


                    At Meezan Education Welfare Society, we are committed to providing essential services
                    to those in need. We offer nutritious meals and medical facilities to ensure the well-being
                    of our beneficiaries. Additionally, we provide vocational training in fields such as mehndi
                    art and sewing, equipping over 50 women with valuable skills for economic
                    empowerment.
                </p>
                <div className='mt-[30px]'>

                <Button1 text={'Learn More'} onClick={()=>{
                   
                   navigate('/about')
               }} />
                </div>
            </div>

        </div>
    )
}

export default Introduction