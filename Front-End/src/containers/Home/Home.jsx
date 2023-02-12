import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../../components/Carrousel";
import H from "../Home/Home.module.css";
import Join from "../../components/Join/Join";
import Articles from "../Articles/Articles";
import Newsletter from "../../components/Newsletter/Newsletter";


export default function Home() {
  
  const dispatch = useDispatch();
   
  return (
        <div className={H.gridContainer}>
           
            <Carousel className={H.carousel} />
          <main className={H.main}>

           <Articles />
         
          </main>
          <div>
            <Newsletter/>
          </div>
          <div>
            <Join />
          </div>
        
        </div>
  );
}
