import "./Monthly.css";
import { dateSort } from "../../data/albums2023";
import { AlbumGrid } from "../../components/AlbumGrid/AlbumGrid";

export const Monthly = () => {
    return (
        <section>
            <div className="all">
            {dateSort.map((album) => (
                <AlbumGrid album={album} key={album.id}/>
            ))}
            </div>
        </section>
    )
}