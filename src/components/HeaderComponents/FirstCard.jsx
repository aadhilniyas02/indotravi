import React, { useEffect, useState} from 'react'
import CardNew from './CardNew';

const FirstCard = ({label, targetValue, suffix, duration}) => {

    const [value, setValue] = useState(0);

    useEffect(() => {

        let start = 0;
        const increment = Math.ceil(targetValue / (duration / 100)); 
        const interval = setInterval(() => {
            start += increment;
            if(start >= targetValue) {
                clearInterval(interval);
                setValue(targetValue) ;
            } else {
                setValue(start);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [targetValue, duration]);



  return (
    <div className='grid-cols-1 sm:grid-cols-2 md:grid-col-3'>
        <div className='flex flex-col items-center justify-center bg-white shadow-md rounded-xl p-3 sm:p-4 md:p-6 w-30 sm:w-60 md:w-72 transform hover:scale-105 transition duration-300'>
            <h2 className='text-2xl sm:text-3xl font-bold text-black '> {value} {suffix}</h2>
            <p className='text-sm sm:text-sm md:text-lg text-gray-500'> {label} </p>
        </div>
    </div>
    
  )
}

export default FirstCard