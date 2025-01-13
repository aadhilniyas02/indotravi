import React, {  useRef } from 'react'
import fallBook from "../assets/fallBook.jpg";

const Book = () => {
    //const [isLeftVisible, setLeftVisible] = useState(false);
   // const [isRightVisible, setRightVisible] = useState(false);

    const leftSectionRef = useRef(null);
    const rightSectionRef = useRef(null);

    const steps = [
        {
            id:1,
            icon:"🔄",
            title:"Find your destination",
            description:"Embark on a journey to discover your dream destination, where adventure and relaxation await"
        },
        {
            id:2,
            icon:"🎫",
            title:"Book a ticker",
            description:"Ensure a smooth travel experience by booking tickets to your preferred destination via our booking platform"
        },
        {
            id:3,
            icon:"💳",
            title:"Make payment",
            description:"We offer a veriety of payment options to meet your preferences and ensure a hassle-free transaction process"
        },
        {
            id:4,
            icon:"🧳",
            title:"Explore destination",
            description:"You'll be immersed in a captivating tapestry of sights, sound and tastes, as you wind your way through the ancient streets"
        },
    ]

    {/*useEffect (() => {
        const observerOptions = {
            threshold: 0.05, //Section become visible when 20% of it is in view
        };

        const leftObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    setLeftVisible(true);
                }
            });
        }, observerOptions);
            
        const rightObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    setRightVisible(true);
                }
            });
        }, observerOptions);
        
        if(leftSectionRef.current) leftObserver.observe(leftSectionRef.current);
        if(rightSectionRef.current) rightObserver.observe(rightSectionRef.current);

        return () => {
            if(leftSectionRef.current) leftObserver.unobserve(leftSectionRef.current);
            if(rightSectionRef.current) rightObserver.unobserve(rightSectionRef.current);
        };


    }, []);*/}




  return (

    <div className='bg-gray-100 min-h-screen pt-40'>
        <div className='max-w-7xl mx-auto px-4 '>
            <div className='flex flex-col md:flex-row h-auto md:h-screen'>
            
                {/* Left Side Section */}
                <div 
                    ref={leftSectionRef}
                    className='flex-1 flex items-center justify-center min-h-screen mb-10 md:mb-0'
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
                            <p className='text-sm md:text-lg text-gray-100 text-left '>
                                Emabark on a journey to find your dream destination, where adventure <br /> and relaxation await, 
                                creating unforgettable memories along the way
                            </p> 
                        </div> 

                    </div>
                </div>

                {/* Right Side Section - Steps */}
                <div 
                    ref={rightSectionRef}
                    className='flex-1 px-4 md:-px-12 '
                >

                    {/* Right Side Section - Heading */}
                    <div className='md:py-2 md:px-12 mb-6'>
                        <p className='text-sm md:text-md text-gray-400 mb-2 text-left md:text-left'> How it works</p>
                        <h2 className='text-2xl md:text-3xl  font-bold text-black mb-8 md:text-left'> One click for you </h2>
                    </div>

                    {/* Right Side Section - Card */}
                    <div className='md:pt-2 md:pl-10 space-y-6'>
                        <div className='space-y-6 w-full '>
                            {steps.map((step) => (
                                <div
                                key={step.id}
                                className="flex items-start bg-gray-100 rounded-xl shadow-none p-4 md:p-6 space-y-4 sm:space-y-0 sm:space-x-4 hover:shadow-xl hover:bg-white  transition-transform duration-300"
                              >
                                {/* Icon */}
                                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg text-2xl ">
                                  {step.icon}
                                </div>

                                {/* Texts*/}
                                <div>
                                  <h3 className="text-lg font-semibold text-gray-900">
                                    {step.title}
                                  </h3>
                                  <p className="text-sm text-gray-600 mt-2">{step.description}</p>
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