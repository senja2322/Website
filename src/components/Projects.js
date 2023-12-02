import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/workshop.png";
import projImg5 from "../assets/img/metaverse.png";
import projImg6 from "../assets/img/Nft Ticketing.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Management Artis",
      description: "",
      imgUrl: projImg1,
    },
    {
      title: "Naraya Tour Indonesia",
      description: "",
      imgUrl: projImg2,
    },
    {
      title: "Advertising Agency",
      description: "",
      imgUrl: projImg3,
    },
    {
      title: "Wokshop Education",
      description: " ",
      imgUrl: projImg4,
    },
    {
      title: "Metaverse",
      description: "",
      imgUrl: projImg5,
    },
    {
      title: "Tiketing NFT",
      description: "",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Beberapa project yang akan di kembangkan untuk memperkuat ekosistem perusahaan kami, dan menigkatkan inovasi inovasi baru yang akan kami kolaborasikan</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Kami mendedikasikan diri untuk menghasilkan ide-ide yang unik dan inovatif. Tim kreatif Naraya Media Tama terus mencari cara baru untuk memikat audiens dan membuat merek mencolok di tengah keramaian.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Naraya Media Tama memahami pentingnya pengalaman pengguna yang memukau. Kami mengintegrasikan inovasi ke dalam setiap aspek produk atau layanan kami, menciptakan pengalaman yang tidak hanya memuaskan tetapi juga menginspirasi.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
