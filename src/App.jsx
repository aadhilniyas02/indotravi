import React from 'react'
import Navbar from './components/Header Components/Navbar'
import Header from './components/Header'
import Locate from './components/Locate'
import Footer from './components/Footer'
import Blog from './components/Blog'
import Testimonial from './components/Testimonial'
import Packages from './components/Packages'
import Book from './components/Book'

const App = () => {
  return (
    <div className='bg-gray-100 m-0 p-0'>
      <Navbar />
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
