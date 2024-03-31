import React from 'react'
import bg1 from '../../assets/images/bg1.jpg'
import logo from '../../assets/images/logo.png'
import Button1 from '../Buttons/Button1'
const Footer = () => {
    return (
        <div className='w-full bg-[#171717] p-5 py-10 mt-10 relative bottom-0'>
            <div className='w-full flex flex-col justify-center items-center lg:flex-row lg:justify-around gap-4'>
                <div className='text-center'>
                <img className='m-auto' src={logo} />

                    <h1 className='text-2xl font-extrabold text-white uppercase lg:text-2xl'>Mezaan Education Welfare Society</h1>
                    <p className='text-white '>We Truly believe in unity </p>
                    <div className='w-[200px] m-auto mt-[10px]'>
                        <Button1 text={'Donate Now'}/>
                    </div>
                </div>
                <div className='text-center'>

                    <h1 className='text-lg font-bold text-white'>Contact Us</h1>
                    <p className='text-[#5c5c5c]'>Ashoka Garden Bhopal</p>
                    <p className='text-[#5c5c5c]'>meezanngo03@gmail.com</p>
                    <p className='text-[#5c5c5c]'>+91 70679 90428</p>
                </div>
                <div className='text-center'>

                <h1 className='text-lg font-bold text-white'>Gallery</h1>
                <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((index) => (
                        <div key={index} className="relative overflow-hidden w-[100px] h-[100px]">
                            <img
                                src={bg1}
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