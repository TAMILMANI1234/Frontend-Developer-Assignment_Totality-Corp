import React from "react";
import { useState } from "react";
import {  useAdduserMutation } from "../usersapi/apiSlice";
import { useNavigate } from "react-router-dom";

const Signup =()=>{
    const [username, setUsername]=useState();
    const [password,setPassword]=useState();
    const [cpassword,setcPassword]=useState();
    const [adduser]=useAdduserMutation();
    const navigate=useNavigate();


    const handleSubmit = async(e) => {
        e.preventDefault();
        if (!username || !password || !cpassword) {
            alert('Please enter details');
            return;
          }
        
        else if(cpassword!=password){
            alert("Password and Confirm password should be equal")
        }
        else {
            const data={"username":username, "password":password}
            await adduser(data)
            navigate('/');
        }

    }
    return(
        <div>
             <section className='flex flex-col items-center justify-center min-h-screen'>
                 <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md p-5 dark:bg-gray-800 dark:border-gray-700">
                    <h1 className=' font-serif text-center text-4xl font-bold pb-6 dark:text-white'>88acres</h1> 
                   
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900  dark:text-white">
                      Sign up, your account
                  </h1>
                    <form onSubmit={handleSubmit} className='space-y-4 md:space-y-6 p-5'>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                        <input 
                         className='text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600  w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  '
                         type="name"
                         id="name"
                         value={username}
                         placeholder="Username"
                         onChange={(e)=>{setUsername(e.target.value)}}
                         />
                         
                         <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>  
                         <input 
                          className='text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600  w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  '
                           type="password"
                           id="password"
                           value={password}
                           placeholder="Password"
                           onChange={(e)=>{setPassword(e.target.value)}}
                         />

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>  
                         <input 
                          className='text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600  w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  '
                           type="password"
                           id="cpassword"
                           value={cpassword}
                           placeholder="Confirm password"
                           onChange={(e)=>{setcPassword(e.target.value)}}
                         />

                         <button className="w-full bg-blue-700 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-black dark:focus:ring-primary-800" 
                              type="submit">Sign up</button>
                         
                    </form>
                    <p className="text-sm text-center font-ligh dark:text-white">
                      Already have account <button onClick={()=>{navigate("/")}}  className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login</button>
                  </p>
                 </div>
             </section>
        </div>
    )
}

export default Signup;