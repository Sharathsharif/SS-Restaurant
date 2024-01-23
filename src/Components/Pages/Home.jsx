import React from "react";
import { Menubtn } from "../Menubtn";
import './Home.css'
import Aboutimage from '../Image/Aboutimage.jpg'
import { Link } from "react-router-dom";
import { ImageGallery } from "../imageGallery";
import { Contactinfo } from "../Contactinformation";
import Timinginfodetails from '../Image/Timinginfo.jpg'
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
                            <h1 className="mb-5  fw-bold text-center text-sm-start text-black ">
                                S S Restaurant
                            </h1>
                            <Menubtn />
                        </div>
                    </div>
                </div>
            </header>

            <section className="container my-5 ">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-centre d-none d-lg-flex">
                        <img src={Aboutimage} alt="aboutimage" className="img-fluid w-60 h-100" />
                    </div>
                    <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center">
                        <h2 className="fs-1 mb-5  fw-bold text-uppercase">
                            About US
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Eius debitis
                            delectus quibusdam. Aut, laudantium quos quisquam hic ratione illum
                            itaque molestiae debitis, consequuntur provident aliquam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae facilis nobis voluptates et natus porro, iure repellat sit quam dicta?
                        </p>
                        <p className="mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, q
                            uis vero vel magnam quidem et sunt. Molestias consequuntur aspernatur nobis, neque sit dict
                            a tenetur delectus aliquid quas reiciendis modi alias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis beatae doloribus ducimus labore ea est, cum officia suscipit. Quod incidunt voluptate id aut a nihil.</p>
                        <Link to="/About">
                            <button className="btn btn-outline-success btn-lg mb-5">To Know More</button>
                        </Link>
                    </div>
                </div>

            </section>




            <div className="menu-section py-5  text-light shadow">
                <div className="container d-flex flex-column align-item centre">
                    <h2 className="fs-1 mb-5 text-uppercase fw-bold">Today's Deals</h2>


                    <div className='row mb-5 w-100'>
                        <div className='col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0'>
                            <h3 className='fs-2 mb-5'>Food</h3>
                            <ul className='px-0'>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>Mandi Biryani</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>at ₹200 only/-</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'> Fried Chicken</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>at ₹399 only/-</p>
                                </li>
                                <li className='d-flex justify-content-between'>
                                    <p className='fs-3 mx-2'>TamilNadu Breakfast</p>
                                    <p className='fs-3 mx-2 text-success fw-nold'>at ₹99 only/-</p>
                                </li>
                            </ul>
                        </div>





                        <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
                            <h3 className="fs-2 mb-5">
                                Drinks
                            </h3>
                            <ul className="px-0">
                                <li className="d-flex justify-content-center">
                                    <p className="fs-3 mx-2">
                                        Monster Shake
                                    </p>
                                    <p className="fs-3 mx-2 text-success fw-nold">
                                        at ₹200 only/-
                                    </p>
                                </li>

                                <li className="d-flex justify-content-center">
                                    <p className="fs-3 mx-2">
                                        Fresh Juice
                                    </p>
                                    <p className="fs-3 mx-2  text-success fw-nold">
                                        at ₹399 only/-
                                    </p>
                                </li>

                                <li className="d-flex justify-content-center">
                                    <p className="fs-3 mx-2">
                                        Unlimited Soda
                                    </p>
                                    <p className="fs-3 mx-2 text-success fw-nold">
                                        at ₹99 only/-
                                    </p>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <Menubtn />

                </div>
            </div>


            <ImageGallery />

            <div className="bg-dark text-light py-5 shadow">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column align-items-center mb-5 mb-lg-0">
                            <Contactinfo />

                        </div>
                        <div className="col-lg-5 d-flex justify-content-center">
                            <img src= {Timinginfodetails} className="img-fluid w-50 " alt="image" />

                        

                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}