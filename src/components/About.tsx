'use client'
import React from 'react'
import TickerTape from './ui/TickerTape'


const About=() => {
  return (
    <div className='z-10 py-10 relative md:h-[140vh] lg:h-[95vh]' id="about">
        <h1 className='heading' id='title'>About Me</h1> 
        <div className='flex items-center
        justify-center gap-16 p-4 mt-10 flex-col lg:flex-row'>
          <div>
            <img src="./Krishn2.jpg" className='w-[35vw] rounded-2xl'  />
          </div>
            <div className=' p-10 rounded-3xl text-lg'>
           Hey There! I'm Krishna Sai Charith, a passionate developer based in Hyderabad, Telangana.
           <br />
           <br />
           I'm an aspiring full-stack developer dedicated to expanding my tech skills. Passionate about technology, I embrace challenges and am constantly learning and growing.
            <br />
            <br />
            I'm actively seeking for internship opportunities where I can leverage my skills to provide value to dynamic companies. Let's connect and create impactful solutions together!
           </div>
        </div>
        <h1 className='text-center mt-10 md:text-lg lg:text-xl md:tracking-wider'>My Tech Stack</h1>
        <TickerTape/>
    </div>
  )
}

export default About