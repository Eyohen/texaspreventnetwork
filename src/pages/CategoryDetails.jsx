import React from 'react'
import Navbar from '../components/Navbar'
import parenting from '../assets/parenting.jpeg'
import angermanage from '../assets/angermanage.jpg'
import domestic from '../assets/domesticviolence.jpeg'
import { FaStar } from "react-icons/fa";
import Faq from '../components/Faq'
import HowItWorks from '../components/HowItWorks'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import { IoChevronBackSharp } from "react-icons/io5";


const CategoryDetails = () => {

    const navigate = useNavigate();
  return (
    <>
    <Navbar />
    <div>

        <p onClick={() => navigate(-1)} className='flex items-center gap-x-1 text-lg font-semibold mt-6 ml-6 cursor-pointer'><IoChevronBackSharp size={25} /> Back</p>
        
    <p className='text-2xl font-semibold mt-6 text-center'>Parenting</p>

<p className='text-center mt-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
<p className='text-center mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc.</p>
<p className='text-center mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do .</p>


        <div className='text-center mt-9'>
        <input className='border-2 border-gray-500 py-2 px-2 w-[500px] rounded-md' placeholder='Search ...'/>
        </div>

     

<div className='grid grid-cols-3 py-9 px-[310px] gap-y-16'>

        <div onClick={() => navigate('/coursedetails')} className='border-2 border-gray-600 px-4 py-6 max-w-[280px] rounded-xl text-lg'>
            <img src={parenting} className='w-24 rounded-md' />
            <p className='text-xl font-semibold text-gray-900'>Parenting 1</p>
            <p className='text-gray-500'>by Andrew Iwe</p>
            <p className='text-green-600'>8 lectures</p>
            <div className='flex justify-start gap-x-2'>
            <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />
            </div>
            </div>

            <div className='border-2 border-gray-600 px-4 py-6 max-w-[280px] rounded-xl text-lg'>
            <img src={angermanage} className='w-24 rounded-md' />
            <p className='text-xl font-semibold text-gray-900'>Parenting 2</p>
            <p className='text-gray-500'>by Andrew Iwe</p>
            <p className='text-green-600'>8 lectures</p>
            <div className='flex justify-start gap-x-2'>
            <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />
            </div>
            </div>

            <div className='border-2 border-gray-600 px-4 py-6 max-w-[280px] rounded-xl text-lg'>
            <img src={domestic} className='w-24 rounded-md' />
            <p className='text-xl font-semibold text-gray-900'>Parenting 3</p>
            <p className='text-gray-500'>by Andrew Iwe</p>
            <p className='text-green-600'>8 lectures</p>
            <div className='flex justify-start gap-x-2'>
            <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />
            </div>
            </div>

           
</div>
        
    </div>
    <Footer />    
    </>
  )
}

export default CategoryDetails