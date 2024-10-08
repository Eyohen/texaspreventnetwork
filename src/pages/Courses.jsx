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
import CourseSide from '../components/CourseSide'


const Courses = () => {
 const navigate = useNavigate();

  return (
    <>
        <div className='flex justify-between h-screen'>
        <CourseSide />

    <div className='flex-1 ml-[150px]'>
    <Navbar />
        
    <p className='text-2xl font-semibold mt-6 text-center'>All Our Courses</p>

{/* <p className='text-center mt-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
<p className='text-center mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc.</p>
<p className='text-center mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do .</p> */}


        <div className='text-right mt-9 px-[345px]'>
        <input className='border-2 border-gray-500 py-2 px-2 w-[300px] rounded-md' placeholder='Search ...'/>
        </div>


<div className='grid grid-cols-3 py-9 px-[310px] gap-y-16'>

<div onClick={() => navigate('/coursedetails')} className='border border-gray-600 bg-black w-[300px] h-[320px] rounded-xl text-lg'>
    <img src={parenting} className='w-[320px] h-[170px] rounded-t-xl' />

    <p className='text-xl font-semibold px-2 text-white mt-2'>Parenting</p>
    <p className='text-gray-500 text-sm px-2'>by Andrew Iwe</p>

    <div className='flex justify-between px-2'>
    <p className='text-white'>8 lectures</p>
    <div className='flex justify-start gap-x-2'>
    <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />
    </div>
    </div>

    <div className='flex justify-between px-2 mt-5'>
    <p className='text-white font-bold text-2xl'>$23.00</p>
    <button className='border border-white rounded text-white text-sm px-3'>Add To Cart</button>
    </div>
    </div>

    <div onClick={() => navigate('/coursedetails')} className='border border-gray-600 bg-black w-[300px] h-[320px] rounded-xl text-lg'>
    <img src={parenting} className='w-[320px] h-[170px] rounded-t-xl' />

    <p className='text-xl font-semibold px-2 text-white mt-2'>Parenting</p>
    <p className='text-gray-500 text-sm px-2'>by Andrew Iwe</p>

    <div className='flex justify-between px-2'>
    <p className='text-white'>8 lectures</p>
    <div className='flex justify-start gap-x-2'>
    <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />
    </div>
    </div>

    <div className='flex justify-between px-2 mt-5'>
    <p className='text-white font-bold text-2xl'>$23.00</p>
    <button className='border border-white rounded text-white text-sm px-3'>Add To Cart</button>
    </div>
    </div>


    <div onClick={() => navigate('/coursedetails')} className='border border-gray-600 bg-black w-[300px] h-[320px] rounded-xl text-lg'>
    <img src={parenting} className='w-[320px] h-[170px] rounded-t-xl' />

    <p className='text-xl font-semibold px-2 text-white mt-2'>Parenting</p>
    <p className='text-gray-500 text-sm px-2'>by Andrew Iwe</p>

    <div className='flex justify-between px-2'>
    <p className='text-white'>8 lectures</p>
    <div className='flex justify-start gap-x-2'>
    <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />
    </div>
    </div>

    <div className='flex justify-between px-2 mt-5'>
    <p className='text-white font-bold text-2xl'>$23.00</p>
    <button className='border border-white rounded text-white text-sm px-3'>Add To Cart</button>
    </div>
    </div>

    <div onClick={() => navigate('/coursedetails')} className='border border-gray-600 bg-black w-[300px] h-[320px] rounded-xl text-lg'>
    <img src={parenting} className='w-[320px] h-[170px] rounded-t-xl' />

    <p className='text-xl font-semibold px-2 text-white mt-2'>Parenting</p>
    <p className='text-gray-500 text-sm px-2'>by Andrew Iwe</p>

    <div className='flex justify-between px-2'>
    <p className='text-white'>8 lectures</p>
    <div className='flex justify-start gap-x-2'>
    <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />
    </div>
    </div>

    <div className='flex justify-between px-2 mt-5'>
    <p className='text-white font-bold text-2xl'>$23.00</p>
    <button className='border border-white rounded text-white text-sm px-3'>Add To Cart</button>
    </div>
    </div>

    {/* <div className='border border-gray-600 w-[300px] rounded-sm text-lg'>
    <img src={angermanage} className='w-[320px] h-[180px] rounded-sm' />
    <p className='text-xl font-semibold text-gray-900 px-2 mt-1'>Anger Management</p>
    <p className='text-gray-500 px-2'>by Andrew Iwe</p>
    <div className='flex justify-between px-2'>
    <p className='text-blue-600'>8 lectures</p>
    <div className='flex justify-start gap-x-2'>
    <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />
    </div>
    </div>
    </div>

    <div className='border border-gray-600 w-[300px] rounded-sm text-lg'>
    <img src={domestic} className='w-[320px] h-[180px] rounded-sm' />
    <p className='text-xl font-semibold text-gray-900 px-2 mt-1'>Domestic Violence</p>
    <p className='text-gray-500 px-2'>by Andrew Iwe</p>
    <div className='flex justify-between px-2'>
    <p className='text-blue-600'>8 lectures</p>
    <div className='flex justify-start gap-x-2'>
    <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />
    </div>
    </div>
    </div>

    <div className='border border-gray-600 w-[300px] rounded-sm text-lg'>
    <img src={domestic} className='w-[320px] h-[180px] rounded-sm' />
    <p className='text-xl font-semibold text-gray-900 px-2 mt-1'>Domestic Violence</p>
    <p className='text-gray-500 px-2'>by Andrew Iwe</p>
    <div className='flex justify-between px-2'>
    <p className='text-blue-600'>8 lectures</p>
    <div className='flex justify-start gap-x-2'>
    <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />
    </div>
    </div>
    </div>

    <div className='border border-gray-600 w-[300px] rounded-sm text-lg'>
    <img src={angermanage} className='w-[320px] h-[180px] rounded-sm' />
    <p className='text-xl font-semibold text-gray-900 px-2 mt-1'>Anger Management</p>
    <p className='text-gray-500 px-2'>by Andrew Iwe</p>
    <div className='flex justify-between px-2'>
    <p className='text-blue-600'>8 lectures</p>
    <div className='flex justify-start gap-x-2'>
    <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />
    </div>
    </div>
    </div>

    <div className='border border-gray-600 w-[300px] rounded-sm text-lg'>
    <img src={domestic} className='w-[320px] h-[180px] rounded-sm' />
    <p className='text-xl font-semibold text-gray-900 px-2 mt-1'>Domestic Violence</p>
    <p className='text-gray-500 px-2'>by Andrew Iwe</p>
    <div className='flex justify-between px-2'>
    <p className='text-blue-600'>8 lectures</p>
    <div className='flex justify-start gap-x-2'>
    <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />
    </div>
    </div>
    </div>

    <div className='border border-gray-600 w-[300px] rounded-sm text-lg'>
    <img src={domestic} className='w-[320px] h-[180px] rounded-sm' />
    <p className='text-xl font-semibold text-gray-900 px-2 mt-1'>Domestic Violence</p>
    <p className='text-gray-500 px-2'>by Andrew Iwe</p>
    <div className='flex justify-between px-2'>
    <p className='text-blue-600'>8 lectures</p>
    <div className='flex justify-start gap-x-2'>
    <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />
    </div>
    </div>
    </div>

    <div className='border border-gray-600 w-[300px] rounded-sm text-lg'>
    <img src={angermanage} className='w-[320px] h-[180px] rounded-sm' />
    <p className='text-xl font-semibold text-gray-900 px-2 mt-1'>Anger Management</p>
    <p className='text-gray-500 px-2'>by Andrew Iwe</p>
    <div className='flex justify-between px-2'>
    <p className='text-blue-600'>8 lectures</p>
    <div className='flex justify-start gap-x-2'>
    <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />
    </div>
    </div>
    </div>

    <div className='border border-gray-600 w-[300px] rounded-sm text-lg'>
    <img src={domestic} className='w-[320px] h-[180px] rounded-sm' />
    <p className='text-xl font-semibold text-gray-900 px-2 mt-1'>Domestic Violence</p>
    <p className='text-gray-500 px-2'>by Andrew Iwe</p>
    <div className='flex justify-between px-2'>
    <p className='text-blue-600'>8 lectures</p>
    <div className='flex justify-start gap-x-2'>
    <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />
    </div>
    </div>
    </div> */}
{/* 
    <div className='border border-gray-600 w-[300px] rounded-sm text-lg'>
    <img src={domestic} className='w-[320px] h-[180px] rounded-sm' />
    <p className='text-xl font-semibold text-gray-900 px-2 mt-1'>Domestic Violence</p>
    <p className='text-gray-500 px-2'>by Andrew Iwe</p>
    <div className='flex justify-between px-2'>
    <p className='text-blue-600'>8 lectures</p>
    <div className='flex justify-start gap-x-2'>
    <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />
    </div>
    </div>
    </div> */}


           
</div>
{/* <Footer />   */}
</div>
 
    </div>
 
    </>
  )
}

export default Courses