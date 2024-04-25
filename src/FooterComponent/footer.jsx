import React from "react";
import facebook from "../assets/facebook.png";
import x from "../assets/x.png";
import youtube from "../assets/youtube.png";
import insta from "../assets/insta.png";
import applestore from "../assets/applestore.png";
import playstore from "../assets/playstore.png";
const Footer = () => {
  const date=new Date();
  const year=date.getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto  ">
         <div className='grid grid-cols-4 gap-4'>
             <div className='flex justify-center items-center'>
                  <ul >
                    <li className='pb-2'><a href='#' className='font-bold text-xl'>88acres</a></li>
                    <li className='pb-2'><a href='#'>Mobile Apps</a></li>
                    <li className='pb-2'><a href='#'>Our Services</a></li>
                    <li className='pb-2'><a href='#'>Price Trends</a></li>
                    <li className='pb-2'><a href='#'>Post your Property</a></li>
                    <li className='pb-2'><a href='#'>Real Estate Investment</a></li>
                    <li className='pb-2'><a href='#'>Builders in India</a></li>
                    <li className='pb-2'><a href='#'>Ares converter</a></li>
                    <li className='pb-2'><a href='#'>Aricles</a></li>
                    <li className='pb-2'><a href='#'>Recent Receipt</a></li>
                    <li className='pb-2'><a href='#'>Customer Service</a></li>
                    <li className='pb-2'><a href='#'>Site Map</a></li>
                  </ul>
             </div>
             <div  className='flex justify-center items-center'>
                <ul>
                    <li className='pb-2'><a href='#' className='font-bold text-xl'>Company</a></li>
                    <li className='pb-2'><a href='#'>About us</a></li>
                    <li className='pb-2'><a href='#'>Contact us</a></li>
                    <li className='pb-2'><a href='#'>Careers with us</a></li>
                    <li className='pb-2'><a href='#'>Terms & conditions</a></li>
                    <li className='pb-2'><a href='#'>Request Info</a></li>
                    <li className='pb-2'><a href='#'>Feedback</a></li>
                    <li className='pb-2'><a href='#'>Report a Problem</a></li>
                    <li className='pb-2'><a href='#'>Testimonial</a></li>
                    <li className='pb-2'><a href='#'>Policy Privacy</a></li>
                    <li className='pb-2'><a href='#'>Summons/Notices</a></li>
                    <li className='pb-2'><a href='#'>Grievances</a></li>
                    <li className='pb-2'><a href='#'>Safty Guides</a></li>
                    </ul>
             </div>
             <div  className='p-2 pt-5'>
                <ul>
                    <li className='pb-2'><a href='#' className='font-bold text-xl'>Our Partners</a></li>
                    <li className='pb-2'><a href='#'>Naukri.com - Jobs in India</a></li>
                    <li className='pb-2'><a href='#'>Naukrigulf.com - Jobs in middle east</a></li>
                    <li className='pb-2'><a href='#'> Jeevansathi.com - Matrimonialss</a></li>
                    <li className='pb-2'><a href='#'>Brijj.com - Professional Networking</a></li>
                    <li className='pb-2'><a href='#'>Shiksha.com - Education Career Info</a></li>
                 </ul>
             </div>
             <div  className='p-2 pt-5'>
                 <ul>
                    <li className='pb-2'><a href='#' className='font-bold text-xl'>Contact Us</a></li>
                    <li className='pb-2'><a href='#'>Toll Free - 1520 14 90502</a></li>
                    <li className='pb-8'><a href='#'>Email - feedback@88acres.com</a></li>
                    <li className='font-bold text-xl p-2'>Contact with us</li>
                    <li className='pb-6'>
                        <ul className="flex">
                          <li className="p-2">
                            <a href="#">
                               <img className="rounded-full w-8" src={facebook} alt="no" />
                            </a>
                          </li>
                          <li className="p-2">
                            <a href="#">
                               <img  className="rounded-full w-8" src={youtube} alt="no" />
                            </a>
                          </li>
                          <li className="p-2">
                            <a href="#">
                               <img  className="rounded-full w-8" src={x} alt="no" />
                            </a>
                          </li>
                          <li className="p-2">
                            <a href="#">
                               <img className="rounded-full w-8" src={insta} alt="no" />
                            </a>
                          </li>
                          
                        </ul>
                      </li>
                      <li className='font-bold text-xl p-2'>Download the App</li>
                      <li className='pb-2'>
                        <ul className="flex">
                          <li className="p-2">
                            <a href="#">
                               <img className="w-25" src={playstore} alt="no" />
                            </a>
                          </li>
                          <li className="p-2">
                            <a href="#">
                               <img  className="w-25" src={applestore} alt="no" />
                            </a>
                          </li>          
                        </ul>
                      </li>
                      <li className="pt-2">
                        <p className="text-sm font-semibold">
                           All trademarks are the property of their<br></br> respective owners.<br></br>
                           All rights reserved - Info Edge (India) Ltd.
                          <br></br> A naukri.com group venture
                        </p>
                      </li>
                 </ul>

             </div>
         </div>
         <div className="container mx-auto text-center p-5">
            <p>&copy; {year} Your Company. All rights reserved.</p>
         </div>
      </div>
    </footer>
  );
};

export default Footer;
