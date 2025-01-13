import React from 'react'
import dSix from "../assets/dSix.jpg";
import sunSet from "../assets/sunSet.jpg";
import lampung from "../assets/lampung.jpg";
import temple from "../assets/temple.jpg";


const Locate = () => {

    const locations = [
        {
            id:1,
            image: dSix,
            location:"Bromo, East Java",
            title:"Bromo Tengger Tour",
            
        },

        {
            id:2,
            image: sunSet,
            location:"Denpasar, Bali",
            title:"Bali Beach Tourism",
            
        },

        {
            id:3,
            image:lampung,
            location:"Lampung, South Sumatra",
            title:"Sumatra Tourism",
            
        },

        {
            id:4,
            image:temple,
            location:"Jogjakarta, Central Java",
            title:"Borobudur Temple Tour",
            
        }
    ]


  return (
    
    <div className='bg-gray-100 min-h-screen pt-40'>
        <div className='max-w-7xl mx-auto px-4'>

             {/* Head Texts */}
             <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 items-center text-centerr mb-8'>
                
                <div>
                    <p className='text-md sm:text-lg md:text-lg text-gray-400'> Best Location </p>
                    <h1 className='text-3xl sm:text-5xl md:text-6xl  font-bold text-gray-900'> Indonesian Tourism </h1>
                </div>
                
                <div>
                    <p className='text-gray-400 mt-3 sm:mt-7 md:mt-10  text-left sm:text-left md:text-right text-md sm:text-lg md:text-xl'>
                        Extraordinary natural beauty, enjoy the rich culture, 
                        <br />
                        and experience the friendlliness of the local people.
                    </p>
                </div>
            </div>
    
             {/* Locations - Grid Items */}  
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20'>
                    {locations.map((location, index) => (
                        <div
                            key={location.id}
                            className={`relative rounded-3xl overflow-hidden shadow-md bg-white hover:shadow-lg h-72
                                transform hover:scale-105 transition duration-300
                                 ${ index === 0 || index === 3 // Make the 1st and 4th cards large
                                                               ? 'md:col-span-2 md:row-span-1 h-80': 'h-80' }`}  
                        >
                            <img
                                src={location.image} 
                                alt={location.title}
                                className='w-full h-full object-cover' 
                            />
                        
                            <div className='absolute bottom-0  p-4 text-white'>
                                <p className='text:sm'> {location.location} </p>
                                <h3 className='text-lg font-semibold'> {location.title} </h3>
                            </div>

                        </div>
                    ))}
                </div>
            

        </div>

    </div>

  )
}

export default Locate