export default function Portfolio({portfolio}){
    return(
        <div>
            <label>
                <input type="checkbox" checked={portfolio.complete}/>
                {portfolio.name}
            </label>
        </div>
    )
}
