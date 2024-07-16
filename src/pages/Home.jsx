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
import backgroundImage from '../assets/schoolwork.jpg'
import UnderHero from '../components/UnderHero'
import Events from '../components/Events'
import Testimonials from '../components/Testimonials'

const Home = () => {

  const navigate = useNavigate();
  return (
    <>
    <Navbar />
    <div>
      <div className="relative h-[450px] w-full bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex justify-start px-24 pt-32">
        <div className='bg-white py-10 px-6'>
        <p className="text-black text-xl md:text-xl font-semibold">Course</p>
        <h1 className="text-gray-600 text-4xl md:text-3xl font-bold mt-2">Get The Best Addiction Courses</h1>
        <button className='bg-blue-500 text-white px-9 py-1 rounded-md mt-4'>Get Started</button>
     
        </div>
      </div>
      </div>
      <UnderHero />

{/* <div className='flex justify-center gap-x-[100px] mt-24'> 
  <div>
  <p className='text-5xl font-bold'>Amazing educational Support</p>
  <p className='text-5xl font-bold mt-2'>programs</p>
  <p className='max-w-[500px] mt-9 text-lg'>Morbi dapibus erat magna, et maximus orci mattis venenatis. Vivamus dolor purus, varius et neque at, pulvinar condimentum ipsum. Etiam semper purus in nisl commodo, quis sodales quam sagittis</p>

  
  <div className="md:flex gap-x-0 md:gap-x-9 md:space-y-0 space-y-4 mt-9 text-center ">
<div>
  <button onClick={()=> navigate('/freebrowsecommunity')} className="bg-blue-700 text-white rounded-full px-6 py-4 font-semibold text-xl">
    Browse Courses
  </button>
</div>

<div>
  <button onClick={()=> navigate('/freeregistervisibility')} className="border border-blue-700 rounded-full px-6 py-4 text-blue-800 font-semibold text-xl">
    Try for free
  </button>
</div>
</div>
  </div>

  <img src={domestic} className='w-[450px] rounded-md' />
</div> */}


<div className='px-[225px]'>
<HowItWorks />
</div>


<div className='flex justify-between items-center mt-24 px-[230px]'>


  <div>
<p className='text-4xl font-medium'>Popular Courses</p>
<p className='mt-2'>Discover what people are learning</p>
</div>

<div className='flex gap-x-4 font-semibold'>
  <p className='text-blue-600'>Parenting</p>
  <p className='hover:text-blue-600'>Anger Management</p>
  <p className='hover:text-blue-600'>Alcohol Addiction</p>
  <p className='hover:text-blue-600'>Domestic Violence</p>
</div>

</div>



<div className='flex justify-center gap-x-9 py-9'>

        <div onClick={() => navigate('/coursedetails')} className='border border-gray-600 w-[280px] rounded-sm text-lg'>
            <img src={parenting} className='w-[280px] h-[160px] rounded-sm' />
            <p className='text-xl font-semibold text-gray-900 px-2 mt-1'>Parenting</p>
            <p className='text-gray-500 px-2'>by Andrew Iwe</p>

            <div className='flex justify-between px-2'>
            <p className='text-blue-600'>8 lectures</p>
            <div className='flex justify-start gap-x-2'>
            <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />
            </div>
            </div>


            </div>

            <div className='border border-gray-600 w-[280px] rounded-sm text-lg'>
            <img src={angermanage} className='w-[280px] h-[160px] rounded-sm' />
            <p className='text-xl font-semibold text-gray-900 px-2 mt-1'>Anger Management</p>
            <p className='text-gray-500 px-2'>by Andrew Iwe</p>
            <div className='flex justify-between px-2'>
            <p className='text-blue-600'>8 lectures</p>
            <div className='flex justify-start gap-x-2'>
            <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />
            </div>
            </div>
            </div>

            <div className='border border-gray-600 w-[280px] rounded-sm text-lg'>
            <img src={domestic} className='w-[280px] h-[160px] rounded-sm' />
            <p className='text-xl font-semibold text-gray-900 px-2 mt-1'>Domestic Violence</p>
            <p className='text-gray-500 px-2'>by Andrew Iwe</p>
            <div className='flex justify-between px-2'>
            <p className='text-blue-600'>8 lectures</p>
            <div className='flex justify-start gap-x-2'>
            <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />
            </div>
            </div>
            </div>

            <div className='border border-gray-600 w-[280px] rounded-sm text-lg'>
            <img src={domestic} className='w-[280px] h-[160px] rounded-sm' />
            <p className='text-xl font-semibold text-gray-900 px-2 mt-1'>Domestic Violence</p>
            <p className='text-gray-500 px-2'>by Andrew Iwe</p>
            <div className='flex justify-between px-2'>
            <p className='text-blue-600'>8 lectures</p>
            <div className='flex justify-start gap-x-2'>
            <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />
            </div>
            </div>
            </div>

</div>


<div className='flex justify-center gap-x-9 mt-9'>
  <Events /> <Testimonials />
</div>

<div className=''>
<Faq />
</div>

<div className='mb-12'></div>


    </div>
    <Footer />
    </>
  )
}

export default Home