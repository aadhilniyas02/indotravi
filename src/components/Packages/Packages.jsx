import React from 'react';
import baliP from "../../assets/baliP.jpg";
import javaP from "../../assets/javaP.jpg";
import soloP from "../../assets/soloP.jpg";
import {faStar} from '@fortawesome/free-solid-svg-icons';

const Packages = () => {

    const packs = [
        {
            id:1,
            image:baliP,
            date:"23 AUGUST - 29 AUGUST",
            title: "Bali Tour Package",
            price: "285",
            days: "7 Days",
            rating: "4.9"
        },
        {
            id:2,
            image:javaP,
            date:"23 AUGUST - 27 AUGUST",
            title: "Java Tour Package",
            price: "218",
            days: "5 Days",
            rating: "4.9"
        },
        {
            id:3,
            image: soloP,
            date:"23 AUGUST - 25 AUGUST",
            title: "Solo Tour Package",
            price: "163",
            days: "3 Days",
            rating: "4.9"
        },
    ];

    return (
        <div className='bg-gray-100 min-h-screen pt-40'>
            <div className='max-w-7xl mx-auto px-4'>
                {/* Head Texts */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center text-centerr mb-8'>
                    <div>
                        <p className=' text-md md:text-lg text-gray-400 pl-8 md:pl-0 lg:pl-0'> Tour Packages </p>
                        <h1 className='text-3xl md:text-5xl font-bold text-gray-900 pl-8 md:pl-0 lg:pl-0'> Our tourist destination </h1>
                    </div>
                    <div>
                        <p className='text-gray-400 mt-2 md:mt-10 pl-8 md:pl-0 lg:pl-24 md:text-left text-sm md:text-xl'>
                            Our tourist destinations offer an unrivaled blend of 
                            <br />natural beauty and cultural richness
                        </p>
                    </div>
                </div>

                {/* Card Section */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-4 px-7 md:px-0 lg:px-0'>
                    {packs.map((pack) => (
                        <div 
                            key={pack.id} 
                            className='relative h-[400px] sm:h-[450px] md:h[500px] w-[300px] sm:w-[350px] md:w[400px] rounded-3xl mt-8 transition-shadow duration-700 cursor-pointer hover:shadow-lg hover:shadow-gray-800'
                        >
                            <img
                                src={pack.image} 
                                alt={pack.title}
                                className='absolute inset-0  h-full w-full object-cover rounded-lg '
                            />
                                 {/* Days */}
                            <div className='absolute top-3 left-3 bg-gray-100/30 backdrop-blur-md bg:drop text-white text-xs px-3 py-1 rounded-full'>
                                {pack.days}
                            </div>

                                 {/* Rating */}
                            <div className='absolute top-3 right-3 bg-gray-100/30 backdrop-blur-md bg:drop text-white text-xs px-3 py-1  rounded-full flex items-center'> 
                                <span className='fa fa-star checked  mr-1' style={{ color: "gold" }}> </span> {pack.rating}
                            </div>

                                 {/* Card footer */}
                            <div className='absolute bg-gray-100/30 backdrop-blur-md bottom-0 inset-x-0 rounded-xl  flex flex-col justify-end  text-white p-4 mx-4 mb-4'>
                                <p className='text-xs text-gray-300 mb-2'> {pack.date}</p>
                                <h3 className=' text-lg md:text-xl font-semibold text-white flex justify-between'>
                                    <span> {pack.title}  </span>  
                                    <span> ${pack.price} </span>
                                </h3>
                            </div>
                            
                        </div>
                    ))}
                </div>

                 {/* View More Button */}
                <div className='mt-14 text-center'>
                        <button  
                        className='px-4 md:px-6 py-2 md:py-3 bg-black text-white text-sm md:text-base font-medium rounded-full  shadow-2xl before:absolute before:right-0 before:top-0 before:h-12 before:w-6  hover:shadow-gray-500  '
                        >
                        View More
                        </button>
                 </div>

            </div>
        </div>
    );
};

export default Packages;