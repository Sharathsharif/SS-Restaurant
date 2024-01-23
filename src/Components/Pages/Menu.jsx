import React from "react";
import './Menu.css';
import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";
import Breakfastimag from '../Image/gallery5.jpg'
import Tamilnadu_Lunch from '../Image/Tamilnadu_Lunch.jpg'
import Biriyani from '../Image/Biriyani.jpg'



const Breakfast = [
    {
        id: 1,
        name: 'Dosha combo',
        description: '(includes 2 ghee Dosha with chicken curry / Egg Curry/ Veg Kuruma , 1 vadai) ',
        price: "₹150/-"
    },
    {
        id: 2,
        name: 'puttu combo',
        Description: 'Rice, chicken, papadam, pachadi ',
        price: "₹150/-"
    },
    {
        id: 3,
        name: 'iddli combo',
        Description: 'Rice, vadai,sambar, pachadi ',
        price: "₹150/-"
    },
    {
        id: 4,
        name: 'Porotta combo',
        description: '(Includes 4 porotta with 1 plate chicken / beaf) ',
        price: "₹150/-"
    }
]

const Lunch = [
    {
        id: 1,
        name: 'Biriyani',
        Description: 'Rice, vadai,sambar, pachadi ',
        price: "₹150/-"
    },
    {
        id: 2,
        name: 'Tamilnadu Satham',
        Description: 'Rice, chicken, papadam, pachadi ',
        price: "₹150/-"
    },
    {
        id: 3,
        name: 'Fish rice',
        Description: 'Rice, vadai,sambar, pachadi ',
        price: "₹150/-"
    }
]

const Dinner = [
    {
        id: 1,
        name: 'Porotta combo',
        description: 'Rice, vadai,sambar, pachadi ',
        price: "₹150/-"
    },
    {
        id: 2,
        name: 'idi Appam combo',
        description: 'Rice, chicken, papadam, pachadi ',
        price: "₹150/-"
    },
    {
        id: 3,
        name: 'Chicken Biriyani',
        description: 'Rice, vadai,sambar, pachadi ',
        price: "₹150/-"
    }
]

const Dessert = [
    {
        id: 1,
        name: 'Lemon Cake',
        description: 'flour, sugar, baking powder, lemon',
        price: "₹150/-"
    },
    {
        id: 2,
        name: 'Cinnamon Rolls',
        description: 'flour, salt, sugar, cinnamon, yeast, sour cream, milk',
        price: "₹250/-"
    },
    {
        id: 3,
        name: 'Vegan Pancakes',
        description: 'flour, sugar, baking powder, soya milk, blueberries',
        price: "₹200/-"
    }
]

const Juice = [
    {
        id: 1,
        name: 'Fresh Juice',
        description: 'flour, sugar, baking powder, lemon',
        price: "₹150/-"
    },
    {
        id: 2,
        name: 'Mohster shake',
        description: 'flour, sugar, baking powder, soya milk, blueberries',
        price: "₹200/-"
    },
    {
        id: 3,
        name: 'Sharja',
        description: 'flour, salt, sugar, cinnamon, yeast, sour cream, milk',
        price: "₹250/-"
    },
    {
        id: 4,
        name: 'Milkshake',
        description: 'flour, sugar, baking powder, soya milk, blueberries',
        price: "₹200/-"
    }
]




