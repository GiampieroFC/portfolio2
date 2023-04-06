import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { useRef } from 'react';
import { useMyContext } from '../../../contexts/context';

function Switch() {

    const [state, dispatch] = useMyContext()

    const darkCheckRef = useRef<HTMLInputElement | null>(null)

    function handleChange() {
        dispatch({ type: 'dark', payload: darkCheckRef.current?.checked })
    }


    return (

        <Col className="d-flex justify-content-center my-2">
            😎 <Form
                className='ms-2'>
                <Form.Check
                    ref={darkCheckRef}
                    type="switch"
                    onChange={handleChange}

                />
            </Form>🌚
        </Col>
    );
}

export default Switch;