import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Fact from "../atoms/fact/Fact"

function Facts() {
    return (
        <Row className="my-2">
            <Col className="d-flex justify-content-evenly">
                <Fact children1="2+" children2="Years of experience" />
                <Fact children1="18" children2="Completed projects" />
                <Fact children1="6" children2="Satisfied customers" />
            </Col>
        </Row>
    )
}

export default Facts