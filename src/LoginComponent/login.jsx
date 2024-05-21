import React, { useState} from 'react';
import { useGetloginMutation} from "/src/usersapi/apiSlice.jsx";
import { useNavigate } from "react-router-dom";
import Toast from "../toast";

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [error, seterror] = useState('');
  const [authenticated, setauthenticated] = useState(false);
  const navigate = useNavigate();
  const [sentdata]=useGetloginMutation()
 
  const [showToast, setShowToast] = useState(false)
  
 

  const handleSubmit =async (e) =>{
    e.preventDefault();
    try{
      if (!email || !password) {
       // alert('Please enter username and password');
        seterror("Please enter username and password")
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 2000); 
        return;
      }
      const data={"email":email,"password":password}
      await sentdata(data).unwrap()
      setauthenticated(true)
      localStorage.setItem("authenticated", true);
      localStorage.setItem("loggedemail",email);
      navigate("/home");
    }
    catch(err){
      //console.log(err.error)
      seterror(err.error)
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2000); 
    }
   
   /* if(is_user_avalable){
        setauthenticated(true)
        localStorage.setItem("authenticated", true);
        localStorage.setItem("loggedusername",username);
        localStorage.setItem("userid",userid)
        navigate("/home");
    } else {
        alert('Invalid username or password');
      }*/
       
  };

  return (
    <div>
 
       <div>
            
            <div className='flex flex-col items-center justify-center min-h-screen'> 
              <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md p-5 dark:bg-gray-800 dark:border-gray-700">
                  <h1 className=' font-serif text-center text-4xl font-bold pb-6 dark:text-white'>Rentify</h1> 
                   
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900  dark:text-white">
                      Sign in to your account
                  </h1>

                  <form onSubmit={handleSubmit}  className='space-y-4 md:space-y-6 p-5' >
                  <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Username</label>
                    <input className='text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600  w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  '
                       id="username"
                       name='email'
                       type="email"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                    />

                    <label for="Password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Password</label>
                    <input className='text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600  w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  '
                       name='password'
                       id="password"
                       type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="w-full bg-blue-700 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-black dark:focus:ring-primary-800" 
                       type="submit">Login</button>
                   </form>
                    
                   <p className="text-sm text-center font-light  dark:text-white">
                      Don’t have an account yet? <button onClick={()=>{navigate("/signup")}}  className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</button>
                  </p>

              
               </div>
            </div>
       </div>
       {showToast && <Toast message={error} onClose={() => setShowToast(false)} />}
    </div>
  )
};

export default Login;
/* 
 */