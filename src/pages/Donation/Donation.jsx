import React from 'react'
import child from '../../assets/images/img-child.jpg'
import Faqs from './Faq'
import Breaker from '../../components/Breaker/Breaker'
function Donation() {
    return (
        <div>
            <div className='h-[100vh] relative flex flex-col-reverse'>
                <div className='absolute top-0 w-full h-[80%]'>
                    <img src={child} alt="Child" className='w-full h-full' />
                    <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

                </div>

                <div className='hidden z-10 flex-col justify-center gap-10 lg:flex lg:flex-row'>
                    <div className='h-[300px] w-[300px] bg-[#f7f7f7] p-5 flex justify-center items-center text-center'>
                        <h1 className='font-bold '>Charity does not decrease wealth .</h1>

                    </div>
                    <div className='h-[300px] w-[300px] bg-[#f7f7f7] p-5 flex justify-center items-center text-center'>
                        <h1 className='font-bold '>Give charity without delay, for it stands in the way of calamity.</h1>
                    </div>
                    <div className='h-[300px] w-[300px] bg-[#f7f7f7] p-5 flex justify-center items-center text-center'>
                        <h1 className='font-bold'>
                            Giving is the noble act that reflects the essence of humanity.
                        </h1>

                    </div>
                </div>

                <div className='absolute z-10 top-0 flex flex-col justify-center items-center w-full h-[80%] gap-5'>
                    <h1 className='text-white text-4xl font-bold uppercase text-center pt-20 lg:text-6xl z-10'>Donations</h1>
                    <Breaker />
                    <p className='text-white text-md lg:text-xl text-center '>Give Charity Help others Give a Smile  to someone who needs it.</p>


                </div>
            </div>
            <div className='flex  z-10 flex-col justify-center items-center gap-10 lg:hidden'>
                <div className='h-[300px] w-[90%] bg-[#f7f7f7] p-5 flex justify-center items-center text-center'>
                    <h1 className='font-bold '>Charity does not decrease wealth .</h1>

                </div>
                <div className='h-[300px] w-[90%] bg-[#f7f7f7] p-5 flex justify-center items-center text-center'>
                    <h1 className='font-bold '>Give charity without delay, for it stands in the way of calamity.</h1>
                </div>
                <div className='h-[300px] w-[90%] bg-[#f7f7f7] p-5 flex justify-center items-center text-center'>
                    <h1 className='font-bold'>
                        Giving is the noble act that reflects the essence of humanity.
                    </h1>

                </div>
            </div>

            <div className='flex flex-col justify-center items-center mt-20'>
                <h1 className='font-bold text-2xl lg:text-5xl py-5'>Donation Info</h1>
                <Breaker/>
                <div className='p-10 text-center w-[80%] text-lg bg-[#f7f7f7] my-5'>
                    <span className='font-semibold'>Account No. - </span>
                    <span>55000200001576</span>
                </div>
                <div className='p-10 text-center w-[80%] text-lg bg-[#f7f7f7] my-5'>
                    <span className='font-semibold'>IFSC Code - </span>
                    <span>BARBOASHOKA</span>
                </div>
                <div className='p-10 text-center w-[80%] text-lg bg-[#f7f7f7] my-5' >
                    <span className='font-semibold'>Account Holder Name - </span>
                    <span>Meezan Education Welfare Society</span>
                </div>
                <div className='p-10 text-center w-[80%] text-lg bg-[#f7f7f7] my-5'>
                    <span className='font-semibold'>Bank Name- </span>
                    <span>Bank Of Baroda</span>
                </div>
                <div className='p-10 text-center w-[80%] text-lg bg-[#f7f7f7] my-5'>
                    <span className='font-semibold'>Contact- </span>
                    <span>9179204006</span>
                </div>

            </div>
            <div className='w-[90%] lg:w-[80%] m-auto mt-10 flex flex-col justify-center items-center gap-10'>
            <h1 className='text-5xl font-bold mt-[30px] mb-[30px]'>Frequently Asked Questions</h1>
                <Breaker/>
                <Faqs />
            </div>
            <div className='p-10'>
                <p className='text-md font-bold'>Note- Your donation can be contributed through various methods including cheque, cash, demand draft, or UPI transaction. For any inquiries or further assistance, please don't hesitate to contact us. We're here to help and facilitate your contribution. Thank you for your support!</p>
            </div>
        </div>
    )
}

export default Donation