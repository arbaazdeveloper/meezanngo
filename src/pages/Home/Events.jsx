import React from 'react'
import Breaker from '../../components/Breaker/Breaker'
import medical from '../../assets/images/medical.jpg'
import waterday from '../../assets/images/waterday.jpg'
import holi from '../../assets/images/holi.jpg'
const Events = () => {
    const data = [
        {
            id: '1',
            name: 'Medical Camp ',
            image: medical,
            description: `Our organization recently spearheaded a community-wide medical camp, a collaborative effort
            aimed at addressing the healthcare needs of underserved populations. With a commitment to
            improving public health,`
        },
        {
            id: '2',
            name: 'World Waterday Celebration',
            image: waterday,
            description: `Our organization took the initiative to 
            organize a special camp in celebration of 
            World Water Day, an occasion dedicated to 
            highlighting the critical importance of water 
            conservation and management`
        },
        {
            id: '3',
            name: 'Cultural Programme Holi',
            image: holi,
            description: `Our organization took the initiative to 
            organize a special camp in celebration of 
            World Water Day, an occasion dedicated to 
            highlighting the critical importance of water 
            conservation and management`
        }
    ]
    const EventCard = ({image, description, name, id}) => {
        return (
            <div className='shadow-md rounded-sm w-full group'>
                <div className="relative w-full h-[350px] overflow-hidden">
                    <img className='transition-transform duration-300 transform group-hover:scale-105 absolute top-0 left-0 w-full h-full object-cover' src={image} />
                </div>
                <div className='p-5 flex flex-col gap-5'>

                    <h1 className='text-2xl font-bold '>{name}</h1>
                    <p> {description}....</p>

                    <button className='bg-white border p-2 border-[#000] w-[200px] font-semibold uppercase hover:shadow-lg hover:bg-[#469620] hover:text-white' style={{
                        '--tw-shadow': '5px 5px 0px 0px rgba(0, 0, 0, 1)'
                    }}>Read More</button>
                </div>

            </div>
        )
    }
    return (
        <div>
            <div className='w-[80%] m-auto flex flex-col justify-center items-center'>
                <h1 className='text-5xl font-bold mt-[30px] mb-[30px]'>Events</h1>
                <Breaker />
            </div>
            <div className='w-[80%] m-auto flex justify-center gap-5 mt-[30px] flex-wrap'>
                {
                    data.map((item) => {
                        return <div key={item.id} className='w-full lg:w-[400px]'>
                            <EventCard {...item} />

                        </div>
                    })
                }
                
            </div>
        </div>
    )
}

export default Events