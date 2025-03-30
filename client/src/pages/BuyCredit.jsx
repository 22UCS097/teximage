import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import {motion} from 'framer-motion'


export default function BuyCredit() {
   
  const {user} =useContext(AppContext);

  return (
    <div className='min-h-[80vh] text-center
        pt-14 mb-10'>
       <button className='border border-gray-400 px-10 py-2
          rounded-full mb-6'>
        Our Plans
       </button>
       <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10 '>choose the plan</h1>

         <div className="flex flex-wrap justify-center gap-6 text-left">
               <div className="bg-white drop-shadow-sm border rounded-lg py-7
                  px-8 text-gray-600 hover:scale-105 transition-all duration-500">
                  <p className='mt-3 mb-1 font-semibold'>Basic</p>
                  <p className="text-sm">Best for persional use</p>
                  <p> $10/100 credits</p>
                   <button className='w-full bg-gray-800 text-white mt-8
                     text-sm rounded-md py-2.5 min-w-52'>Get Started</button>

               </div>

               <div className="bg-white drop-shadow-sm border rounded-lg py-7
                  px-8 text-gray-600 hover:scale-105 transition-all duration-500">
                 <p className='mt-3 mb-1 font-semibold'>Advance</p>
                  <p className="text-sm">Best for business use</p>
                  <p>$50/500 credits</p>
                  <button className='w-full bg-gray-800 text-white mt-8
                     text-sm rounded-md py-2.5 min-w-52'>Get Started</button>
                   
               </div>

               <div className="bg-white drop-shadow-sm border rounded-lg py-7
                  px-8 text-gray-600 hover:scale-105 transition-all duration-500">
                 <p className='mt-3 mb-1 font-semibold'>Business</p>
                  <p className="text-sm">Best for enterprise use</p>
                  <p> $250/5000 credits</p>
                  <button className='w-full bg-gray-800 text-white mt-8
                     text-sm rounded-md py-2.5 min-w-52'>{user ? 'Purchase':'Get Started'}</button>

               </div>
         </div>
    </div>
  )
}
