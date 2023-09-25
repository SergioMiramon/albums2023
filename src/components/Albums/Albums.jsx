import "./Albums.css"
import { Months } from "../Months/Months"
import { Favs } from "../Favs/Favs"
import { useState } from "react"


export const Albums = () => {
    const [showFavs, setShowFavs] = useState(false);
    return (
        <section>
            <ul>
                <a onClick={() => setShowFavs(false)} id='monthslink'>Monthly</a>
                <a onClick={() => setShowFavs(true)} id='favslink'>Favs</a>
            </ul>
            { showFavs ? (<Favs/>) : (<Months/>) }
        </section>
        
    )

}