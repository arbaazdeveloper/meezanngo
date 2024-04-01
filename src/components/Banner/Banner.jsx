import React, { useState, useEffect } from 'react';
import bg1 from '../../assets/images/bg1.jpg';
import bg2 from '../../assets/images/bg2.jpg';
import bg3 from '../../assets/images/bg3.jpg';
import set from '../../assets/images/set.jpg'
import Button1 from '../Buttons/Button1';
import { useNavigate } from 'react-router-dom';
const Banner = () => {
    const [bgIndex, setBgIndex] = useState(0);
    const images = [set, bg2, bg3];

    useEffect(() => {
        const interval = setInterval(() => {
            setBgIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);
    const navigate = useNavigate()
    return (
        <div className="relative overflow-hidden h-[80vh] md:h-96 lg:h-screen">
            {/* Background image with transition */}
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 bg-cover bg-center   transition-opacity duration-2000 w-full ${bgIndex === index ? 'opacity-100 animate-zoom' : 'opacity-0'
                        }`}
                    style={{ backgroundImage: `url(${image})` }}

                >
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                </div>
            ))}
            {/* Banner content */}
            <div className="absolute inset-0 flex border">
                <div className='flex flex-col justify-center px-5'>
                    <p className='text-white uppercase text-sm lg:mt-5 lg:text-md'>Non Profit Origization</p>
                    <h1 className="text-white text-2xl md:text-5xl lg:text-7xl font-bold">Mezaan Education Welfare Society</h1>
                    <p className='text-white uppercase font-semibold lg:mt-5 lg:text-xl'>Help Others for better unity</p>
                    <div className='hidden lg:flex lg:w-[200px] mt-10'>
                    <Button1 text={'Learn More'} onClick={()=>{
                   
                    navigate('/about')
                }} />
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 w-full lg:hidden'>
                <Button1 text={'Learn More'} onClick={()=>{
                   
                    navigate('/about')
                }} />
            </div>


        </div>
    );
};

export default Banner;
