import Reac,{useState} from "react";
import {  useGetdataQuery } from "../usersapi/apiSlice";

import Toast from "../toast";

const Appartment=()=>{
    const { data:appartments,isLoading,isSuccess,isError } = useGetdataQuery();
  
    const [showToast, setShowToast] = useState(false)
    
 
        
     
    return(
     <div>
        {isLoading &&  <h3 className='text-3xl font-bold flex items-center justify-center p-4' >Loading.......<span className="text-5xl">&#128517;</span></h3>}
           {isError && <h3 className='text-3xl text-red-700 font-bold flex items-center justify-center p-4'>Somethings went wrong<span className="text-5xl">&#128556;</span></h3>}
           {isSuccess && 
           <div className="overflow-auto">
                <div className="w-full p-5 border-2">
                    <p className=" font-semibold text-2xl">Apartments, Villas and more</p>
                </div>
                <div className=" mx-auto py-8 overflow-x-hidden h-[450px]  p-3">
                    {appartments.filter((val)=>{
                        if(val.type==="apartment"){
                            return val
                        }
                    }).map((item)=>(
                        <div class="rounded  border-2 m-3 shadow-lg">
                            <img class="w-full" src={item.images} alt="Sunset in the mountains"/>
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">
                                    {item.ownername}
                                </div>
                                <p class="text-gray-700 text-base">
                                   {item.discription}   
                                 </p>
                                 <p>Location : {item.district},{item.state}</p>
                                 <div className="pt-2">
                                    <button 
                                     className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600" 
                                     >Add to Cart</button>
                                </div>
                            {showToast && <Toast message="Apartment Added in cart!" onClose={() => setShowToast(false)} />}
                                       
                            </div>
                        </div>
                    ))
                    }
                </div>
           </div>
           }

     </div>   
    )
}

export default Appartment;