import { useEffect, useState } from "react"; // import useEffect dan useState dari React untuk keperluan lifecycle dan state
import { Navbar, Container, Nav } from 'react-bootstrap'; 
import logo from '../assets/logo.svg';
import linkedin from '../assets/in.svg';
import insta from '../assets/insta.svg';
import mail from '../assets/mail.svg'; 

// buat komponen NavBar
export const NavBar = () => {
 const [activeLink, setActiveLink] = useState('home'); //state untuk menyimpan data link yang aktif
 const [scrolled, seScrolled] = useState(false); //state untuk menyimpan data apakah navbar sudah discroll atau belum

 useEffect(() => {//cek apakah navbar sudah discroll atau belum
  const onScroll = () => {
   if (window.scrollY > 50) {
    seScrolled(true);
   } else {
    seScrolled(false);
   }
  }

  window.addEventListener('scroll', onScroll);
  
  return () => window.removeEventListener('scroll', onScroll);
 }, []);
 // buat fungsi untuk mengupdate data link yang aktif
 const onUpdateActiveLink = (link) => {
  setActiveLink(link);
 }
  // tampilkan komponen navbar
 return (
  <Navbar expand="lg" className={scrolled ? "scrolled": ""}> 
    <Container>
     <Navbar.Brand href="#home"> 
      <img src={logo} alt="logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav">
     <span className="navbar-toggler-icon" /> 
    </Navbar.Toggle> 
    <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="me-auto">
      <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
      <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>About me</Nav.Link>
      <Nav.Link href="#contact" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Contact</Nav.Link>
     </Nav>
     <span className="navbar-text">
      <div className="social-icon">
       <a href="https://www.linkedin.com/in/ersa-meilia-5087ba271/"><img src={linkedin} alt="linkedin" /></a>
       <a href="https://www.instagram.com/meyyilea/"><img src={insta} alt="insta" /></a>
       <a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=meiliaersa@gmail.com" ><img src={mail} alt="mail" /></a>
           </div>
           <button className="vvd">
            <a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=meiliaersa@gmail.com">
              <span style={{ color: 'white' }}>Let's Connect</span>
            </a>
          </button>
     </span>
    </Navbar.Collapse>
   </Container>
  </Navbar>
 );
}

