import React,{useState} from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useGetdataQuery,useAddToCartMutation } from "../usersapi/apiSlice";
import addcart from "../assets/addcart.png";
import Toast from "../toast";

const Resentpost =()=>{
    const { data:details,isLoading,isSuccess,isError } = useGetdataQuery();
    const [addToCart] = useAddToCartMutation();
    const date = new Date();
    let currentdate=date.getDate();
    let current_month=date.getMonth()+1;
    const [showToast, setShowToast] = useState(false)
  

    const handleAddToCart = async(product) => {
        await addToCart(
         { 
             "userid":localStorage.getItem("userid"),
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
     
    const settings={
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    return(
        <div className=" p-4">
             <div className="p-5 ">
                <h3 className="text-3xl font-sans font-bold tracking-wider pb-2">Recently posted properties</h3>
                <p>Fresh properties, be quick before they rent out</p>
             </div>

              <div >
              {isLoading &&  <h3 className='text-3xl font-bold flex items-center justify-center p-4' >Loading.......<span className="text-5xl">&#128517;</span></h3>}
              {isError && <h3 className='text-3xl text-red-700 font-bold flex items-center justify-center p-4'>Somethings went wrong<span className="text-5xl">&#128556;</span></h3>}
              {isSuccess &&  
                <div>
                    
                <Slider {...settings}>
                     
                     {
                        details.filter((val)=>{
                            if(
                                ((currentdate-5) <= parseInt(val.date.charAt(0)+val.date.charAt(1)) <=currentdate )&& 
                                 (parseInt(val.date.charAt(3)+val.date.charAt(4))===current_month)
                               ){
                                    return val
                               }
                        }).map((resentpost)=>(
                            <div class="max-w-sm  bg-white p-3 h-[400px]  rounded-xl">
                                <div className=" flex justify-center items-center">
                                    <img class="rounded-t-lg w-100" src={resentpost.images} alt="" />
                                    </div>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="mb-2 text-xl text-center font-bold tracking-tight text-black">Rs.{resentpost.price}</h5>
                                    </a>
                                    
                                    <p class="font-normal text-black ">{resentpost.ownername}</p>
                                    <p class="font-normal text-black  ">
                                        <div className="grid grid-cols-2 gap-2 p-3">
                                            <div>{resentpost.type}</div>
                                            <div className="text-xs">Posted on {resentpost.date}</div>
                                        </div>
                                        </p>
                                        <p>Location:<span className="text-xs">{resentpost.district},{resentpost.state}</span></p>
                                        <div className="grid grid-cols-2 gap-2 p-3">
                                            <div>
                                                  
                                             </div>
                                            <div>
                                               <button onClick={()=>handleAddToCart(resentpost)} className="bg-indigo-500 text-white text-sm font-bold rounded-xl text-center">
                                                  <img src={addcart} className="w-12" alt="" />
                                               </button>
                                            </div>
                                           
                                        </div>
                                </div>
                            </div>

                     
                        ))
                        }
                    </Slider>

                </div>
              }
                
             </div>
             {showToast && <Toast message="Added in cart!" onClose={() => setShowToast(false)} />}
        </div>
         
    )
}

export default Resentpost;
