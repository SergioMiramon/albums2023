import "./Favs.css"
import { favAlbums } from "../../data/albums2023"
import { AlbumGrid } from "../AlbumGrid/AlbumGrid"

export const Favs = () => {
    return (
        <div className="months">
            <div className="favs">
            <h1>Fav Albums</h1>
            {favAlbums.map((album) => (
                <AlbumGrid album={album} key={album.id}/>
            ))}
            </div>
        </div>

    )

}