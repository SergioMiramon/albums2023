import "./Months.css";
import { aprilAlbums, augustAlbums, februaryAlbums, januaryAlbums, julyAlbums, juneAlbums, marchAlbums, mayAlbums, septemberAlbums } from "../../data/albums2023";
import { AlbumGrid } from "../AlbumGrid/AlbumGrid";

export const Months = () => {
    return (
        <div className="months">
            <div className="january">
            <h1>January</h1>
            {januaryAlbums.map((album) => (
                <AlbumGrid album={album} key={album.id}/>
            ))}
            </div>
            <div className="february">
            <h1>February</h1>
            {februaryAlbums.map((album) => (
                <AlbumGrid album={album} key={album.id}/>
            ))}
            </div>
            <div className="march">
            <h1>March</h1>
            {marchAlbums.map((album) => (
                <AlbumGrid album={album} key={album.id}/>
            ))}
            </div>
            <div className="april">
            <h1>April</h1>
            {aprilAlbums.map((album) => (
                <AlbumGrid album={album} key={album.id}/>
            ))}
            </div>
            <div className="may">
            <h1>May</h1>
            {mayAlbums.map((album) => (
                <AlbumGrid album={album} key={album.id}/>
            ))}
            </div>
            <div className="june">
            <h1>June</h1>
            {juneAlbums.map((album) => (
                <AlbumGrid album={album} key={album.id}/>
            ))}
            </div>
            <div className="july">
            <h1>July</h1>
            {julyAlbums.map((album) => (
                <AlbumGrid album={album} key={album.id}/>
            ))}
            </div>
            <div className="august">
            <h1>August</h1>
            {augustAlbums.map((album) => (
                <AlbumGrid album={album} key={album.id}/>
            ))}
            </div>
            <div className="september">
            <h1>September</h1>
            {septemberAlbums.map((album) => (
                <AlbumGrid album={album} key={album.id}/>
            ))}
            </div>
        </div>
    )
}