export default function Menu() {
    return (
        <div className='menu-page '>
            <header className='mt-5 '>
                <div className='container h-100 d-flex align-items-center justify-content-center '>
                    <h1 className='text-light'>Menu</h1>
                </div>
            </header>

            {/*  Breakfast list */}

            <div className="Breakfast py-5 shadow">
                <div className="container">
                    <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-danger">
                        Breakfast
                    </h2>
                    <div className="row flex-column-reverse flex-lg-row ">
                        <div className="col-lg-6 d-flex justify-content-center">
                            <img src={Breakfastimag} className="img-fluid w-75 mt-4 mt-lg-0 " alt="" />
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-around">
                            {Breakfast.map((Breakfast) => (
                                <div key={Breakfast.id}>
                                    <Card className="border-0">
                                        <CardBody>
                                            <CardTitle className="text-center fs-2">
                                                {Breakfast.name}
                                            </CardTitle>
                                            <CardText className="text-center fs-4">
                                                {Breakfast.description}
                                            </CardText>
                                            <CardText className="text-center fs-3 fw-bold text-success">
                                                {Breakfast.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>


            {/*  Lunch list */}


            <div className="lunch  text-light bg-dark py-5">
                <div className="container">
                    <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-danger">
                        Lunch
                    </h2>

                    <div className="row flex-column flex-lg-row ">

                        <div className="col-lg-6 d-flex flex-column  justify-content-around">
                            {Lunch.map((Lunch) => (
                                <div key={Lunch.id}>
                                    <Card className="border-0 bg-dark text-light">
                                        <CardBody>
                                            <CardTitle className="text-center fs-2">
                                                {Lunch.name}
                                            </CardTitle>
                                            {/* <CardText className="text-center fs-4">
                                                {Lunch.description}
                                            </CardText> */}
                                            <CardText className="text-center fs-3 fw-bold text-success">
                                                {Lunch.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center">
                            <img src={Tamilnadu_Lunch} className="img-fluid w-75 mt-4 mt-lg-0 " alt="" />
                        </div>

                    </div>
                </div>
            </div>


            {/*  Dinner list */}

            <div className="Breakfast my-5">
                <div className="container">
                    <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-danger">
                        Dinner
                    </h2>
                    <div className="row flex-column-reverse flex-lg-row ">
                        <div className="col-lg-6 d-flex justify-content-center">
                            <img src={Biriyani} className="img-fluid w-75 mt-4 mt-lg-0 " alt="" />
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-around">
                            {Dinner.map((Dinner) => (
                                <div key={Dinner.id}>
                                    <Card className="border-0">
                                        <CardBody>
                                            <CardTitle className="text-center fs-2">
                                                {Dinner.name}
                                            </CardTitle>
                                            <CardText className="text-center fs-4">
                                                {Dinner.Description}
                                            </CardText>
                                            <CardText className="text-center fs-3 fw-bold">
                                                {Dinner.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>




            {/*  Lunch list */}


            <div className="lunch  text-light bg-dark py-5">
                <div className="container">
                    <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-danger">
                        Dessert
                    </h2>

                    <div className="row flex-column flex-lg-row ">

                        <div className="col-lg-6 d-flex flex-column  justify-content-around">
                            {Dessert.map((Dessert) => (
                                <div key={Dessert.id}>
                                    <Card className="border-0 bg-dark text-light">
                                        <CardBody>
                                            <CardTitle className="text-center fs-2">
                                                {Dessert.name}
                                            </CardTitle>
                                            {/* <CardText className="text-center fs-4">
                                                {Dessert.description}
                                            </CardText> */}
                                            <CardText className="text-center fs-3 fw-bold text-success">
                                                {Dessert.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center">
                            <img src={Breakfastimag} className="img-fluid w-75 mt-4 mt-lg-0 " alt="" />
                        </div>

                    </div>
                </div>
            </div>





            {/*  Juice list */}

            <div className="Breakfast py-5">
                <div className="container">
                    <h2 className="text-center fs-1 mb-4 mb-lg-5  fw-bold text-danger">
                        Juice
                    </h2>
                    <div className="row flex-column-reverse flex-lg-row ">
                        <div className="col-lg-6 d-flex justify-content-center">
                            <img src={Breakfastimag} className="img-fluid w-75 mt-4 mt-lg-0 " alt="" />
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-around">
                            {Juice.map((Juice) => (
                                <div key={Juice.id}>
                                    <Card className="border-0">
                                        <CardBody>
                                            <CardTitle className="text-center fs-2">
                                                {Juice.name}
                                            </CardTitle>
                                            {/* <CardText className="text-center fs-4">
                                                {Juice.description}
                                            </CardText> */}
                                            <CardText className="text-center fs-3 fw-bold text-success">
                                                {Juice.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}