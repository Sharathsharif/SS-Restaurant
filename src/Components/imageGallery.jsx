import React from "react";
import Gallery1 from './Image/gallery1.jpg';
import Gallery2 from './Image/gallery2.jpg';
import Gallery3 from './Image/gallery3.jpg';
import Gallery4 from './Image/gallery4.jpg';
import Gallery5 from './Image/gallery5.jpg';
import Gallery6 from './Image/gallery6.jpg';

export function ImageGallery() {
    return (
        <div className="container py-5">
            <h2 className="text-center fs-1 mb-5 text-uppercase fw-bold">Our Special</h2>
            <div className="row">
                <div className="col-md-4 col-sm-6 px-2">
                    <div className="my-3">
                        <img src={Gallery1} className="img-fluid" alt="Special Dish 1" />
                    </div>
                    <div className="my-3">
                        <img src={Gallery2} className="img-fluid" alt="Special Dish 2" />
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 px-2">
                    <div className="my-3">
                        <img src={Gallery3} className="img-fluid" alt="Special Dish 3" />
                    </div>
                    <div className="my-3">
                        <img src={Gallery4} className="img-fluid" alt="Special Dish 4" />
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 px-2">
                    <div className="my-3">
                        <img src={Gallery5} className="img-fluid" alt="Special Dish 5" />
                    </div>
                    <div className="my-3">
                        <img src={Gallery6} className="img-fluid" alt="Special Dish 6" />
                    </div>
                </div>
            </div>
        </div>

    )
}