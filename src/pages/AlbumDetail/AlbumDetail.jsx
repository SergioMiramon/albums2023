import { getAlbum } from "../../data/albums2023";
import "./AlbumDetail.css"
import { useParams } from "react-router-dom";

export const AlbumDetail = () => {
    const { title } = useParams();
    const album = getAlbum(title);

    if (!album) {
        return (
            <main>
              <h2>Pelicula no encontrada</h2>
            </main>
          );
        } else {
            return(
                <>
        <div className={albumModal ? "modal show" : "modal"}>
            <img src={albumSrc}></img>
            <i className="arrows icon-arrow-left2" onClick={() => setAlbumModal(false)}></i>
        </div>
        <figure>
            <img src={album.image} alt={album.title} onClick={() => getImg(album.image)}/>
            <span className="material-symbols-outlined" onClick={() => getImg(album.image)}>share</span>
                <div className="info">
                    <h4>{album.type}</h4>
                    <div className="title">
                        {album.favs === "⭐"
                        ? <h2 className="favs">{album.title}</h2>
                        : <h2>{album.title}</h2>}
                    </div>
                    <div className="details">
                        <h3>{album.artist}</h3>
                        <p>{album.releasedate} · {album.songs} songs · {album.duration}</p>
                        {album.hr ? <p className="hr">*Highly Recommended*</p> : ""}
                    </div>
                </div>
        </figure>
        </>
            )
        }
    }
