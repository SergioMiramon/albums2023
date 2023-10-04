import "./Monthly.css";
import { dateSort } from "../../data/albums2023";
import { AlbumGrid } from "../../components/AlbumGrid/AlbumGrid";
import { Filter } from "../../components/Filter/Filter";
import { useState } from "react";

export const Monthly = () => {
    const [typeValue,setTypeValue] = useState("all")

    // const filteredType = 

    const onFilterSelected = (filterSelected) => {
        setTypeValue(filterSelected)
    }

    return (
        <section>
            <Filter onFilterSelected={onFilterSelected}/>
            <div className="all">
            {dateSort.map((album) => (
                <AlbumGrid album={album} key={album.id}/>
            ))}
            </div>
        </section>
    )
}