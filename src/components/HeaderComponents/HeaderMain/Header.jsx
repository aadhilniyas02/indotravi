import React from 'react'
import Navbar from '../Navbar';
import SearchBar from '../SearchBar';
import CardNew from '../CardNew';
import lake from '../../../assets/lake.jpg';

const Header = () => {
  return (
    <div className='bg-gray-100 lg:p-2 pb-40 p-1 md:p-1 bottom-2'>
          {/* Background Image */}
          <div className='min-h-screen bg-cover bg-center flex flex-col justify-between items-start overflow-hidden rounded-3xl'
              style={{backgroundImage: `url(${lake})` ,
              backgroundSize: "cover",
              backgroundRepeat:"no-repeat",
              height:"md:120vh",
            }}
              id='Header'> 
                <Navbar /> 
                
                <div className='container text-center mx-auto pt-12 sm:pt-16 md:pt-20 px-6 md:px-20 lg:px-42 max-w-7xl text-white'>
                    {/* Main text in background image*/}
                    <h2 className='inline-block  font-semibold pt-20'>
                      <span className='block text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[85px] leading-none'> Extraordinary natural and  </span>
                      <span className='block text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[85px] leading-tight'>  cultural charm</span>
                    </h2>
          
                    <p className='text-sm sm:text-sm md:text-base lg:text-lg xl:text-2xl text-white mt-4'> Exploring Indonesia is an unforgettable adventure. </p>   
                
                    {/* Search Bar component */}
                    <div className='md:mt-12 mt-20 justify-center flex flex-col items-center z-20 relative'>
                      <SearchBar /> 
                    </div>

                </div>
              <div>
                  
            </div>
          </div>
                  {/* Ratings Card component*/}
                <div className='absolute inset-0 bottom-[-75px] flex justify-center items-end mt-20 z-10'>
                  <CardNew />
                </div>
        </div> 
  )
}

export default Header