import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import { useMyContext } from "../../../contexts/context";

interface CardSkillProps {
    link: string,
    name: string,
    icon: JSX.Element | JSX.Element[],
    definition: string
}

function CardSkill({ icon, name, link, definition }: CardSkillProps) {

    const [state, dispatch] = useMyContext();

    return (
        <Col sm={6} md={4} className="d-flex justify-content-evenly">
            <Alert variant="light" className="d-flex align-items-center" style={{ backgroundColor: state.dark ? 'rgba(0,0,0,0.2)' : '' }}>
                <a className="text-decoration-none" href={link} target="_blank" rel="noopener noreferrer">
                    <p>

                        {icon}

                    </p>
                    <hr />

                    <p className={`text-center fw-bold ${state.dark ? 'text-light' : 'text-dark'} fs-5 m-0 p-0`} >

                        {name}

                    </p>
                    <p className={`mb-0 ${state.dark ? 'text-white-50' : 'text-muted'}`} style={{ textAlign: "justify" }}>

                        {definition}

                    </p>
                </a>
            </Alert>
        </Col >
    )
}

export default CardSkill