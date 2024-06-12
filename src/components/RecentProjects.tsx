import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className='h-[260vh] sm:h-[270vh] md:h-[250vh] lg:h-[240vh] xl:h-[180vh] sm:mt-20' id="projects">
     <h1 className='heading mb-20'>A small selection of {' '}
     <span className='text-blue-600 '>recent projects</span>
     </h1>
     <div className='flex flex-wrap items-center justify-center sm:gap-y-12 lg:gap-x-24 lg:gap-y-8 md:gap-y-4 p-4 mt-10 gap-48'>
        {projects.map(({id,
          title,
          des,
          img,
          link,
          iconLists,
          up,
          otherClasses
        }) => (
          <div key={id} className='lg:min-h-[32.5rem] sm:h-[41rem] h-32rem flex item-center justify-center sm:w-[570px] w-[80vw]'>
            <PinContainer title={up} href={link}>
              <a className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] mb-10 sm:h-[40vh]' href={link}>
                <div className='w-full relative h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                  <img src='/bg.png' alt='bg-img' />
                </div>
                <img src={img} alt={title} className={`z-10 absolute bottom-0 ${otherClasses}` } />
              </a>
              <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{title}</h1>
              <p className='lg:font-normal font-light text-sm line-clamp-2'>{des}</p>
              <div className='flex items-center justify-between mt-7 mb-3'>
                <div className='flex items-center'>
                  {iconLists.map((icon,index)=>(
                    <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center' style={{transform:`translateX(-${5*index*2}px)`}}>
                      <img src={icon} className='p-2' />
                    </div>
                  ))}
                </div>
                <div className='flex justify-center items-center gap-3'>
                  <a className='flex lg:text-xl md:text-xs text-sm' href={link}>Check Live site</a>
                  <FaLocationArrow />
                  
                </div>
              </div>
            </PinContainer>
          </div>
        ))}   
     </div>
    </div>
  )
}

export default RecentProjects
