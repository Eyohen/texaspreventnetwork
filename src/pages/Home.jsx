import React from 'react'
import Navbar from '../components/Navbar'
import parenting from '../assets/parenting.jpeg'
import angermanage from '../assets/angermanage.jpg'
import domestic from '../assets/domesticviolence.jpeg'
import { FaStar } from "react-icons/fa";
import Faq from '../components/Faq'
import HowItWorks from '../components/HowItWorks'
import Footer from '../components/Footer'
import { Link,useNavigate } from 'react-router-dom'
import backgroundImage from '../assets/schoolwork.jpg'
// import backgroundImage from '../assets/hero2.jpg'
import UnderHero from '../components/UnderHero'
import Events from '../components/Events'
import Testimonials from '../components/Testimonials'

import NextStep from '../components/NextStep'
import BlogCard from '../components/BlogCard'

const Home = () => {

  const blogs = [
    { id:1 },
    { id:2 },
    { id:3 },
 ]

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


<div className='px-[225px] pt-[120px]'>
<NextStep />
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


<p className='text-center font-bold text-[27px] mt-12'>Read Latest Articles</p>
<p className='text-gray-500 w-[320px] mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
<div className='flex gap-x-[45px] justify-center mt-12'>
  {blogs.map(() => (
    <Link to={'/blogdetails'} ><BlogCard/></Link>
    ))}

</div>


<div className='flex justify-center'>
<Faq />
</div>

<div className='mb-12'></div>


    </div>
    <Footer />
    </>
  )
}

export default Home