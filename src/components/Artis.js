import meter1 from "../assets/img/Fiersa Besari.png";
import meter2 from "../assets/img/Endank Soekamti.png";
import meter3 from "../assets/img/Kangen Band.png";
import meter4 from "../assets/img/Okkay.png";
import meter5 from "../assets/img/Last Child.png";
import meter6 from "../assets/img/Ndar Boy.png";
import meter7 from "../assets/img/Guyon Waton.png";
import meter8 from "../assets/img/for revenge.png";
import meter9 from "../assets/img/Deni Caknan.png";
import meter10 from "../assets/img/jono joni.png";
import meter11 from "../assets/img/mahalini.png";
import meter12 from "../assets/img/fortwenty.png";
import meter13 from "../assets/img/The Cangcuters.png";
import meter14 from "../assets/img/after shine.png";
import meter15 from "../assets/img/nasidaria.png";
import meter16 from "../assets/img/karena mereka.png";
import meter17 from "../assets/img/feby putri.png";
import meter18 from "../assets/img/vieratale.png";
import meter20 from "../assets/img/ndx aka.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Artis = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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

  return (
    <section className="artis" id="artis">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="artis-bx wow zoomIn">
                        <h2>Artis</h2>
                        <p>Perusahaan kami telah banyak berkolaborasi dengan beberapa artis papan atas<br></br> berikut adalah artis artis yang sudah berkolaborasi dengan kita.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme artis-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Fiersa Besari</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Endank Soekamti</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Kangen Band</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>Okkay</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>Last Child</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>Ndarboy Gank</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>Guyon Waton</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image" />
                                <h5>For Revenge</h5>
                            </div>
                            <div className="item">
                                <img src={meter9} alt="Image" />
                                <h5>Deny Caknan</h5>
                            </div>
                            <div className="item">
                                <img src={meter10} alt="Image" />
                                <h5>Jono Joni</h5>
                            </div>
                            <div className="item">
                                <img src={meter11} alt="Image" />
                                <h5>Mahalini</h5>
                            </div>
                            <div className="item">
                                <img src={meter12} alt="Image" />
                                <h5>Fourtwnty</h5>
                            </div>
                            <div className="item">
                                <img src={meter13} alt="Image" />
                                <h5>The Cangcuters</h5>
                            </div>
                            <div className="item">
                                <img src={meter14} alt="Image" />
                                <h5>Aftershine</h5>
                            </div>
                            <div className="item">
                                <img src={meter15} alt="Image" />
                                <h5>Nasidaria</h5>
                            </div>
                            <div className="item">
                                <img src={meter16} alt="Image" />
                                <h5>Karena Mereka</h5>
                            </div>
                            <div className="item">
                                <img src={meter17} alt="Image" />
                                <h5>Feby putri</h5>
                            </div>
                            <div className="item">
                                <img src={meter18} alt="Image" />
                                <h5>Vierratale</h5>
                            </div>
                            <div className="item">
                                <img src={meter20} alt="Image" />
                                <h5>Ndx Aka</h5>
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
