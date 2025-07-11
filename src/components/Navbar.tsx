import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      {/* SEARCH BAR */}
      <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
        <Image src="/search.png" alt='search' width={14} height={14}/>
        <input type='text' placeholder='Search...' className='outline-none w-[200px] p-2 bg-transparent text-gray-700'/> 

      </div>

      {/* ICONS AND USERS */}
      <div className='flex items-center gap-6 justify-end w-full'>
        <div className='bg-white  rounded-full h-7 w-7 flex items-center justify-center cursor-pointer'>
          <Image src="/message.png" alt='' width={20} height={20}/>
        </div>
        <div className='bg-white  relative rounded-full h-7 w-7 flex items-center justify-center cursor-pointer'>
          <Image src="/announcement.png" alt='' width={20} height={20}/>
          <span className='absolute -right-3 -top-3 w-5 h-5 flex items-center justify-center bg-purple-500 rounded-full text-white text-xs'>1</span>
        </div>
        <div className='flex flex-col'>
          <span className='text-sm leading-3 font-medium '>Miracle Adams</span>
          <span className='text-[10px] text-gray-500 text-right'>Admin</span>
        </div>
        <Image src="/avatar.png" alt='' width={36} height={36} className='rounded-full'/>
      </div>
      
    </div>
  )
}

export default Navbar
