import "./Favs.css"
import { albumsTot, favAlbums } from "../../data/albums2023"
import { AlbumGrid } from "../../components/AlbumGrid/AlbumGrid"
import { NavLink } from "react-router-dom"

export const Favs = () => {
    return (
      <section>
        <div className="favs-section">
          <div className="favs-header">
            <h1>Fav Albums</h1>
            <h1 className="favs-count">{`(${albumsTot})`}</h1>
          </div>
          {favAlbums.map((album) => (
            <NavLink to={`/favs/${album.title}`} key={album.id}>
              <AlbumGrid album={album} />
            </NavLink>
          ))}
        </div>
      </section>
    );

}