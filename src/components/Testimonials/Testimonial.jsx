import React, { useState } from 'react';
import profileP from '../../assets/profileP.jpg';
import maryRose from '../../assets/profileMary1.jpg';
import profilePeter from '../../assets/profilePeter.jpg';
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
  {
    name: 'Donald Sullivan',
    title: 'Founder, Fiko',
    profileImg: profileP,
    text: `This travel website is very informative and easy to use. I like how they present 
           various destination options and travel packages with clear details. Offering 
           pictures and destination descriptions helps me decide where I want to visit. 
           Additionally, the ability to compare prices and reviews from other users is very 
           helpful in decision making.`,
  },
  {
    name: 'Mary Rose',
    title: 'CTO, TechPro',
    profileImg: maryRose,
    text: `I am impressed with the seamless experience provided by this platform. 
            The booking process is intuitive, user-friendly, and exceptionally smooth, ensuring hassle-free planning.
             The customer service is always responsive and helpful. 
            I always recommend this platform to my friends, colleagues, and family for its reliability, 
            efficiency, and top-notch experience.`,
  },
  {
    name: 'John Smith',
    title: 'Travel Blogger',
    profileImg: profilePeter,
    text: `As a passionate travel enthusiast, I find this platform to be an absolutely 
    essential tool for planning my adventures. The incredible variety of destinations 
    and the unmatched affordability of packages make it stand out. It’s my ultimate go-to 
    resource for organizing trips, discovering new places, and creating unforgettable
     memories every time I travel.`,
  }

];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const { name, title, profileImg, text } = testimonials[currentIndex];

  return (
    <div className='bg-gray-100 pt-20 md:pt-40'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-10 md:px-4 lg:px-4 bg-gray-50 rounded-2xl py-10'>
        
        {/* Profile Section */}
        <div className='flex flex-col items-center md:items-start'>
          <div className='flex items-center space-x-4'>
            <div>
              <img
                src={profileImg}
                alt={name}
                className='w-16 h-16 rounded-full border border-gray-300 object-cover'
              />
            </div>

            {/* Name and Title Texts */}
            <div className='text-center md:text-left'>
              <h3 className='text-lg font-semibold text-gray-800'>{name}</h3>
              <p className='text-sm text-gray-500 mt-2'>{title}</p>
            </div>
          </div>
         
          {/* Navigation Arrows */}
          <div className='flex space-x-4 mt-6 md:mt-10 justify-center md:justify-start'>
            <button
              className='w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200'
              aria-label='Previous'
              onClick={handlePrev}
            >
              <i className='fas fa-arrow-left text-xs font-thin'> </i>
            </button>

            <button
              className='w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200'
              aria-label='Next'
              onClick={handleNext}
            >
                <i className='fas fa-arrow-right text-xs font-thin'> </i>
            </button>
          </div>
        </div>
       
        {/* Testimonial Texts */}
        <div className='md:col-span-2 flex flex-col items-center md:items-start'>
          <blockquote className='text-black'>
            <p className='text-base md:text-xl leading-relaxed text-left md:text-left'>
              {text}
            </p>
          </blockquote>
        </div>

      </div>
    </div>
  );
};

export default Testimonial;
