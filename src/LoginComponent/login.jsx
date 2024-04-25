import React, { useState} from 'react';
import { useGetusersQuery } from "/src/usersapi/apiSlice.jsx";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setauthenticated] = useState(false);
  const navigate = useNavigate();
 
  const { data:users,isLoading,isSuccess,isError } = useGetusersQuery();
  let is_user_avalable=false;
  let userid ="";


  //Check the username na spassword from the database i.e Get from API
  const checking=()=>{
    users.map((user)=>{
        if(user.username===username && user.password===password){
            is_user_avalable=true
            userid=user.id;
        }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    checking();
    if (!username || !password) {
      alert('Please enter username and password');
      return;
    }
    
    if(is_user_avalable){
        setauthenticated(true)
        localStorage.setItem("authenticated", true);
        localStorage.setItem("loggedusername",username);
        localStorage.setItem("userid",userid)
        navigate("/home");
    } else {
        alert('Invalid username or password');
      }
       
  };

  return (
    <div>

{isLoading &&  <h3 className='text-3xl font-bold flex items-center justify-center p-4' >Loading.......<span className="text-5xl">&#128517;</span></h3>}
    {isError && <h3 className='text-3xl text-red-700 font-bold flex items-center justify-center p-4'>Somethings went wrong<span className="text-5xl">&#128556;</span></h3>}
    {isSuccess &&  
       <div>
            
            <div className='flex flex-col items-center justify-center min-h-screen'> 
              <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md p-5 dark:bg-gray-800 dark:border-gray-700">
                  <h1 className=' font-serif text-center text-4xl font-bold pb-6 dark:text-white'>88 acres</h1> 
                   
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900  dark:text-white">
                      Sign in to your account
                  </h1>

                  <form onSubmit={handleSubmit}  className='space-y-4 md:space-y-6 p-5' >
                  <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Username</label>
                    <input className='text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600  w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  '
                       id="username"
                       name='username'
                       type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
    }
    </div>
  )
};

export default Login;
/* 
 */