import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import imgChild from "../../assets/images/img-child.jpg"
import Button1 from '../../components/Buttons/Button1';
import Breaker from '../../components/Breaker/Breaker';
import bg3 from '../../assets/images/bg3.jpg'
import md from '../../assets/images/img-md.jpg'
import { useNavigate } from 'react-router-dom';
const Projects = () => {
    const navigate = useNavigate()
    const data = [
        {
            id: '1',
            image: imgChild,
            name: 'Education and Career Awareness Among Young Students',
            description: `Our focus lies in fostering career awareness among young students, 
        guiding them towards informed decisions about their future paths. 
        Through targeted initiatives, we strive to equip students with the 
        knowledge and resources necessary to explore various career 
        options and make informed choices.`
        },
        {
            id: '2',
            image: bg3,
            name: `Cloth Stitching And Tailoring 
            Initiative Programme`,
            description: `Our focus lies in fostering career awareness among young students, 
        guiding them towards informed decisions about their future paths. 
        Through targeted initiatives, we strive to equip students with the 
        knowledge and resources necessary to explore various career 
        options and make informed choices.`
        },
        {
            id: '3',
            image: md,
            name: 'Mehendi Classes for Skill Development',
            description: `Our organization hosts Mehendi classes aimed at 
            teaching women various styles of henna 
            application, including traditional Indian and 
            Arabian styles. These classes provide women 
            with an opportunity to enhance their creativity 
            and skill in Mehendi artistry. `
        },

    ]
    const setting = {
        swipeable: true,
        emulateTouch: true,
        autoPlay: true,
        renderIndicator: (onClickHandler, isSelected, index, label) => {
            const defStyle = {
                marginLeft: 20,
                backround: 'white',
                fontWeight: 'bold',
                fontSize: '50px',
                height: '5px',
                width: '10px',
                color: "white",
                cursor: "pointer",
                marginTop: '50px'
            };
            const style = isSelected
                ? { ...defStyle, color: "red" }
                : { ...defStyle };
            return (
                <span
                    style={style}
                    onClick={onClickHandler}
                    onKeyDown={onClickHandler}
                    value={index}
                    key={index}
                    role="button"
                    tabIndex={0}
                    aria-label={`${label} ${index + 1}`}
                >
                    _
                </span>
            );
        }
    }
    return (
        <div className='bg-[#469620]'>
            <div className='w-[70%] m-auto flex justify-center flex-col items-center gap-10 py-10'>

                <h1 className='text-white text-5xl font-semibold text-center'>Ongoing Projects</h1>
                <Breaker />
            </div>
            <div className='w-[90%] lg:w-[80%] m-auto'>

                <Carousel  {...setting}>
                    {
                        data.map((item, index) => {
                            return <>
                                <div className='bg-[#469620] flex flex-col lg:flex-row-reverse h-[120vh] lg:h-[80vh] '>
                                    <div className='w-full lg:w-[50%]'>

                                        <img className='w-full h-full' src={item.image} />
                                    </div>
                                    <div className='p-10  bg-white lg:w-[50%] lg:flex lg:flex-col lg:items-center lg:justify-center lg:h-full'>
                                        <div>

                                        <h1 className='text-2xl font-bold'>{item.name}</h1>
                                        <p>{item.description.slice(0, 250)}...</p>
                                        <div className='w-[150px] m-auto mt-10'>

                                            <Button1 onClick={() => navigate('/projects')} text={'Read More'}></Button1>
                                        </div>
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