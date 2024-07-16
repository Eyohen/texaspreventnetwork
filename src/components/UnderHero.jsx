import React from 'react'
import { RiShieldStarFill } from "react-icons/ri";
import { PiBookOpenText } from "react-icons/pi";
import { GiBookshelf } from "react-icons/gi";

const UnderHero = () => {
  return (
    <div className='bg-gray-300 w-full py-9'>

        <div className='flex justify-center gap-x-12'>
        <GiBookshelf size={35} /><p className='font-semibold text-xl'>100,000 Online Courses</p>
        <PiBookOpenText size={35} /><p className='font-semibold text-xl'>Expert Instruction</p>
<RiShieldStarFill size={35} /><p className='font-semibold text-xl'>Unlimited Lifetime Access</p>
</div>

    </div>
  )
}

export default UnderHero