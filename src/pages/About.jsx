import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Faq from '../components/Faq'



const About = () => {
  return (
    <>
  <Navbar />
    <div>

<p className='text-2xl font-semibold mt-6 text-center'>About Us</p>

<p className='text-2xl font-semibold mt-6 text-center px-[300px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
<p className='text-lg font-normal mt-6 text-center px-[200px]'>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

<p className='text-2xl font-semibold mt-9 text-center '>What Our Students Say</p>
<p className='text-2xl mt-6 text-center px-[300px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

<div className=''>
<Faq />
</div>

<div className='mb-12'></div>
    </div>
    <Footer />
    </>
  )
}

export default About