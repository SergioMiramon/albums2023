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
            <img src={albumSrc}/>
            <i className="arrows icon-arrow-left2" onClick={() => setAlbumModal(false)}></i>
        </div>
        <figure>
            <img src={album.image} alt={album.title} onClick={() => getImg(album.image)}/>
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
                    </div>
                </div>
        </figure>
        </>
    )
}
