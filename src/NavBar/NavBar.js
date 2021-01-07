import { useState} from 'react'
import {Nav , Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-scroll'
import {NavBarStyle} from './style'

export default function NavBar(){
  const [navExpanded, setnavExpanded ] = useState(false)

  return(
    <>
      <NavBarStyle 
        expand='lg' 
        fixed='top' 
        bg='light'
        onToggle={(e) => setnavExpanded(e)} 
        expanded={navExpanded}
      >
        <Navbar.Brand as='div' className='ml-5'>正修科技大學</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse className='justify-content-center' id='basic-navbar-nav'>
          <Nav >
            <Nav.Link className='text-center ml-5' >
              <Link
                onClick={() => setnavExpanded(false)}
                activeClass='active'
                to='news'
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >
                news<br/>最新消息
              </Link>
            </Nav.Link>
            <Nav.Link className='text-center ml-5'>
              <Link
                onClick={() => setnavExpanded(false)}
                activeClass='active'
                to='product'
                spy={true}
                smooth={true}
                offset={-90}
                duration={700}
              >
                introduction<br/>處室介紹
              </Link>
            </Nav.Link>
            <Nav.Link className='text-center ml-5'>
              <Link
                onClick={() => setnavExpanded(false)}
                activeClass='active'
                to='about'
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >
                about<br/>關於正修
              </Link>
            </Nav.Link>
            <Nav.Link className='text-center ml-5'>
              <Link
                onClick={() => setnavExpanded(false)}
                activeClass='active'
                to='joinUs'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1500}
              >
                join us<br/>加入正修
              </Link>
            </Nav.Link>
            <Nav.Link className='text-center ml-5'>
              <Link
                onClick={() => setnavExpanded(false)}
                activeClass='active'
                to='contact'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1700}
              >
                contact<br/>聯絡正修
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </NavBarStyle>
    </>
  )
}