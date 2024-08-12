import React from 'react'

const Navbar = () => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-3 border-b border-gray-800 pb-2'>
      <div className='flex flex-row ml-2'>
        <img className='w-10 h-10 mt-3 -mr-2' src="logo.png"/>
        <img className="h-16" src="logo-word.png"/>
      </div>
      <div className='hidden lg:flex'>
        <div class="absolute mt-3">
            <div class="absolute inset-y-0 end-0 flex items-center ps-2 pointer-events-none">
                <svg class="w-4 h-4 mr-4 text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" id="search" class="block w-[30vw] p-2.5 text-md text-gray-200 border rounded-3xl bg-slate-800" placeholder="Search"/>
        </div>
      </div>
      <div className='flex flex-row justify-end'>
        <button className='bg-pink px-6 my-2.5 rounded-md'>Login</button>
        <img src='icons/more.png' className='my-2'></img>
      </div>

    </div>
  )
}

export default Navbar