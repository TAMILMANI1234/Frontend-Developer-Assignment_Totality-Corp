import React from "react";
import { useState } from "react";
import { usePostdataMutation } from "../usersapi/apiSlice";
import Toast from "../toast";
const Sell =()=>{
    const loged_email=localStorage.getItem("loggedemail");
    const [email, setemail] = useState(loged_email);
    const [phone, setphone] = useState('');
    const [price, setprice] = useState('');
    const [district, setdistrict] = useState('');
    const [state, setstate] = useState('');
    const [imagelink, setimagelink] = useState('');
    const [discription, setdiscription] = useState('');
    const [selectedValue, setSelectedValue] = useState('')
    const [owner, setowner] = useState('');
    const [sentdata]=usePostdataMutation()
    const [error, seterror] = useState('');
    const [showToast, setShowToast] = useState(false)
    const date = new Date();
    let currentdate=date.getDate();
    let current_month=date.getMonth()+1;
    let current_year=date.getFullYear();
    let fulldate=currentdate+"."+current_month+"."+current_year;
    
    const handleSubmit =async (e) =>{
        e.preventDefault();
        try{
           
               const data={
               "images":  imagelink , 
               "price": price,
               "ownername": owner,
               "type": selectedValue,
               "discription": discription,
               "district": district,
               "state": state,
               "date": fulldate,
               "email":email
               }
               await sentdata(data).unwrap()
               console.log(data) 
             
        }
        catch(e){
            seterror(err.error)
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2000); 
        }
    }
    return(
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-98 p-6 m-auto bg-white rounded-md shadow-xl   lg:max-w-mg">
            <h1 className="text-3xl font-semibold text-center text-indigo-700  uppercase ">
                Enter Details
            </h1>
            <form className="mt-6" onSubmit={handleSubmit} >
                <div class="grid grid-cols-2 gap-4">
                    <div className="mb-2">
                        <label  className="block text-sm font-semibold text-gray-800" >
                        Seller Email
                        </label>
                        <input  
                          value={email} 
                          onChange={(e) => setemail(e.target.value)}
                          type="email" 
                           className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    <div className="mb-2">
                        <label  for="email"  className="block text-sm font-semibold text-gray-800"  >
                        Name
                        </label>
                        <input
                         value={owner}
                         onChange={(e) => setowner(e.target.value)}
                            type="text"
                            className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                     </div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                    <div className="mb-2">
                        <label  className="block text-sm font-semibold text-gray-800" >
                          Phone Number
                        </label>
                        <input  
                          value={phone}
                          onChange={(e) => setphone(e.target.value)}
                        type="text"  className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    <div className="mb-2">
                        <label  for="email"  className="block text-sm font-semibold text-gray-800"  >
                            Category
                        </label>
                        <div className="relative inline-block ">
                            <select  
                                value={selectedValue}
                                onChange={(e)=>{ setSelectedValue(e.target.value);}}
                                className="   block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40" value="">Choose Catogery</option>
                                <option className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"value="Land">Land</option>
                                <option  className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40" value="House">House</option>
                                <option  className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40" value="Appartment">Appartment</option>
                            </select>
                        </div>
                      </div>
                </div>

                <div class="grid grid-cols-3 gap-4">
                    <div>
                        <label>Price</label>
                        <input  
                         value={price}
                         onChange={(e) => setprice(e.target.value)}
                         type="text"  className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div>
                        <label>District</label>
                        <input   
                          value={district}
                          onChange={(e) => setdistrict(e.target.value)}type="text"  className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div>
                        <label>State</label>
                        <input  
                          value={state}
                          onChange={(e) => setstate(e.target.value)} type="text"  className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                </div>
                
                
                <div className="mb-2">
                    <label  className="block text-sm font-semibold text-gray-800" >
                       Image Link
                    </label>
                    <input  type="text"
                      value={imagelink}
                      onChange={(e) => setimagelink(e.target.value)}
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                        <label>
                        <span class="block text-sm font-semibold text-gray-800">Discription</span>
                        <textarea
                          value={discription}
                          onChange={(e) => setdiscription(e.target.value)}
                            name="message"
                            className="block w-full mt-2 px-16 py-8 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200   focus:ring-opacity-50 "
                            rows="5"
                        ></textarea>
                        </label>
                    </div>
                <div className="mt-6">
                    <button   type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                         Post
                    </button>
                </div>
            </form>

            
        </div>
        {showToast && <Toast message={error} onClose={() => setShowToast(false)} />}
    </div>
    )
}

export default Sell;