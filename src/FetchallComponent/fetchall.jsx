import React, { useState,useEffect } from "react";
import { useGetdataQuery } from "../usersapi/apiSlice";
import { useAddToCartMutation } from "../usersapi/apiSlice";
import location from "../assets/location.webp";
import Toast from "../toast";
import searchimg from "../assets/search.jpg";
 
const Fetchall=()=>{
    const { data:details,isLoading,isSuccess,isError } = useGetdataQuery();
    const [addToCart] = useAddToCartMutation();
    const [search,setsearch]=useState('');
    const [searchbycheck,setsearchbycheck]=useState('');
    const loged_userid=localStorage.getItem("userid");
    const [showToast, setShowToast] = useState(false)
    
    const handleAddToCart = async(product) => {
       await addToCart(
        { 
            "userid":loged_userid,
            "productid":product.id,
            "product_images":product.images,
            "product_price":product.price,
            "product_owner":product.ownername,
            "product_type":product.type,
            "product_distict":product.district,
            "product_state":product.state
        }
        );
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 2000); 
      };

      const handlechecked=(e)=>{
        if (e.target.checked) {
            setsearchbycheck([...searchbycheck, e.target.value]);
        } else {
            setsearchbycheck(searchbycheck.filter((item) => item !== e.target.value));
        }
     }
     

    return(
       <div>
           {isLoading &&  <h3 className='text-3xl font-bold flex items-center justify-center p-4' >Loading.......<span className="text-5xl">&#128517;</span></h3>}
           {isError && <h3 className='text-3xl text-red-700 font-bold flex items-center justify-center p-4'>Somethings went wrong<span className="text-5xl">&#128556;</span></h3>}
           {isSuccess &&  
              <div className="p-3">
                  <div className="pl-10">
                     <p className="text-3xl font-bold tracking-wider">Recommended Properties</p>
                     <p className="font-semibold">Curated especially for you</p>
                  </div>
                 <div className="grid grid-cols-7 gap-2 m-5">
                      <div class="col-start-1 col-span-2 border-2">
                          <div className="w-full flex justify-center items-center border border-black-2  p-3">
                               
                                <input type="text"
                                    value={search}
                                    onChange={(e)=>{setsearch(e.target.value)}} 
                                    id="helper-text" 
                                    aria-describedby="helper-text-explanation"
                                    className="bg-gray-100 border
                                    text-gray-900 
                                    border-none
                                    rounded-tl-lg rounded-bl-lg focus:ring-blue-500
                                    focus:border-blue-500 block w-full p-2.5 "
                                    placeholder="Land or house or appartment">
                                </input>
                                     <div>
                                       <img className="w-12 rounded-tr-lg rounded-br-lg" src={searchimg} alt="no" />
                                     </div>

                            </div>
                            <div className="flex justify-center items-center p-5">
                                <ul className="list-none">
                                    <li>
                                        <input 
                                         className="w-4 h-4 text-blue-600
                                         bg-gray-100 border-gray-300 
                                         rounded "
                                         value ="land"
                                         name="land"
                                         type = "checkbox" 
                                         onChange={handlechecked}   />
                                        <label className="pl-2">Land</label>
                                    </li>
                                    <li>
                                        <input  
                                        className="w-4 h-4 text-blue-600
                                        bg-gray-100 border-gray-300 rounded"
                                        value = "house"
                                        type = "checkbox"   
                                        onChange={handlechecked}/>
                                        <label className="pl-2">House</label>
                                    </li>
                                    <li>
                                        <input  
                                         className="w-4 h-4 text-blue-600
                                          bg-gray-100 border-gray-300 rounded " 
                                          value = "appartment"
                                          name="land"
                                          type = "checkbox"  
                                          onChange={handlechecked} />
                                        <label className="pl-2">Appartment</label>
                                    </li>
                                 
                                </ul>
                            </div>
                      </div>
                      <div class="col-start-3 col-span-7  h-[500px] overflow-auto">
                         {
                             details.filter((val)=>{
                                if(search==''){
                                    return val;
                                }
                                else if(val.type.toLowerCase().includes(search.toLowerCase())){
                                    console.log(searchbycheck)
                                    return val
                                }
                                for(let i=0;i<searchbycheck.length;i++){
                                    
                                }
                                 
                             }).map((item)=>{
                                return(
                               <div key={item.id}>
                                    <div className="bg-white shadow-md m-5 p-3 flex">
                                        <div className="w-1/2 pr-4">
                                            <img src={item.images} alt="no" className="w-full h-auto object-cover mb-4" />
                                        </div>
                                        <div className="w-1/2 p-5 border-2">
                                            <h2 className="text-lg font-semibold mb-2 capitalize">{item.ownername}</h2>
                                             <span className="capitalize">{item.type}</span>
                                            <p className="text-gray-600 pt-5">{item.discription}</p>
                                            <div className="mt-4">
                                                <span className="text-gray-900 font-semibold text-2xl">Rs.{item.price}</span>
                                            </div>
                                             <div className="p-4 flex">
                                                <div className="pr-2">
                                                    <img src={location} className="w-8 rounded" alt="" />
                                                </div>
                                                <div className=" ">
                                                     <p className="text-gray-600 text-xl capitalize">{item.district},{item.state}</p>
                                                     
                                                </div>
                                             </div>
                                            <div className="">
                                                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600" onClick={()=>handleAddToCart(item)}>Add to Cart</button>
                                            </div>
                                            {showToast && <Toast message="Added in cart!" onClose={() => setShowToast(false)} />}
                                        </div>
                                    </div>
                               </div>
                              ) })
                         }

                      </div>
                       
                 </div>
              </div>
            }

       </div>
    )
}
export default Fetchall; 
 
  