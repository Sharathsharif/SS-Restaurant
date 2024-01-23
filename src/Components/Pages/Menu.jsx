import React from "react";
import './Menu.css';
import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";
import Breakfastimag from '../Image/gallery5.jpg'
import Tamilnadu_Lunch from '../Image/Tamilnadu_Lunch.jpg'
import Biriyani from '../Image/Biriyani.jpg'
import chickenNoodles from '../Image/ChickenNoodles.jpg'
import freshJuice from '../Image/freshJuice.jpg'
import iceCream from '../Image/Dessert.jpg'
import Gulab from '../Image/Gulab Jam.jpg'



const Breakfast = [
    {
        id: 1,
        name: 'Dosha combo',
        description: '(includes 2 ghee Dosha with chicken curry / Egg Curry/ Veg Kuruma , 1 vadai) ',
        price: "₹150/-"
    },
    {
        id: 2,
        name: 'puttu ',
        Description: 'Rice, chicken, papadam, pachadi ',
        price: "₹35/-"
    },
    {
        id: 3,
        name: 'iddli ',
        Description: 'Rice, vadai,sambar, pachadi ',
        price: "₹10/-"
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
        name: 'Porotta ',
        description: 'Rice, vadai,sambar, pachadi ',
        price: "₹10/-"
    },
    {
        id: 2,
        name: 'idi Appam ',
        description: ' ',
        price: "₹15/-"
    },
    {
        id: 3,
        name: 'Chicken Biriyani',
        description: ' ',
        price: "₹150/-"
    }
]

const FastFood = [
    {
        id: 1,
        name: 'Chicken Noodles',
        description: 'nil ',
        price: "₹150/-"
    },
    {
        id: 2,
        name: 'Chicken Rice',
        description: 'Rice, chicken, papadam, pachadi ',
        price: "₹150/-"
    },
    {
        id: 3,
        name: 'Burger',
        description: 'Rice, vadai,sambar, pachadi ',
        price: "₹180/-"
    },
    {
        id: 4,
        name: 'french fries',
        description: 'Rice, vadai,sambar, pachadi ',
        price: "₹120/200/300/-"
    }
]

const Dessert = [
    {
        id: 1,
        name: 'Gulab Jamun',
        description: 'flour, sugar, baking powder, lemon',
        price: "₹50/-"
    },
    {
        id: 2,
        name: 'Rasgulla',
        description: 'flour, salt, sugar, cinnamon, yeast, sour cream, milk',
        price: "₹100/-"
    },
    {
        id: 3,
        name: 'Falooda',
        description: 'flour, sugar, baking powder, soya milk, blueberries',
        price: "₹120/-"
    },
    {
        id: 4,
        name: 'Kulfi',
        description: 'flour, sugar, baking powder, soya milk, blueberries',
        price: "₹80/-"
    },
    {
        id: 5,
        name: 'Mysore Pak',
        description: 'flour, sugar, baking powder, soya milk, blueberries',
        price: "₹40/-"
    },
    {
        id: 6,
        name: 'Lassi',
        description: 'flour, sugar, baking powder, soya milk, blueberries',
        price: "₹80/-"
    }
]

const Juice = [
    {
        id: 1,
        name: 'Fresh Juice',
        description: 'flour, sugar, baking powder, lemon',
        price: "₹80/-"
    },
    {
        id: 2,
        name: 'Mohster shake',
        description: 'flour, sugar, baking powder, soya milk, blueberries',
        price: "₹180/-"
    },
    {
        id: 3,
        name: 'Sharja',
        description: 'flour, salt, sugar, cinnamon, yeast, sour cream, milk',
        price: "₹80/-"
    },
    {
        id: 4,
        name: 'Milkshake',
        description: 'flour, sugar, baking powder, soya milk, blueberries',
        price: "₹100/-"
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
                                            <CardText className="text-center text-success fs-4">
                                                {Breakfast.description}
                                            </CardText>
                                            <CardText className="text-center fs-3 fw-bold text-danger">
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
                                            <CardText className="text-center  fs-4">
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




{/*  Fast Food list */}


<div className="lunch  text-light bg-dark py-5">
                <div className="container">
                    <h2 className="text-center fs-1 mb-4 mb-lg-5 text-uppercase fw-bold text-danger">
                        Fast Food
                    </h2>

                    <div className="row flex-column flex-lg-row ">

                        <div className="col-lg-6 d-flex flex-column  justify-content-around">
                            {FastFood.map((FastFood) => (
                                <div key={FastFood.id}>
                                    <Card className="border-0 bg-dark text-light">
                                        <CardBody>
                                            <CardTitle className="text-center fs-2">
                                                {FastFood.name}
                                            </CardTitle>
                                            {/* <CardText className="text-center fs-4">
                                                {Dessert.description}
                                            </CardText> */}
                                            <CardText className="text-center fs-3 fw-bold text-success">
                                                {FastFood.price}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center">
                            <img src={chickenNoodles} className="img-fluid w-75 mt-4 mt-lg-0 " alt="" />
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
                            <img src={freshJuice} className="img-fluid w-75 mt-4 mt-lg-0 " alt="" />
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





            {/*  Dessert list */}


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
                            <img src={Gulab} className="img-fluid w-75 mt-4 mt-lg-0 " alt="" />
                        </div>

                    </div>
                </div>
            </div>





           


        </div>
    )
}