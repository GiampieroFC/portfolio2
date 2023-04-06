import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { useMyContext } from "../../../contexts/context";
import { Placeholder } from "react-bootstrap";



function PortfolioPlaceholder() {

    const [state, dispatch] = useMyContext();

    return (
        <Col md={6} className="d-flex justify-content-evenly" >
            <Card style={{ backgroundColor: state.dark ? 'rgba(0,0,0,0.2)' : '', width: '50rem', height: '20rem' }} text={state.dark ? 'light' : 'dark'} className="text-center m-3">
                <Card.Header>
                    <Placeholder as={Image} size="lg" fluid />
                </Card.Header>
                <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                        <p>Loading...</p>
                        <Placeholder as={Card.Text} />
                    </Placeholder>
                    <Placeholder.Button variant="warning" style={{ width: '5rem' }} />
                    <Placeholder />
                    <Placeholder.Button variant="secondary" style={{ width: '5rem' }} />
                </Card.Body>
            </Card>


        </Col >
    )
}

export default PortfolioPlaceholder