import React from 'react'

export default function GenerateBtn() {
  return (
    <div className='pb-16 text-center'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl 
          mt-4 font-semibold text-neutral-800 py-6'>
            See the magic. Try now
            </h1>

         <button className='inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white
               m-auto hover:scale-105 transition-all duration-500'>
                Generate Images
                <img className='h-6' src="https://media.istockphoto.com/vectors/photo-icon-on-black-background-black-flat-style-vector-illustration-vector-id1169954465?k=6&m=1169954465&s=170667a&w=0&h=X29kwgBSvAfpJ-lzf_Yg55EXz-UM4POjUwnv6sOBBYY=" alt="" />
            </button>
    </div>
  )
}
