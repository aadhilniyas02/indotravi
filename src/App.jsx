import React from 'react'
import Header from './components/HeaderComponents/HeaderMain/Header';
import Locate from './components/Locate/Locate';
import Book from './components/Booking/Book';
import Packages from './components/Packages/Packages';
import Testimonial from './components/Testimonials/Testimonial';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';



const App = () => {
  return (
    <div className='bg-gray-100 m-0 p-0 w-full overflow-hidden"'>
      <Header />
      <Locate />
      <Book />
      <Packages />
      <Testimonial />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
