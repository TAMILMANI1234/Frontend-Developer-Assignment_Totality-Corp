    import React,{ useEffect, useState } from "react"; 
    import { useGetcartQuery,useRemoveitemfromcartMutation } from "../usersapi/apiSlice";

    const Cart=()=>{
        const { data:cart,isLoading,isSuccess,isError ,refetch} = useGetcartQuery();
        const [removefromcart]=useRemoveitemfromcartMutation();
        const userid=localStorage.getItem("userid");
        let total=0;
        let total_bookings=0;
        

        useEffect(() => {
            const performTaskBeforeLoad = () => {
            refetch();
            };
            performTaskBeforeLoad();
            return () => {
            // Cleanup code here, if necessary
            };
        }, []);
        return(
            <div>
            {isLoading &&  <h3 className='text-3xl font-bold flex items-center justify-center p-4' >Loading.......<span className="text-5xl">&#128517;</span></h3>}
            {isError && <h3 className='text-3xl text-red-700 font-bold flex items-center justify-center p-4'>Somethings went wrong<span className="text-5xl">&#128556;</span></h3>}
            {isSuccess && 
                <div>
                    <div className="grid grid-cols-3 gap-4 m-3 border-2 rounded-lg">
                        <div className="col-span-2  ">
                                <div class="grid grid-cols-6 gap-4 p-8 border-b-2">
                                    <div class="col-start-1 col-end-5">
                                        <h2 className=" text-4xl font-semibold">Booking Cart</h2>
                                    </div>
                                     
                                </div>

                                <div class="relative overflow-x-auto p-2 h-[520px]">
                                    <table class="w-full text-sm text-left rtl:text-right text-black ">
                                        <thead class="text-xs uppercase bg-gray-100  ">
                                            <tr>
                                                <th scope="col" class="px-6 py-3 rounded-s-lg">
                                                    Product Details
                                                </th>
                                                
                                                <th scope="col" class="px-6 py-3 rounded-e-lg">
                                                    Price
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="overflow-auto">
                                            {cart.filter((val)=>{
                                                 if(val.userid===userid){
                                                    return val
                                                }
                                            }).map((item)=>(
                                                
                                                    <tr className="bg-white border-b-2">
                                                        <input type="hidden" value={total_bookings=total_bookings+1}></input>
                                                        <input type="hidden" value={total=total+parseInt(item.product_price)}/>
                                                <th scope="row" className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                                                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={item.product_images} alt="" />
                                                                <div className="flex flex-col justify-between p-4 leading-normal">
                                                                    <h5 className="mb-2 text-2xl font-bold tracking-tight uppercase text-gray-900 dark:text-white">{item.product_type}</h5>
                                                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">2BHA</p>
                                                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-bold ">Owned by</span>:{item.product_owner}, <span className="font-bold">Location </span>:{item.product_distict},{item.product_state}</p>
                                                                    
                                                                </div>
                                                            </div>
                                                            <div className="p-2">
                                                            <button className="bg-red-500 p-3  rounded" onClick={() =>removefromcart(item.id)}>Remove</button>
                                                            </div>
                                                        </th>
                                                        
                                                        <td class="px-6 py-4 text-2xl">
                                                                {item.product_price}
                                                        </td>
                                                    </tr> 
                                          
                                            ))} 
                                        
                                        
                                        </tbody>
                                       
                                    </table>
                                    
                                </div>
                                <p className="text-center font-bold text-3xl">Total : Rs.{total}</p>
                                                             
                        </div>
                        <div className="p-5 border-2 m-3 rounded-lg overflow-auto h-[600px]">
                              <div className="p-5 border-b-2">
                                 <p className="text-3xl font-bold">Order Summary</p>
                              </div>
                              <div class="grid grid-cols-2 gap-4 p-3">
                                     <div class="...">{total_bookings} Booking</div>
                                     <div class="...">Rs.{total}</div>
                                  </div>
                                <div class="grid grid-cols-2 gap-4 p-3">
                                     <div class="..."> Platform Fee</div>
                                     <div class="...">Rs.10</div>
                                </div>
                               <div className="p-3 border-b-2">
                                     <label className="block mb-2 text-sm font-medium text-gray-900  ">Apply Promo code</label>
                                     <input type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="XXX XXX XXX XXXX" required />
                                     <div className="p-5">
                                        <button class=" w-full bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                            Apply code
                                        </button>
                                     </div>
                               </div>
                               <div>
                                <div class="grid grid-cols-2 gap-4 p-3 ">
                                        <div class="...">{total_bookings} Booking</div>
                                        <div class="...">{
                                            (total!==0)?<p>Rs.{total+10}</p>:<p>Rs.0</p>
                                        }</div>
                                    </div>
                                    <div className="p-5 border-b-2">
                                        <button class=" w-full bg-black text-white font-bold py-2 px-4 border border-blue-700 rounded">
                                           Checkout
                                        </button>
                                     </div>
                               </div>
                        </div>
                    </div>
                </div>
                }

            </div>
        )
    }
    export default Cart;
    