import Portfolio from "./Portfolio"

export default function PortfolioList({portfolio}){ //pass the portfolio to this method
    return(
        portfolio.map(portfolios => { //going though all the portfolios
             return <Portfolio key ={portfolio.id} portfolio= {portfolios} /> // assigning the key as the id 
        })
    
    )
}
