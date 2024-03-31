import React from 'react'
import { eventData } from '../../utils/constant/eventsData'
import event from '../../assets/images/event.jpg'
import Breaker from '../../components/Breaker/Breaker'

const Events = () => {
    const EventCard = ({ image, description, name, id }) => {
        return (
            <div className='hover:shadow-md rounded-sm w-full group'>
                <div className="relative w-full h-[350px] overflow-hidden">
                    <img className='transition-transform duration-300 transform group-hover:scale-105 absolute top-0 left-0 w-full h-full object-cover' src={image} />
                </div>
                <div className='p-5 flex flex-col gap-5'>

                    <h1 className='text-2xl font-bold '>{name}</h1>
                    <p> {description?.slice(0, 300)}....</p>

                    <button className='bg-white border p-2 border-[#000] w-[200px] font-semibold uppercase hover:shadow-lg hover:bg-[#469620] hover:text-white' style={{
                        '--tw-shadow': '5px 5px 0px 0px rgba(0, 0, 0, 1)'
                    }}>Read More</button>
                </div>

            </div>
        )
    }
    return (
        <div className='w-full'>
            <div className='w-full h-[70vh] bg-cover bg-center flex flex-col justify-center items-center gap-5 relative ' style={{ backgroundImage: `url(${event})` }}>
                <h1 className="text-white text-4xl font-bold uppercase text-center pt-20 lg:text-6xl z-10">Our Events</h1>
                <div className='z-10'>
                    <Breaker />
                </div>

                <p className='text-white z-10'>Take a look our Event and explore our work</p>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
            <div className='flex w-[80%] m-auto flex-wrap gap-5 mt-10'>

                {
                    eventData.map((item) => {
                        return <div className='w-full lg:w-[400px]'>
                            <EventCard {...item} />
                        </div>
                    })
                }
            </div>


        </div>
    )
}

export default Events