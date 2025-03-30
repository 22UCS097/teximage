import React, { useContext } from 'react'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';



export default function Header() {
   const {user,setShowLogin}=useContext(AppContext);
   const navigate=useNavigate();

   
  const onClickHandler=()=>{
      if(user){
        navigate("/result")
      }else{
        setShowLogin(true);   
      }

  }

  return (
    <motion.div className='flex flex-col justify-center 
      items-center text-center my-20' 
        initial={{opacity:0.2 , y:100}}
        transition={{duration:1}}
        whileInView={{opacity:1,y:0}}
         viewport={{once:true}}
          >
       <motion.div 
          initial={{opacity:0 , y:-20}}
          animate={{opacity:1,y:0}}
           transition={{delay:0.2,duration:0.8}}

           className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1
        rounded-full border border-neutral-500  ">
        <p>Best text to image generator</p>      
       </motion.div>

        <motion.h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] 
             mx-auto mt-10 text-center'
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{delay:0.4,duration:2}}
              >
            Turn text to <span className='text-blue-600'> image</span>, in seconds.
            </motion.h1>
            <motion.p className='text-center max-w-xl mx-auto mt-5'
                initial={{opacity:0 , y:20}}
                animate={{opacity:1,y:0}}
                transition={{delay:0.6,duration:2}}
                >
                Unleash your creativity with AL. Turn your 
                imagination into visual art in secoond - just type, and watch the magic happen
            </motion.p>
            <button onClick={onClickHandler} className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-4 rounded-full '>
                Generate Images
                <img className='h-6' src="https://media.istockphoto.com/vectors/photo-icon-on-black-background-black-flat-style-vector-illustration-vector-id1169954465?k=6&m=1169954465&s=170667a&w=0&h=X29kwgBSvAfpJ-lzf_Yg55EXz-UM4POjUwnv6sOBBYY=" alt="" />
            </button>
            
    </motion.div>
  )
}
