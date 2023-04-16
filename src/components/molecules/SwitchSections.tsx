import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Button from "react-bootstrap/Button"
import { BaseSyntheticEvent } from "react"
import { useMyContext } from "../../contexts/context"


function SwitchSections() {

    const [state, dispatch] = useMyContext();

    function handlerSwitch(e: BaseSyntheticEvent) {
        dispatch({ type: 'swi', payload: e.target.textContent })
    }

    return (
        <Row className="sticky-top">
            <Col>
                <div className="d-grid">

                    {
                        state.swi === 'Portfolio' && <ButtonGroup>
                            <Button variant={'light'} size="lg" className="pe-0 w-50">

                                <div className={` ${state.dark ? 'bg-dark text-light' : 'bg-secondary text-dark bg-opacity-50 '}  fs-5 rounded-start py-1`}>Portfolio</div>

                            </Button>

                            <Button onClick={handlerSwitch} variant={'light'} size="lg" className="ps-0 w-50">

                                <div className={`${state.dark ? 'bg-secondary' : 'bg-light'} text-dark fs-5 rounded-end bg-opacity-50 py-1`}>Stack</div>

                            </Button>
                        </ButtonGroup>

                    }
                    {
                        state.swi === 'Stack' && <ButtonGroup>

                            <Button onClick={handlerSwitch} variant={'light'} size="lg" className="pe-0 w-50">

                                <div className={`${state.dark ? 'bg-secondary' : 'bg-light'}  text-dark fs-5 rounded-start bg-opacity-50 py-1`}>Portfolio</div>

                            </Button>
                            <Button variant={'light'} size="lg" className="ps-0 w-50">

                                <div className={` ${state.dark ? 'bg-dark text-light' : 'bg-secondary text-dark bg-opacity-50 '}  fs-5 rounded-end py-1`}>Stack</div>

                            </Button>

                        </ButtonGroup>
                    }





                </div>
            </Col>
        </Row >
    )
}

export default SwitchSections