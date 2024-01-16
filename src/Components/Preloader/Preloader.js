import React, { useEffect } from "react";
import "./Preloader.css"
import { IoRestaurant } from "react-icons/io5";
import { preLoaderAnim } from "../../Animations";


function PreLoader() {
    useEffect(()=>{
        preLoaderAnim()
    },[])
    return (
        <div className="preLoader">
            <div className="texts-container">
                <span>Let's </span>
                <span>Have some...    </span>
                <span> <IoRestaurant size={25} /> </span>
            </div>
        </div>
    )
}

export default PreLoader;