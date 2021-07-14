import React,{useState,useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, MobileIcon, 
         NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import {animateScroll as scroll} from 'react-scroll'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = ()=>{
        if(window.scrollY >=80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',changeNav)
    },[])

    const toggleHome =()=>{
        scroll.scrollToTop();
    };

    return (
       <> 
       {/* Para cambiar el color de todos los iconos que estan en este navbar */}
        <IconContext.Provider value={{color:'white'}}>
          <Nav scrollNav={scrollNav}>
              <NavbarContainer>
                  <NavLogo to='/' onClick={toggleHome}>Tecnemas</NavLogo>
                  <MobileIcon onClick={toggle}>
                      <FaBars/>
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to='blog' 
                           smooth={true}
                           spy={true}
                           duration={500}
                           exact='true'
                           offset={-80}
                           >Blog</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='servicios'
                           smooth={true}
                           spy={true}
                           duration={500}
                           exact='true'
                           offset={-80}
                          >Servicios</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='cursos'
                           smooth={true}
                           spy={true}
                           duration={500}
                           exact='true'
                           offset={-80}
                          >Cursos</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='nosotros'
                           smooth={true}
                           spy={true}
                           duration={500}
                           exact='true'
                           offset={-80}         
                          >Nosotros</NavLinks>
                      </NavItem>
                  </NavMenu>
                  <NavBtn>
                    <NavBtnLink to="/doc">Documentación</NavBtnLink>
                  </NavBtn>
              </NavbarContainer>
          </Nav>
          </IconContext.Provider>
       </>
    )
}

export default Navbar
