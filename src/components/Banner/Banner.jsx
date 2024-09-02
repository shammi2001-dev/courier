import React from 'react'
import banner from '../../assets/banner.png'
const Banner = () => {
  return (
    <div className='pt-[170px] pb-[168px] max-w-container mx-auto'>
        <div className='flex'>
        <div className='w-1/2'>
            <h1 className='font-raleway text-[49px] font-bold w-[516px] leading-[59px]'>A trusted provider of courier services.</h1>
            <p className='w-[330px] text-[#4D4D4D] font-raleway font-normal mt-[16px] mb-[41px] '>We deliver your products safely to your home in a reasonable time.</p>
            <a href='' className='font-ox px-[20px] py-[12px] border-2 bg-[#F95C19] text-white text-[20px] font-bold'>Get started</a>
        </div>
        <div className='w-1/2'>
            <img src={banner} alt=''></img>
        </div>
        </div>
    </div>
  )
}

export default Banner