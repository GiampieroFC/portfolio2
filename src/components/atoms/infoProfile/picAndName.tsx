import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import { SiGithub, SiLinkedin, SiGmail, SiInstagram } from 'react-icons/si'
import pic13 from "/profile-pic13.png";
import { CSSProperties } from "react";
import { useMyContext } from "../../../contexts/context";


function PicAndName() {

    const [state, dispatch] = useMyContext()

    return (
        <>
            <Col md={{ span: 4, offset: 1 }} className="text-center"  >
                <Image style={{ width: '250px' }} className="mb-4 mt-2" src={pic13} roundedCircle thumbnail />
            </Col >
            <Col className="d-block" md={6} >
                <Row className="mt-4">
                    <Col>
                        <h1 className={`display-3 text-center ${state.dark && 'text-white'}`}>Giampiero Fermini</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className="display-6 text-secondary text-center" style={{ "--bs-text-opacity": ".7", } as CSSProperties}>Software Engineer</h2>
                    </Col>
                </Row >
                <Row>
                    <Col className="my-4 d-flex justify-content-evenly">
                        <a className="text-muted fw-light" href="https://github.com/GiampieroFC" target="_blank" rel="noopener noreferrer"><SiGithub size={'1.2em'} /></a>
                        <a className="text-muted fw-light" href="https://www.linkedin.com/in/fc-giampiero/" target="_blank" rel="noopener noreferrer"><SiLinkedin size={'1.2em'} /></a>
                        <a className="text-muted fw-light" href="mailto:giampieroferminicastillo@gmail.com" target="_blank" rel="noopener noreferrer"><SiGmail size={'1.2em'} /></a>
                        <a className="text-muted fw-light" href="https://www.instagram.com/giampierofc/" target="_blank" rel="noopener noreferrer"><SiInstagram size={'1.2em'} /></a>
                    </Col>
                </Row>
            </Col >
        </>
    )
}

export default PicAndName