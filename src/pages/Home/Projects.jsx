import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import imgChild from "../../assets/images/img-child.jpg"
import Button1 from '../../components/Buttons/Button1';

const Projects = () => {
    const data=[
        {
        image:imgChild,
        name:'Education and Career Awareness Among Young Students',
        description:`Our focus lies in fostering career awareness among young students, 
        guiding them towards informed decisions about their future paths. 
        Through targeted initiatives, we strive to equip students with the 
        knowledge and resources necessary to explore various career 
        options and make informed choices.`
    },
    {
        image:imgChild,
        name:'Education and Career Awareness Among Young Students',
        description:`Our focus lies in fostering career awareness among young students, 
        guiding them towards informed decisions about their future paths. 
        Through targeted initiatives, we strive to equip students with the 
        knowledge and resources necessary to explore various career 
        options and make informed choices.`
    },
    {
        image:imgChild,
        name:'Education and Career Awareness Among Young Students',
        description:`Our focus lies in fostering career awareness among young students, 
        guiding them towards informed decisions about their future paths. 
        Through targeted initiatives, we strive to equip students with the 
        knowledge and resources necessary to explore various career 
        options and make informed choices.`
    },
    {
        image:imgChild,
        name:'',
        description:''
    }
]
    const setting = {
        swipeable: true,
        emulateTouch: true,
        autoPlay: true,
    }
    return (
        <div className='bg-[#469620]'>
            <div className='w-[80%] m-auto'>

                <Carousel  {...setting}>
                    {
                        data.map((item,index)=>{
                            return <>
                            <div className='bg-white flex flex-col gap-5 lg:flex-row-reverse  '>
                        <div className='w-full lg:w-[50%]'>

                            <img src={item.image} />
                        </div>
                        <div className='p-10'>
                            <h1 className='text-2xl font-bold'>{item.name}</h1>
                            <p>{item.description}...</p>
                            <div className='w-[150px] m-auto mt-10'>

                                <Button1 text={'Read More'}></Button1>
                            </div>
                        </div>
                    </div>
                            </>
                        })
                    }
                 
                  

                </Carousel>
            </div>
        </div>
    )
}

export default Projects