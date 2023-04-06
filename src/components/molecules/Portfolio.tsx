import Row from "react-bootstrap/Row"
import CardInfo from "../atoms/cards/CardPortfolio"
import { useEffect, useState } from "react";
import PortfolioPlaceholder from "../atoms/cards/portfolioPlaceholder";

export interface FetchData {
    name: string,
    description: string,
    html_url: string,
    homepage: string,
    language: string,
    created_at: string,
    updated_at: string,
}


function Portfolio() {
    const [data, setData] = useState<FetchData[]>();

    useEffect(() => {

        (async () => {
            const request = await fetch('https://api.github.com/users/GiampieroFC/repos')
            const response: FetchData[] = await request.json()

            const ordered = response.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())

            console.log(ordered)
            setData(ordered)

        })()

    }, [])

    return (
        <Row className="mt-2 text-center d-flex aling-items-stretch">

            {
                data
                    ?
                    data?.map((e) => <CardInfo
                        data={e}
                        key={e.html_url}
                        image={`https://raw.githubusercontent.com/GiampieroFC/${e.name}/main/public/screenshot/screenshot.png`}
                    />)
                    :
                    <>
                        <PortfolioPlaceholder />
                        <PortfolioPlaceholder />
                        <PortfolioPlaceholder />
                        <PortfolioPlaceholder />
                        <PortfolioPlaceholder />
                        <PortfolioPlaceholder />
                        <PortfolioPlaceholder />
                        <PortfolioPlaceholder />
                        <PortfolioPlaceholder />
                        <PortfolioPlaceholder />
                        <PortfolioPlaceholder />
                        <PortfolioPlaceholder />
                        <PortfolioPlaceholder />
                        <PortfolioPlaceholder />
                        <PortfolioPlaceholder />
                        <PortfolioPlaceholder />
                        <PortfolioPlaceholder />
                        <PortfolioPlaceholder />
                        <PortfolioPlaceholder />
                        <PortfolioPlaceholder />
                    </>


            }



        </Row>
    )
}

export default Portfolio