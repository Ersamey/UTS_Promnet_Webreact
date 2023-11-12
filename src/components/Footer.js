import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/logo.svg";
import navIcon1 from '../assets/in.svg';
import navIcon2 from '../assets/insta.svg';
import navIcon3 from '../assets/mail.svg'; 

export const Footer = () => { 
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ersa-meilia-5087ba271/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.instagram.com/meyyilea/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=meiliaersa@gmail.com"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}