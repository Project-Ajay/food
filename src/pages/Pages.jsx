 import Home from "./Home";
 import Cuisine from "./Cuisine";
 import React from 'react';
 import Searched from "./Searched";
 import {Route,Routes,BrowserRouter} from "react-router-dom";

 
 function Pages() {
   return (
    // need when using route
         <Routes>
        {/*render the home view*/}
        <Route path="/" element={<Home/>} />
        <Route path="/cuisine/:type" element={<Cuisine/>} />
        {/* <Route path="" */}
     </Routes>
   );
 }
 
 export default Pages
 