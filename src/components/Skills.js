import meter1 from "../assets/meter1.svg";
import meter2 from "../assets/meter2.svg";
import meter3 from "../assets/meter3.svg";
import Carousel from 'react-multi-carousel'; //import carousel untuk membuat slider
import 'react-multi-carousel/lib/styles.css'; //import css carousel untuk styling
import arrow1 from "../assets/arrow1.svg";
import arrow2 from "../assets/arrow2.svg";
import colorSharp from "../assets/tema2.jpg"

// buat komponen Skills
export const Skills = () => { 
  //objek responsive untuk mengatur tampilan slider pada berbagai ukuran layar
  const responsive = { 
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  // tampilkan komponen Skills
  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>About me</h2>
                        <p>I have an interest in technology and education and aspire to become a dedicated computer science educator who can inspire and empower students to excel in the digital era. Here are some of my skills</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Problem Solving Skill</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Data Structure</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Editing</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Microsoft Office</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}