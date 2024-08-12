import React from 'react'

const LeftBar = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row items-center my-2 ml-4'>
        <img src="icons/home.png" className='w-6 h-6 mr-2' />
        <p className='text-pink font-text-bold text-lg'>For You</p>
      </div>
      <div className='flex flex-row items-center my-2 ml-4'>
        <img src="icons/explore.png" className='w-6 h-6 mr-2' />
        <p className='text-white font-text-bold text-lg'>Explore</p>
        <button className='rounded-lg bg-pink text-white px-1 m-2 text-sm'>New</button>
      </div>
      <div className='flex flex-row items-center my-2 ml-4'>
        <img src="icons/people.png" className='w-6 h-6 mr-2' />
        <p className='font-text-bold text-lg'>Following</p>
      </div>
      <div className='flex flex-row items-center my-2 ml-4'>
        <img src="icons/live.png" className='w-6 h-6 mr-2' />
        <p className='font-text-bold text-lg'>LIVE</p>
      </div>
      <div className='flex flex-row items-center my-2 ml-4'>
        <img src="icons/profile.png" className='w-6 h-6 mr-2' />
        <p className='font-text-bold text-lg'>Profile</p>
      </div>
      <p className='text-gray-500 ml-4 my-4 md:text-lg lg:text-xl'>Log in to follow creators, like videos, and view comments.</p>
      <button className='bg-lightGrey border-pink rounded-md text-pink py-2 border-2 ml-2 font-display-bold text-lg'>Log in</button>
      <hr className='my-4 mx-2 bg-gray-500 h-px'></hr>
      <a href="https://effecthouse.tiktok.com/download?utm_campaign=ttweb_entrance_v1&utm_source=tiktok_webapp_main" class="relative block my-2 ml-2">
        <img src="logo-yellow.png" alt="Logo" class="w-full h-auto"/>
        <p class="absolute inset-0 flex items-center justify-center text-white font-display-bold text-[13px] text-wrap ml-14">
            Create TikTok effects get a reward
        </p>
      </a>

      <p className='font-display-bold text-md text-gray-500 mb-2 mt-4 ml-2'>Company</p>
      <p className='font-display-bold text-md text-gray-500 my-2 ml-2'>Program</p>
      <p className='font-display-bold text-md text-gray-500 my-2 ml-2'>Terms & Policies</p>
      <p className='font-display-regular text-sm text-gray-500 ml-2'>&copy; 2024 TikTok</p>



    </div>
  )
}

export default LeftBar