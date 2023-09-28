import "./Favs.css"
import { favAlbums } from "../../data/albums2023"
import { AlbumGrid } from "../../components/AlbumGrid/AlbumGrid"
import { NavLink } from "react-router-dom"

export const Favs = () => {
    return (
        <section>
            <div className="favs">
            <h1>Fav Albums</h1>
            {favAlbums.map((album) => (
                <NavLink to={`/favs/${album.title}`} key={album.id}>
                    <AlbumGrid album={album}/>
                </NavLink>
            ))}
            </div>
        </section>

    )

}