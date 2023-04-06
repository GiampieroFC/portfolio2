import Row from "react-bootstrap/Row"
import CardInfo from "../atoms/cards/CardPortfolio"
import { useEffect, useState } from "react";

export interface FetchData {
    name: string,
    description: string,
    html_url: string,
    homepage: string,
    language: string,
    created_at: string,
    updated_at: string,
}

const noFound: FetchData = {
    name: 'No Found',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nihil facere delectus sunt earum ex cum, qui totam accusamus nostrum, dicta eveniet sapiente optio unde. Porro odio vero repudiandae at!',
    html_url: '#',
    homepage: '#',
    language: 'none',
    created_at: 'never',
    updated_at: 'never'
}

function Portfolio() {
    const [data, setData] = useState<FetchData[]>();

    useEffect(() => {

        (async () => {
            const request = await fetch('https://api.github.com/users/GiampieroFC/repos')
            const response: FetchData[] = await request.json()
            setData(response)

        })()

    }, [])

    return (
        <Row className="text-center">

            {
                data?.map((e) => <CardInfo
                    data={e}
                    key={e.html_url}
                    image={`https://raw.githubusercontent.com/GiampieroFC/${e.name}/main/public/screenshot/screenshot.png`}
                />)
            }



        </Row>
    )
}

export default Portfolio