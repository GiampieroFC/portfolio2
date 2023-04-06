import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { SiTelegram, SiDocusign } from 'react-icons/si'

function Buttons() {
    return (
        <Row className="my-2">
            <Col className="d-flex justify-content-evenly p-3 gap-2">
                <a className="btn btn-warning btn-lg" href="/cv_dev_giampiero_fermini_en.pdf" download="cv_dev_giampiero_fermini_en.pdf" >Download CV <SiDocusign /></a>
                <a className="btn btn-light btn-lg" href="https://t.me/GiampieroFC" target="_blank" rel="noopener noreferrer">Contact me <SiTelegram /></a>
            </Col >
        </Row >
    )
}

export default Buttons