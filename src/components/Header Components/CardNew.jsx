import React from 'react'
import FirstCard from './FirstCard';

const CardNew = () => {

    const cards = [
        { label: 'Total Customers', targetValue: 10, suffix:"M+" , duration: 200000000},
        { label: 'years of Experience', targetValue: 9, suffix:"+" , duration: 150000000 },
        { label: 'Total Destinations', targetValue: 12, suffix:"K+" ,duration: 100000000},
        { label: 'Average Rating', targetValue: 5.0, suffix:".0" , duration: 120000000},
    ];

  return (
     <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 justify-center gap-3 sm:gap-6 md:gap-8'>
            {cards.map((card, index) => (
                <FirstCard
                key={index} 
                label={card.label}
                targetValue={card.targetValue}
                suffix={card.suffix}
                duration={card.duration}
                />
            ))}
        </div>
  )
}

export default CardNew