import React from 'react'
import Navbar from '../components/Navbar'
import parenting from '../assets/parenting.jpeg'
import angermanage from '../assets/angermanage.jpg'
import domestic from '../assets/domesticviolence.jpeg'
import { FaStar } from "react-icons/fa";
import Faq from '../components/Faq'
import HowItWorks from '../components/HowItWorks'

const Home = () => {
  return (
    <>
    <Navbar />
    <div>

<div className='flex justify-center gap-x-[100px] mt-24'> 
  <div>
  <p className='text-5xl font-bold'>Amazing educational Support</p>
  <p className='text-5xl font-bold mt-2'>programs</p>
  <p className='max-w-[500px] mt-9 text-lg'>Morbi dapibus erat magna, et maximus orci mattis venenatis. Vivamus dolor purus, varius et neque at, pulvinar condimentum ipsum. Etiam semper purus in nisl commodo, quis sodales quam sagittis</p>

  
  <div className="md:flex gap-x-0 md:gap-x-9 md:space-y-0 space-y-4 mt-9 text-center ">

<div>
  <button onClick={()=> navigate('/freebrowsecommunity')} className="bg-green-700 text-white rounded-full px-6 py-4 font-semibold text-xl">
    Browse Courses
  </button>
</div>

<div>
  <button onClick={()=> navigate('/freeregistervisibility')} className="border border-green-700 rounded-full px-6 py-4 text-green-800 font-semibold text-xl">
    Try for free
  </button>
</div>
</div>
  </div>

  <img src={domestic} className='w-[450px] rounded-md' />

</div>


<div className='px-[225px]'>
<HowItWorks />
</div>


        <p className='text-4xl text-center py-9 font-medium mt-6'>Popular Courses</p>
        <p className='text-center'>Aenean eget quam sed felis finibus feugiat at et nunc. Aliquam nulla massa, tempus id egestas sed, porta quis</p>
        <p className='text-center'>odio. Morbi quis orci volutpat, dapibus orci nec, venenatis elit. Donec ac ultrices enim, sit amet porttitor tellus.</p>
        <p className='text-center'>Proin et arcu sed lectus lacinia semper. Vestibulum ut nisi nisi</p>

<div className='flex justify-center gap-x-9 py-9'>

        <p className='border-2 border-gray-600 px-4 py-2 rounded-xl text-lg'>Parenting</p>

        <p className='border-2 border-gray-600 px-4 py-2 rounded-xl text-lg'>Anger Management</p>

        <p className='border-2 border-gray-600 px-4 py-2 rounded-xl text-lg'>Alcohol Addiction</p>

        <p className='border-2 border-gray-600 px-4 py-2 rounded-xl text-lg'>Drug Addiction</p>

        <p className='border-2 border-gray-600 px-4 py-2 rounded-xl text-lg'>Domestic Violence</p>

</div>


<div className='flex justify-center gap-x-9 py-9'>

        <div className='border-2 border-gray-600 px-4 py-6 min-w-[280px] rounded-xl text-lg'>
            <img src={parenting} className='w-24 rounded-md' />
            <p className='text-xl font-semibold text-gray-900'>Parenting</p>
            <p className='text-gray-500'>by Andrew Iwe</p>
            <p className='text-green-600'>8 lectures</p>
            <div className='flex justify-start gap-x-2'>
            <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />
            </div>
            </div>

            <div className='border-2 border-gray-600 px-4 py-6 min-w-[280px] rounded-xl text-lg'>
            <img src={angermanage} className='w-24 rounded-md' />
            <p className='text-xl font-semibold text-gray-900'>Anger Management</p>
            <p className='text-gray-500'>by Andrew Iwe</p>
            <p className='text-green-600'>8 lectures</p>
            <div className='flex justify-start gap-x-2'>
            <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />
            </div>
            </div>

            <div className='border-2 border-gray-600 px-4 py-6 min-w-[280px] rounded-xl text-lg'>
            <img src={domestic} className='w-24 rounded-md' />
            <p className='text-xl font-semibold text-gray-900'>Domestic Violence</p>
            <p className='text-gray-500'>by Andrew Iwe</p>
            <p className='text-green-600'>8 lectures</p>
            <div className='flex justify-start gap-x-2'>
            <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />  <FaStar color='orange' />
            </div>
            </div>

           

</div>

<div className=''>
<Faq />
</div>

<div className='mb-12'></div>


    </div>
    </>
  )
}

export default Home