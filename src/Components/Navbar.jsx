import { Link, Routes, Route, Form } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';
import About from './Pages/About';





export default function Navbarpage(){
    return(
        <div>
      <Navbar expand="Ig" className='fixed-top bg-body-tertiarry shadow'>
        <Container>
          <Navbar.Brand>
            <Link to="./Home" className='navbar-brand text-success fw-bold '>SS Restaurant</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav' >
            <Nav className="me-auto justify-content-end w-100">
              <Nav.Link href='/Home' className='text-uppercase  fw-semibold'>Home</Nav.Link>
              <Nav.Link href='/Menu' className='text-uppercase fw-semibold'>Menu</Nav.Link>

              <Nav.Link href='/Contact' className='text-uppercase fw-semibold'>Contact Us</Nav.Link>

              <Nav.Link href='./About' className='text-uppercase fw-semibold'>About</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   
      
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>

      </Routes>


    </div>

    )
}