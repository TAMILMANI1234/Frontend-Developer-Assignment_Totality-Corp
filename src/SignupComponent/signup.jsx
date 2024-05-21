import React from "react";
import { useState } from "react";
import {  useAdduserMutation } from "../usersapi/apiSlice";
import { useNavigate } from "react-router-dom";
import Toast from "../toast";

const Signup =()=>{
    const [Firstname, setFirstname]=useState();
    const [Lastname, setLastname]=useState();
    const [email, setemail]=useState();
    const [password,setPassword]=useState();
    const [cpassword,setcPassword]=useState();
    const [error,seterror]=useState("");
    const [phone,setphone]=useState("");
    const [adduser]=useAdduserMutation();
    const navigate=useNavigate();
    const [showToast, setShowToast] = useState(false)
  

    const handleSubmit = async(e) => {
        e.preventDefault();
       try{
        if (!Firstname ||!Lastname ||!email || !password || !cpassword || !phone) {
          alert('Please enter details');
          return;
        }
      
          else if(cpassword!=password){
           alert("Password and Confirm password should be equal")
          }
          else {
              const data={"firatname":Firstname,"lastname":Lastname, "email":email,"password":password,"phone":phone}
              await adduser(data).unwrap();
              seterror("Registration is success")
              setShowToast(true);
              setTimeout(() => {
                setShowToast(false);
              }, 2000); 
              navigate('/');
          }

       }
       catch(err){
          //console.error('Failed to login:', err.data.message);
          seterror(err.error)
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
          }, 2000); 
       }
    }
    return(
        <div>
             <section className='flex flex-col items-center justify-center min-h-screen'>
                 <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md p-5 dark:bg-gray-800 dark:border-gray-700">
                    <h1 className=' font-serif text-center text-4xl font-bold pb-6 dark:text-white'>Rentify</h1> 
                   
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900  dark:text-white">
                      Sign up, your account
                  </h1>
                    <form onSubmit={handleSubmit} className='space-y-4 md:space-y-6 p-5'>
                       <div class="grid grid-cols-2 gap-4">
                             <div class="...">
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Firstname</label>
                                    <input 
                                    className='text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600  w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  '
                                    type="firstname"
                                    id="firatname"
                                    value={Firstname}
                                    placeholder="Firstname"
                                    onChange={(e)=>{setFirstname(e.target.value)}}
                                    />
                                </div>
                             <div class="...">
                                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lastname</label>
                                    <input 
                                    className='text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600  w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  '
                                    type="name"
                                    id="name"
                                    value={Lastname}
                                    placeholder="Lastname"
                                    onChange={(e)=>{setLastname(e.target.value)}}
                                    />
                             </div>
                       </div>


                         <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input 
                            className='text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600  w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  '
                            type="email"
                            id="email"
                            value={email}
                            placeholder="email"
                            onChange={(e)=>{setemail(e.target.value)}}
                            />
                        <div class="grid grid-cols-2 ">
                           <div> <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                         </div>
                         <div>
                         <input 
                            className='text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600  w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  '
                            type="text"
                            id="email"
                            value={phone}
                            placeholder="Phone"
                            onChange={(e)=>{setphone(e.target.value)}}
                            />
                         </div>
                        </div>
                        
                         
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
             {showToast && <Toast message={error} onClose={() => setShowToast(false)} />}
        </div>
    )
}

export default Signup;