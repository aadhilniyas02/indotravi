import React, { useState} from 'react'
import LanguageBtn from './LanguageBtn'


const Navbar = () => {
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    console.log('Menu Open', isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen)
}

  return (
    <div className="absolute top-0 left-0 w-full z-50 px-8 overflow-hidden">
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 '>
            <h6 className='text-white text-2xl font-bold'> INDOTRAVI </h6>
            
            {/* Desktop view nav bar*/}
            <div className='hidden md:flex items-center justify-center w-auto'>
                <ul className='flex items-center justify-center space-x-10 lg:space-x-16 px-8 py-2 rounded-full shadow-log bg-gray-300/30 backdrop-blur-md bg:drop'>
                  <li> <a href="#About" className='cursor-pointer hover:text-white text-gray-100'> About </a> </li> 
                  <li> <a href="#Services" className='cursor-pointer hover:text-white text-gray-100'> Services </a> </li>
                  <li> <a href="#Tour" className='cursor-pointer hover:text-white   text-gray-100'> Tour </a> </li>
                  <li> <a href="#About" className='cursor-pointer hover:text-white text-gray-100'> About </a> </li>
                  <li> <a href="#Contact" className='cursor-pointer hover:text-white text-gray-100'> Contact </a> </li>
                </ul>
            </div>
           
          <div className='hidden md:flex items-center gap-2 justify-end w-auto'>
                <div className='flex items-center gap-2'>
                      <LanguageBtn /> {/* Language Swtiching Component */}
                  </div>

                  <button className='hover:bg-gray-200 bg-gray-100 px-6 py-2 rounded-full'> Login </button>
          </div>
           
            <button 
              className='md:hidden text-3xl text-white' 
              onClick={toggleMobileMenu}
              > 
              {isMobileMenuOpen ? "X" : "☰"}
             </button>

        </div>

          {/* mobile view nav bar */}
        
        <div className={`md:hidden sm:hidden mt-10 mr-10 w-80 h-96 rounded-lg bg-gray-300/70 backdrop-blur-lg shadow-lg transition-transform duration-300 ${
      isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`} >
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <li> <a href="#About" className='px-4 py-2 rounded-full inline-block' > About </a> </li>
            <li> <a href="#Services" className='px-4 py-2 rounded-full inline-block' > Services </a> </li>
            <li> <a href="#Tour" className='px-4 py-2 rounded-full inline-block' > Tour </a> </li>
            <li> <a href="#About" className='px-4 py-2 rounded-full inline-block' > About </a> </li>
            <li> <a href="#Contact" className='px-4 py-2 rounded-full inline-block' > Contact </a> </li>
            <li> <a href="#Login" className='px-4 py-2 rounded-full inline-block' > Login </a> </li>
          </ul>
        </div>

        {isMobileMenuOpen && (
             <div 
             onClick={toggleMobileMenu}
             className='fixed inset-0 bg-black.50 z-10'
             >

             </div>
        )}
       
    </div>
  )
}

export default Navbar