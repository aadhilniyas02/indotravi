import React, {  useRef } from 'react'
import fallBook from "../../assets/fallBook.jpg";
import '@fortawesome/fontawesome-free/css/all.min.css';
import SearchBar from '../HeaderComponents/SearchBar';

const Book = () => {
    const leftSectionRef = useRef(null);
    const rightSectionRef = useRef(null);

    const steps = [
        {
            id:1,
            icon:"fa fa-search",
            title:"Find your destination",
            description:"Embark on a journey to discover your dream destination, where adventure and relaxation await"
        },
        {
            id:2,
            icon:"fa fa-ticket",
            title:"Book a ticker",
            description:"Ensure a smooth travel experience by booking tickets to your preferred destination via our booking platform"
        },
        {
            id:3,
            icon:"fa fa-credit-card",
            title:"Make payment",
            description:"We offer a veriety of payment options to meet your preferences and ensure a hassle-free transaction process"
        },
        {
            id:4,
            icon: "fa fa-plane",
            title:"Explore destination",
            description:"You'll be immersed in a captivating tapestry of sights, sound and tastes, as you wind your way through the ancient streets"
        },
    ]

  




  return (

    <div className='bg-gray-100 md:pt-20 lg:mt-20 sm:mt-20 mt-0'>
        <div className='max-w-7xl mx-auto px-4 '>
            <div className='flex flex-col md:flex-row h-auto'>
            
                {/* Left Side Section */}
                <div 
                    ref={leftSectionRef}
                    className='flex-1 flex items-center justify-center mt-32 md:mt-0 lg:mt-0 mb-10 md:mb-0 lg:mb-0'
                >
                    
                     {/*Left Side Section - Image*/}
                    <div className='relative w-full h-96 md:h-full'>
                        <img 
                            src={fallBook}
                            alt="Destination" 
                            className='absolute inset-0 w-full h-full rounded-3xl object-cover'
                        /> 
                                           
                        {/* Left Side Section - Image Bottom Text */}
                        <div className='absolute bottom-4 px-4 md:px-6'>
                            {/* <SearchBar />  */}

                            <p className='text-xs md:sm-sm md:text-base text-gray-100 text-left md:mb-7 sm:mb-4 mb-2 '>
                                Emabark on a journey to find your dream destination, where adventure <br /> and relaxation await, 
                                creating unforgettable memories along the way
                            </p> 
                        </div> 

                    </div>
                </div>

                {/* Right Side Section - Steps */}
                <div 
                    ref={rightSectionRef}
                    className='flex-1 px-4 md:-px-16 md:'
                >

                    {/* Right Side Section - Heading */}
                    <div className=' py-0 sm:py-1 md:py-2 lg:py-4 px-5 sm:px-8 md:px-12 lg:px-12 mb-6'>
                        <p className='text-sm md:text-md text-gray-400 mb-2 text-left md:text-left'> How it works</p>
                        <h2 className='text-2xl md:text-3xl  font-bold text-black mb-8 md:text-left'> One click for you </h2>
                    </div>

                    {/* Right Side Section - Card */}
                    <div className='md:pt-2 md:pl-10 space-y-6'>
                        <div className='space-y-6 w-full '>
                            {steps.map((step) => (
                                <div
                                key={step.id}
                                className="flex items-start bg-gray-100  rounded-xl shadow-none p-4 md:p-6 space-y-4 sm:space-y-0 sm:space-x-4 hover:shadow-xl hover:bg-white  transition-transform duration-300"
                              >
                                {/* Icon */}
                                <div className="w-16 h-16 bg-white flex items-center justify-center rounded-lg text-2xl hover:bg-gray-200 transition-transform duration-300">
                                  <i className={step.icon}></i>
                                </div>

                                {/* Texts*/}
                                <div>
                                  <h3 className="text-lg font-semibold text-gray-900 pl-6 md:pl-0 lg:pl-0">
                                    {step.title}
                                  </h3>
                                  <p className="text-sm text-gray-600 mt-2 pl-6 md:pl-0 lg:pl-0`">{step.description}</p>
                                </div>
                              </div>
                            ))}
                        </div>

                    </div>
                </div>


    
         
            </div>
        </div>
    </div>

  )
}

export default Book