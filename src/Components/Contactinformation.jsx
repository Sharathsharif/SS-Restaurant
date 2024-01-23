import React from "react";
import './Pages/Home.css'
export function Contactinfo(){
    return(

        <div className="d-flex flex-column align-item-centre">

            <h2 className="d-flex flex-column align-items-center">
                Our Shop Location
            </h2>

            <p className="mb-5 d-flex" >
                15-12F , Northstreet,Marthandam, Kaniyakumari
            </p>

            <h3 className=" m-5">
                Opening Hours:
            </h3>
            <p className="contactpara ">
                     Mon - fri : 9.30am to 9.30pm 
            </p>
            <p className="contactpara ">
                Sat & Sun: 9.30am to 10.30pm
            </p>
        </div>

    )
}