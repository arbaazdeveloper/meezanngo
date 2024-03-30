import React, { useState, useEffect } from 'react';
import bg1 from '../../assets/images/bg1.jpg';
import bg2 from '../../assets/images/bg2.jpg';
import bg3 from '../../assets/images/bg3.jpg';
import Button1 from '../Buttons/Button1';
const Banner = () => {
    const [bgIndex, setBgIndex] = useState(0);
    const images = [bg1, bg2, bg3]; // Paths to your images

    useEffect(() => {
        const interval = setInterval(() => {
            setBgIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []); // Run only once on component mount

    return (
        <div className="relative overflow-hidden h-[80vh] md:h-96 lg:h-screen">
            {/* Background image with transition */}
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-2000 w-full ${bgIndex === index ? 'opacity-100 animate-zoom' : 'opacity-0'
                        }`}
                    style={{ backgroundImage: `url(${image})` }}
                ></div>
            ))}
            {/* Banner content */}
            <div className="absolute inset-0 flex items-center ">
                <div className='flex flex-col px-20 '>
                    <h1 className="text-white text-5xl md:text-5xl lg:text-7xl font-bold">Help Other For Better Unity</h1>
                    <div className='hidden lg:flex lg:w-[200px] mt-10'>
                        <Button1 text={'Learn More'} />
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 w-full lg:hidden'>
                <Button1 text={'Learn More'} />
            </div>


        </div>
    );
};

export default Banner;
