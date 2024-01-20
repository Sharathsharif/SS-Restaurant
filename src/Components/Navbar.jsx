import { Link, Routes, Route, Form } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';
import About from './Pages/About';
import "./Pages/Home.css"



export default function Navbarpage(){
    return(
        <div className='Navbarstyles'>
      <Navbar expand="lg" className='fixed-top bg-body-tertiary shadow'>
        <Container>
          <Navbar.Brand>
            <Link to="./" className='navbar-brand  fw-semibold ' id='restname'> 
            
            SS Restaurant</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className="me-auto justify-content-end w-100">
              <Nav.Link href ='/' className='  text-uppercase  fw-semibold'>Home</Nav.Link>
              <Nav.Link href ='/Menu' className='text-uppercase fw-semibold'>Menu</Nav.Link>
              <Nav.Link href ='./About' className='text-uppercase fw-semibold'>About</Nav.Link>

              <Nav.Link href ='/Contact' className='text-uppercase fw-semibold'>Contact Us</Nav.Link>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>

      </Routes>


    </div>

    )
}