import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { SiGithub } from "react-icons/si";
import { HiLink } from "react-icons/hi";
import { useMyContext } from "../../../contexts/context";
import { FetchData } from "../../molecules/Portfolio";

interface CardInfoProp {
    data: FetchData,
    image: string,
}

function CardInfo({ data, image }: CardInfoProp) {

    const [state] = useMyContext()

    return (

        <Col md={6} className="d-flex justify-content-evenly">

            <Card style={{ backgroundColor: state.dark ? 'rgba(0,0,0,0.2)' : '' }} text={state.dark ? 'light' : 'dark'} className="text-center m-3">
                <Card.Header>
                    <Image src={image} thumbnail rounded />
                </Card.Header>
                <Card.Body>
                    <Card.Title className="text-capitalize">/{data?.name}</Card.Title>
                    <Card.Text>
                        {data?.description}
                    </Card.Text >
                    <a className="btn btn-warning m-3" target="_blank" href={data?.html_url}>
                        <SiGithub size={'1.5em'} /> Repository
                    </a>
                    <a className="btn btn-light m-3" target="_blank" rel="noopener noreferrer" href={data?.homepage ? data?.homepage : data?.html_url} >
                        <HiLink size={'1.5em'} /> Application
                    </a>
                    {/* <p className="font-monospace">Main language: {data.language}</p> */}
                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-around">
                    <span className="me-2">Created at: {data?.created_at.split('T')[0]}</span>
                    <span className="ms-2">Updated at: {data?.pushed_at.split('T')[0]}</span>
                </Card.Footer>
            </Card>
        </Col >
    )
}

export default CardInfo