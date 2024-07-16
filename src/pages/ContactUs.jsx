import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ContactUs = () => {
  return (
    <>
       <Navbar />
    <div className="bg-gray-100 font-nunito p-9">
   

<div className=' rounded-2xl px-48 pt-24 pb-12 flex flex-col'>

<div>
     <p className='text-[#2A2B2B] text-3xl font-normal'>Name</p>
      <input className='w-full px-2 py-4 bg-white border border-gray-200 rounded-lg mb-4 mt-2' />

      <p className='text-[#2A2B2B] mt-4 text-3xl font-normal'>Email Address</p>
      <input className='w-full px-2 py-4 bg-white border border-gray-200 rounded-lg mb-4 mt-2' />


      <p className='text-[#2A2B2B] mt-4 text-3xl font-normal'>Any Suggestions ?</p>
      <textarea className='w-full px-2 py-12 bg-white border border-gray-200 rounded-lg mb-4 mt-2' />



    <button className='text-white text-3xl bg-green-200 py-4 px-6 w-full rounded-full mt-4' >Submit</button>

</div>

</div>



      </div>
    <Footer/></>
  )
}

export default ContactUs