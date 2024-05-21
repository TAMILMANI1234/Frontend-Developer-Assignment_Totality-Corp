import React from "react";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import account from "../assets/account.png";
import Resentpost from "../RecentpostComponent/resentpost";
import Fetchall from "../FetchallComponent/fetchall";
import Appartment from "../AppartmentComponent/appartment";
import Footer from "../FooterComponent/footer";
import Location from "../LocationwiseComponent/location";

const Home = ()=>{
    const [authenticated, setauthenticated] = useState(false);
    const loged_email=localStorage.getItem("loggedemail");
    const navigate = useNavigate();
    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) { 
             setauthenticated(loggedInUser);
        }
    }, []);

   const logout = () => {
        localStorage.removeItem("loggedusername");
        setauthenticated(false)
        localStorage.removeItem("authenticated");
        navigate("/");             
    };

    if(!authenticated){
         return(
            <div className="text-4xl flex justify-center mt-10 items-center font-bold   text-red-600">    
              <span className="text-7xl">&#128545;</span>  401 Unauthorized
            </div>
         )
    }
    else{
        return(
            <div>
                    <nav className="bg-gray-800 p-4 fixed w-full top-0 left-0 z-50">
                        <div className="max-w-8xl mx-auto px-4">
                            <div className="flex items-center justify-between">
                            <div className="flex items-center">
                            
                                <div className="flex-shrink-0 pl-2 text-2xl font-sans font-bold text-white mr-4 ">
                                  Rentify
                                </div>
                                
                            </div>
                            <div className="hidden md:block ">
                                <div className="flex items-center">

                                    <img src={account} width={35}  className="rounded-full flex flex-shrink-0" alt="no image" />
                                   <a href="#" className="capitalize text-white font-bold pl-2 hover:text-gray-300 mr-4">  
                                    {loged_email}
                                    </a>

                                    <button onClick={()=>{logout()}} className="text-white pr-2 hover:text-gray-300">
                                        Sign out
                                   </button>
 

                                  
                                </div>
                               
                                <div className="md:hidden">
                                    <button className="text-white focus:outline-none">
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                        ></path>
                                    </svg>
                                    </button>
                                </div>
                               
                            </div>
                            
                            
                            </div>
                        </div>
                 </nav>
              
                 
               <div className="mt-20">
                    <div className="grid grid-cols-6 gap-2">
                        <div class="col-start-1 col-end-5  "><Resentpost /></div>
                        <div class="col-end-7 col-span-2 shadow-2xl "><Appartment /></div>
                        <div class="col-start-1 col-span-12  "><Fetchall /></div>
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                         <div class="col-start-2 col-end-7"><Location /></div>
                    </div>
                   
                    <Footer />
               </div>
              
              
            </div>
      )
    }
}

export default Home;