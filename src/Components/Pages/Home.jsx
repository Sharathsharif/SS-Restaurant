import React from "react";
import { Menubtn } from "../Menubtn";
import './Home.css'
import Aboutimage from '../Image/Aboutimage.jpg'
import { Link } from "react-router-dom";
export default function Home() {
    return (

        <div className="home-page">

            <header className="h-100 min-vh-100 d-flex 
           align-items-center text-light shadow">
                <div className="container">
                    <div className="row">
                        <div className="'col-sm-6 d-flex d-sm-block flex-column align-items-centre">
                            <h2 className='mb-0 text-danger fw-bold'>
                                Welcome to
                            </h2>
                            <h1 className="mb-5  fw-bold text-center text-sm-start text-black">
                                S S Restaurant
                            </h1>
                            <Menubtn />
                        </div>
                    </div>
                </div>
            </header>

            <section className="container my-5">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-centre d-none d-lg-flex">
                        <img src={Aboutimage} alt="aboutimage" className="img-fluid w-60" />
                    </div>
                    <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
                        <h2 className="fs-1 mb-5  fw-bold text-uppercase">
                            About US
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Eius debitis
                            delectus quibusdam. Aut, laudantium quos quisquam hic ratione illum 
                            itaque molestiae debitis, consequuntur provident aliquam.
                        </p>
                        <p className="mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, q
                            uis vero vel magnam quidem et sunt. Molestias consequuntur aspernatur nobis, neque sit dict
                            a tenetur delectus aliquid quas reiciendis modi alias?</p>
                            <Link to="/About">
                            <button className="btn btn-outline-success btn-lg mb-5">To Know More</button>
                            </Link>
                    </div>
                </div>

            </section>




        </div>

    )
}