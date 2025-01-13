import React from 'react';
import profileP from "../assets/profileP.jpg";

const Testimonial = () => {
  return (
    <div className=' bg-gray-100 pt-20 md:pt-40'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 bg-gray-50 rounded-2xl py-10'>
            {/* Profile Section */}
            <div className=' flex flex-col items-center md:items-start'>
               <div className='flex items-center space-x-4 '>
                    <div>
                        <img 
                            src={profileP} 
                            alt="Donald Sullivan" 
                            className='w-16 h-16 rounded-full border border-gray-300 object-cover'
                        />
                    </div>
                    {/* Name and Title Texts */}
                    <div className=' text-center md:text-left'>
                        <h3 className='text-lg font-semibold text-gray-800'> Donald Sullivan</h3>
                        <p className='text-sm text-gray-500 mt-2'> Founder, Fiko </p>
                    </div> 
               </div>
                {/* Navigation Arrows  */}
                <div className='flex space-x-4 mt-6 md:mt-10 justify-center md:justify-start '>
                        <button className='w-8 h-8 items-center justify-center rounded-full hover:bg-gray-200'
                            aria-label='Previous'
                        >
                            ←
                        </button>
                        <button className='w-8 h-8 items-center justify-center rounded-full hover:bg-gray-200'
                            aria-label='Next'
                        >
                            →
                        </button>
                </div>
            </div>
            {/* Testimonial Texts */}
            <div className='md:col-span-2 flex flex-col items-center md:items-start'>
                <blockquote className=' text-black'>
                    <p className='text-base md:text-xl leading-relaxed text-left md:text-left'>
                        This travel website is very informative and easy to use. I like how they present <br /> various destination options and 
                        travel packages with clear details. Offering <br />pictures and destination descriptions helps me decide
                        where I want to visit. <br />Additionally, the ability to compare prices and reviews from other users is very <br />
                         helpful in decision making.
                    </p>
                </blockquote>
            </div>
        </div>
    </div>
  );
};

export default Testimonial;