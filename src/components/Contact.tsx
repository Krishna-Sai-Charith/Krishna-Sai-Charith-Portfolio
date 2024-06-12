"use client"

import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Contact = () => {
  return (
    <footer className='w-full pb-10' id='contact'>
       <div className='w-full absolute left-0 -bottom-10 min-h-96'>
        <img src="/footer-grid.svg" alt="" className='w-full h-[80vh] md:h-[80vh] opacity-65' />
       </div>
       <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
         Ready to make <span className='text-blue-600'>your </span> next idea a reality? Drop me a line!
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me and let's discuss how I can help.</p>
        <a href="mailto:hustlereternal@gmail.com">
      <MagicButton
      title="Get in touch"
      icon={<FaLocationArrow/>}
      position='right'
      />
     </a>
     </div>
     <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
       <p className='md:text-base text-sm md:font-normal font-light sm:mb-4 mb-4'>Copyright © 2024 Krishna</p>
       <div className='flex items-center md:gap-3 gap-6'>
         {socialMedia.map((profile)=>(
          <div key={profile.id} onClick={() => window.open(profile.link)} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg backdrop-filter saturate-180 bg-opacity-75 bg-black-200 rounded-lg border boredr-black-300'>
           <img src={profile.img} width={20} height={20} />
          </div>
         ))}
       </div>
     </div>
    </footer>
  )
}

export default Contact