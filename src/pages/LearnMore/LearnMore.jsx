import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { projectData } from '../../utils/constant/projectData'
import { eventData } from '../../utils/constant/eventsData'
import Breaker from '../../components/Breaker/Breaker'
const LearnMore = () => {
    const { id, type } = useParams();
    const [data, setData] = useState({});
    const [recent, setRecents] = useState([])
    const navigate = useNavigate();
    const navigateOrigin = (id, type) => {
        window.scroll(0,0)
        navigate(`/learnmore/${type}/${id}`)
    }
    const Card = ({ image, description, name, id, key }) => {
        return (
            <div key={key} className='hover:shadow-md rounded-sm w-full group'>
                <div className="relative w-full h-[350px] overflow-hidden">
                    <img className='transition-transform duration-300 transform group-hover:scale-105 absolute top-0 left-0 w-full h-full object-cover' src={image} />
                </div>
                <div className='p-5 flex flex-col gap-5'>

                    <h1 className='text-2xl font-bold '>{name}</h1>
                    <p> {description?.slice(0, 300)}....</p>

                    <button onClick={() => navigateOrigin(id, type)} className='bg-white border p-2 border-[#000] w-[200px] font-semibold uppercase hover:shadow-lg hover:bg-[#469620] hover:text-white' style={{
                        '--tw-shadow': '5px 5px 0px 0px rgba(0, 0, 0, 1)'
                    }}>Read More</button>
                </div>

            </div>
        )
    }


    useEffect(() => {
        if (type === 'projects') {
            const find = projectData.find((item) => item.id === id);
            console.log(find)
            setData(find)
            setRecents(projectData.slice(0, 3))
        }

        if (type === 'events') {
            const find = eventData.find((item) => item.id === id);
            setData(find)
            setRecents(eventData.slice(0, 3))

        }
    }, [id]);


    return (
        <div >
            <div className='flex flex-col lg:flex-row '>
                <div className='lg:w-[50%] lg:px-10 overflow-x-auto' >
                    <img className='w-full h-full' src={data?.image} />

                </div>
                <div className='p-5 lg:w-[50%] '>
                    <h1 className='text-2xl font-bold'>{data?.name}</h1>
                    <p className='mt-4 text-sm text-[#5c5c5c] lg:text-lg'>
                        {data?.description}
                    </p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center mt-10'>
                <h1 className='text-5xl font-bold mt-[30px] mb-[30px]'>{type === 'projects' ? 'Recent Projects' : 'Recent Events'}</h1>
                <Breaker />

            </div>
            <div className='flex flex-col lg:flex-row lg:w-[80%] m-auto  lg:gap-10 mt-10' >
                {
                    recent?.map((item, index) => {
                        return <Card key={item.id} {...item} />
                    })
                }

            </div>



        </div>
    )
}

export default LearnMore