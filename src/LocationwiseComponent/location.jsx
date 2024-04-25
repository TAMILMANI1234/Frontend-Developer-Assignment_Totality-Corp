import React,{useState} from "react";
import { useGetdataQuery } from "../usersapi/apiSlice";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useAddToCartMutation } from "../usersapi/apiSlice";
import Toast from "../toast";
import "./location.css";

const Location=()=>{
    const { data:details,isLoading,isSuccess,isError } = useGetdataQuery();
    const [addToCart] = useAddToCartMutation();
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
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
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
        <div className="p-4">
            <div className="pl-6 pb-4 border-b-2">
                <p className="text-3xl font-bold tracking-wider text-gray-800">Localities you may like, Tamilnadu </p>
            </div>
            {isLoading &&  <h3 className='text-3xl font-bold flex items-center justify-center p-4' >Loading.......<span className="text-5xl">&#128517;</span></h3>}
           {isError && <h3 className='text-3xl text-red-700 font-bold flex items-center justify-center p-4'>Somethings went wrong<span className="text-5xl">&#128556;</span></h3>}
           {isSuccess && 
             <div>
                <Slider {...settings}>
                    {
                        details.filter((val)=>{
                            if(val.state==="tamilnadu" ){
                                return val
                            }
                        }).map((item)=>(
                            <div>
                                <div class="block md:h-[220px] max-w-sm h-auto p-6 m-2 text-black bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
                                    <h5 class="mb-2 font-bold text-xl tracking-tight text-gray-900 text-center  ">{item.type} in {item.district}</h5>
                                    <p class="font-normal text-gray-700 overflow-auto dark:text-gray-400">{item.discription}</p>
                                     
                                     <div className="grid grid-cols-2 p-3">
                                          <div><p>Rs.{item.price}</p></div>
                                          <div className="">
                                                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600" 
                                                onClick={()=>handleAddToCart(item)}>Add to Cart</button>
                                            </div>
                                     </div>
                                  </div>
                            </div>
                        ))
                    }
                 </Slider>
                 {showToast && <Toast message="Added in cart!" onClose={() => setShowToast(false)} />}
             </div>
           }
             
                                        

        </div>
    )
}
export default Location;