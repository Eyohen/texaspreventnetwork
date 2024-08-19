import React from 'react'
import umbrella from '../assets/umbrella.jpeg'
import { useNavigate } from 'react-router-dom'
import { HiArrowNarrowLeft } from "react-icons/hi";

const BlogDetails = () => {
    const navigate = useNavigate()
  return (
    <div>

    <div onClick={() => navigate(-1)} className=''></div>

        <div className='flex flex-col justify-center items-center'>
            <div className='max-w-[750px]'>
        <p className='text-gray-400 mt-12'>NOV 17 2020</p>
        <p className='font-semibold text-3xl mt-3'>Less is More: Diving into Minimalism in Photography</p>
        <p className='text-gray-500 italic mt-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
        <div className='mt-16'><img src={umbrella} className='object-cover w-[750px] h-[450px]' /></div>
        <p className='text-gray-500 font-semibold mt-2 text-center'>San Francisco, USA </p>

        <p className='mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <p className='text-lg font-semibold mt-6'>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</p>
        <p className='mt-6'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
        
        </div>
        </div>

        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

<p>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</p>
<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
      
 */}

<div className='mb-12'></div>
    </div>
  )
}

export default BlogDetails