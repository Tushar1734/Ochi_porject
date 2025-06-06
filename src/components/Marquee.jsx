import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
    
  return (
    <div className='w-full py-10 rounded-t-3xl bg-[#004D43]'>
        <div className="border-t-2 border-b-2 border-zinc-300 flex items-center text justify-evenly gap-10  overflow-hidden whitespace-nowrap">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:Infinity ,duration:5 }} className='text-[10vw] leading-none font-bold uppercase  '>We are Ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:Infinity ,duration:5}} className='text-[10vw] leading-none font-bold uppercase  '>We are Ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:Infinity ,duration:5 }} className='text-[10vw] leading-none font-bold uppercase  '>We are Ochi</motion.h1>
            
        
        </div>
    </div>
  )
}

export default Marquee