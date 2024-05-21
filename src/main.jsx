import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './usersapi/Store.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './HomeComponent/home.jsx';
import Signup from './SignupComponent/signup.jsx';
import Sell from "./SellproperityComponent/sell";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
     <Provider store={store}>
         <BrowserRouter>
           <Routes>
             <Route path="/" index element={<App />}></Route>
             <Route path="home" element={<Home />} />
             <Route path="signup" element={<Signup />} />
            
             <Route path="sell" element={<Sell />} />

           </Routes>
         </BrowserRouter>
     </Provider>
  </React.StrictMode>,  
)
