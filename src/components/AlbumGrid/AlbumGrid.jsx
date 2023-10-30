import { useState } from "react"
import "./AlbumGrid.css"

export const AlbumGrid = ({album}) => {
    const [albumModal, setAlbumModal] = useState(false)
    const [albumSrc, setAlbumSrc] = useState('')
    
    const getImg = (image) =>{
        setAlbumSrc(image)
        setAlbumModal(true)
    }

    return (
      <>
        <div className={albumModal ? "modal show" : "modal"}>
          <img src={albumSrc} />
          <i className="arrows" onClick={() => setAlbumModal(false)}></i>
        </div>
        <figure>
          <img
            src={album.image}
            alt={album.title}
            className="album-cover"
            onClick={() => getImg(album.image)}
          />
          <div className="info">
            <h4>{album.type}</h4>
            <div className="title">
              {album.favs === "⭐" ? (
                <a className="link" href={album.link} target="blank">
                <h2 className="favs-title">{album.title}</h2>
                </a>
              ) : (
                <h2>{album.title}</h2>
              )}
            </div>
            <div className="details">
              <h3>{album.artist}</h3>
              <p>
                {album.releasedate} · {album.songs} songs · {album.duration}
              </p>
            </div>
          </div>
        </figure>
      </>
    );
}
