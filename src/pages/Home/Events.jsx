import React from 'react'
import Breaker from '../../components/Breaker/Breaker'
import medical from '../../assets/images/medical.jpg'
const Events = () => {
    const EventCard = () => {
        return (
            <div className='shadow-md rounded-sm w-full'>
                <img className='group-hover:scale-50' src={medical} />
                <div className='p-5 flex flex-col gap-5'>

                    <h1 className='text-2xl font-bold '>Medical Camp for  the needy</h1>
                    <p>Our organization recently spearheaded a community-wide medical camp, a collaborative effort
                        aimed at addressing the healthcare needs of underserved populations. With a commitment to
                        improving public health, ....</p>

                    <button className='bg-white border p-2 border-[#000] w-[200px] font-semibold uppercase hover:shadow-lg hover:bg-[#469620] hover:text-white' style={{
                        '--tw-shadow': '5px 5px 0px 0px rgba(0, 0, 0, 1)'
                    }}>Read More</button>
                </div>

            </div>
        )
    }
    return (
        <div>
            <div className='w-[80%] m-auto flex flex-col justify-center items-center group'>
                <h1 className='text-5xl font-bold mt-[30px] mb-[30px]'>Events</h1>
                <Breaker />
            </div>
            <div className='w-[80%] m-auto flex justify-center gap-5 mt-[30px]'>
                <div className='w-full lg:w-[400px]'>
                    <EventCard />
                   
                </div>
                <div className='w-full lg:w-[400px]'>
                    <EventCard />
                   
                </div>
                <div className='w-full lg:w-[400px]'>
                    <EventCard />
                   
                </div>
            </div>
        </div>
    )
}

export default Events