import React from 'react'
import bg1 from '../../assets/images/bg1.jpg'
import logo from '../../assets/images/logo.png'
import Button1 from '../Buttons/Button1'
import rd1 from '../../assets/images/rd-2.jpg'
import waterDay from '../../assets/images/bg2.jpg'
import holi from '../../assets/images/holi.jpg'
import intro from '../../assets/images/intro.jpg'
import medical from '../../assets/images/medical.jpg'
const Footer = () => {
    const images = [bg1, rd1, waterDay, holi, intro, medical]
    return (
        <div className='w-full bg-[#171717] p-5 py-10 mt-10 relative bottom-0'>
            <div className='w-full flex flex-col justify-center items-center lg:flex-row lg:justify-around gap-4'>
                <div className='text-center'>
                    <img className='m-auto my-10' src={logo} />

                    <h1 className='text-2xl font-extrabold text-white uppercase lg:text-2xl my-10'>Mezaan Education Welfare Society</h1>
                    <p className='text-white my-10'>We Truly believe in unity </p>
                    <div className='w-[200px] m-auto mt-[10px] my-10'>
                        <Button1 text={'Donate Now'} />
                    </div>
                </div>
                <div className='text-center'>

                    <h1 className='text-lg font-bold text-white my-10'>Contact Us</h1>
                    <p className='text-[#5c5c5c] my-10'>Ashoka Garden Bhopal</p>
                    <p className='text-[#5c5c5c] my-10'>meezanngo03@gmail.com</p>
                    <p className='text-[#5c5c5c] my-10'>+91 70679 90428</p>
                </div>
                <div className='text-center'>

                    <h1 className='text-lg font-bold text-white my-10'>Gallery</h1>
                    <div className="grid grid-cols-3 gap-4">
                        {images?.map((data, index) => (
                            <div key={index} className="relative overflow-hidden w-[100px] h-[100px]">
                                <img
                                    src={data}
                                    alt={`Image ${index}`}
                                    className="w-full h-full grayscale hover:scale-110 hover:filter-none transition-transform duration-300 absolute top-0 left-0 object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Footer