import React from "react";
import { Card, CardBody, CardTitle, CardText, CardFooter } from "react-bootstrap";
import './Reviews.css';
import Person1 from './Image/Person1.jpg'
import Person2 from './Image/Person2.jpg'
import Person3 from './Image/Person3.jpg'
import Person4 from './Image/Person4.jpg'



function Reviews() {
    return (
        <div className="reviews-section container">

            <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">
                Reviews
            </h2>

            <div className="row g-4">
                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <CardText className="p-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Sit iure iusto minus! Similique eveniet
                                deleniti nihil illum architecto iure ducimus!
                            </CardText>
                        </CardBody>


                        <CardFooter className="d-flex align-items-center">
                            <img src={Person1} className="img-fluid rounded-circle mx-3 shadow" alt="Dhoni" />
                            <CardTitle className="text-success">
                                M S Dhoni
                            </CardTitle>
                        </CardFooter>

                    </Card>

                </div>

                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <CardText className="p-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Sit iure iusto minus! Similique eveniet
                                deleniti nihil illum architecto iure ducimus!
                            </CardText>
                        </CardBody>


                        <CardFooter className="d-flex align-items-center">
                            <img src={Person2} className="img-fluid rounded-circle mx-3 shadow" alt="Dhoni" />
                            <CardTitle className="text-success">
                                Suriya
                            </CardTitle>
                        </CardFooter>

                    </Card>

                </div>

                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <CardText className="p-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Sit iure iusto minus! Similique eveniet
                                deleniti nihil illum architecto iure ducimus!
                            </CardText>
                        </CardBody>


                        <CardFooter className="d-flex align-items-center">
                            <img src={Person3} className="img-fluid rounded-circle mx-3 shadow" alt="Dhoni" />
                            <CardTitle className="text-success">
                                Nayanthara
                            </CardTitle>
                        </CardFooter>

                    </Card>

                </div>

                <div className="col-lg-6">
                    <Card className="h-100 shadow">
                        <CardBody>
                            <CardText className="p-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Sit iure iusto minus! Similique eveniet
                                deleniti nihil illum architecto iure ducimus!
                            </CardText>
                        </CardBody>


                        <CardFooter className="d-flex align-items-center">
                            <img src={Person4} className="img-fluid rounded-circle mx-3 shadow" alt="Dhoni" />
                            <CardTitle className="text-success">
                                HipHop Adhi
                            </CardTitle>
                        </CardFooter>

                    </Card>

                </div>
            </div>



        </div>
    )
}

export default Reviews;