import { useEffect, useState } from "react" //dari React untuk keperluan lifecycle dan state
import { Col, Container, Row, Nav } from "react-bootstrap"  //import komponen bootstrap
import { ArrowRightCircle } from "react-bootstrap-icons" //import icon arrow untuk tombol scroll
import headerImg from '../assets/ersa3.png' 

export const Banner = () => { //buat komponen Banner
  const [loopNum, setLoopNum] = useState(0);  //state untuk menyimpan data jumlah loop
  const [isDeleting, setIsDeleting] = useState(false); //menyimpan data apakah teks sedang dihapus atau tidak
  const toRotate = ["2200458", "Pemrograman Internet"]; //array untuk menyimpan data teks yang akan ditampilkan
  const [text, setText] = useState(' '); //state untuk menyimpan data teks yang akan ditampilkan
  const [delta, setDelta] = useState(300 - Math.random() * 1000); //state untuk menyimpan data delta untuk mengatur waktu
  const period = 2000; //variabel untuk menyimpan data periode

  //useEffect untuk mengatur animasi teks
  useEffect(() => {
    let ticker = setInterval(() => {  //setInterval untuk mengatur waktu
      tick();
    }, delta) 
    return () => { clearInterval(ticker) };  //clearInterval untuk menghentikan waktu
  }, [text]) 

  //fungsi untuk mengatur animasi teks
  const tick = () => {
    let i = loopNum % toRotate.length; 
    let fullText = toRotate[i]; 
    let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
    setText(updateText);
    // cek apakah teks sudah selesai ditampilkan dan dihapus
    if (isDeleting) { 
      setDelta(prevDelta => prevDelta / 2);
    }
    
    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period); 
    } else if (isDeleting && updateText === '') { 
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }
 // tampilkan komponen Banner
 return (
  <section className="banner" id="home">
   <Container>
    <Row className="align-items-center">
     <Col xs={12} md={6} xl={7}>
      <span className="tagline">Welcome to my Portofolio</span>
           <h1>{`Hallo I'm Ersa Meilia`} </h1>
           <h1>  <span className="wrap">{text}</span></h1>
      <p>Second-year Computer Science Education student at Indonesia University of Education </p>

         </Col>
         <Col xs={12} md={6} xl={5}>
           <img src={headerImg} alt="headderImg" />
            <div className="banner-img">
            <img src='' alt="" />
           </div>
           </Col>
    </Row>
   </Container>
  </section>
  )
}