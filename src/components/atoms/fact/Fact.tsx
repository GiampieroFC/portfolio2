import Stack from 'react-bootstrap/stack'
import { useMyContext } from '../../../contexts/context'

interface FactProp {
    children1: string,
    children2: string,
}

function Fact({ children1, children2 }: FactProp) {
    const [state, dispatch] = useMyContext()

    return (
        // <Stack>
        <div className='text-center'>
            <p className={`my-0 fw-semibold ${state.dark && 'text-white'}`}>{children1}</p>
            <p className='my-0 text-muted'>{children2}</p>
            {/* <div className="mx-auto">First item</div>
            <div className="mx-auto">First item</div> */}
            {/* </Stack> */}
        </div>
    )
}

export default Fact