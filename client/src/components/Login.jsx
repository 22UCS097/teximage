import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Login() {
   const [state,setState]=useState('Login');
   const {setShowLogin,backendUrl,setToken,setUser}=useContext(AppContext);
   const [name,setName]=useState('');
   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');

  const  onSubmitHandler=async (e)=>{
    e.preventDefault();
    try {
        if(state==='Login'){
          console.log("hello");
          const {data}= await axios.post(backendUrl +'/api/user/login',{
              email,
              password
           })
           console.log(data);

         if(data.success){
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem('token',data.token);
          setShowLogin(false);
         }else{
           toast.error(data.message);   
         }
        }else{
          const {data}= await axios.post(backendUrl+'/api/user/register',{
             name,
            email,
            password,

         })
       if(data.success){
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem('token',data.token);
        setShowLogin(false);
       }else{
         toast.error(data.message);   
       }

        }
     
    } catch (error) {
      toast.error(error.message);     
    }


   }


   useEffect(()=>{
           document.body.style.overflow='hidden';
           return  ()=>{
              document.body.style.overflow='unset'
           }
   },[])
     
  return (
    <div className='absolute top-0 left-0 right-0 
       bottom-0 z-10  backdrop-blur-sm bg-black/30 flex
        justify-center items-center'>
          <form onSubmit={onSubmitHandler} className=' p-10 relative bg-white rounded-xl text-slate-500' >
               <h1 className='text-center text-2xl text-neutral-700 font-medium'>{state}</h1>
               <p className='text-sm'>Welcome back! Please sign in to continue</p>

                { state!=='Login'  && 
                  <div className="border px-6 py-2 flex items-center gap-2
                        rounded-full mt-4"  >
                    <input onChange={e=>setName(e.target.value)}  value={name} className='outline-none text-sm' type="text" placeholder='Full Name' required />
                </div>
                }

                <div className="border px-6 py-2 flex items-center gap-2
                        rounded-full mt-4"  >
                    <input onChange={e=>setEmail(e.target.value)}  value={email}  className='outline-none text-sm' type="email" placeholder='Email id' required />
                </div>
                <div className="border px-6 py-2 flex items-center gap-2
                        rounded-full mt-4"  >
                    <input onChange={e=>setPassword(e.target.value)}  value={password} className='outline-none text-sm' type="password" placeholder='Password' required />
                </div>

                <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot password?</p>
                <button className='bg-blue-600 w-full text-white py-2 rounded-full '>{state==='Login' ? 'login' : 'create account' }</button>

                  { state === 'Login'?  <p className='mt-5 text-center'>Don't have an account? 
                    <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Sign Up')} >Sign up</span>
                    </p>
                    :
                  <p className='mt-5 text-center'>Already have an account? 
                    <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Login')} >Login</span>
                    </p>
                  } 

                    <img onClick={()=>setShowLogin(false)} src="https://cdn-icons-png.flaticon.com/512/2961/2961937.png" alt="" 
                         className=' h-4 absolute top-4 right-4 cursor-pointer'/>
        </form>  
    </div>
  )
}
