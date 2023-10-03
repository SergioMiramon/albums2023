import "./Monthly.css";
import { dateSort, genreFilter, typeFilter } from "../../data/albums2023";
import { AlbumGrid } from "../../components/AlbumGrid/AlbumGrid";
import { useState } from "react";

export const Monthly = () => {
    // const [textValue,setTextValue]

    const onFilterValue = (e) => {
        console.log(e.target.value)
    }

    return (
        <section>
            <div className="filter">
                <select className="filter-type" onChange={onFilterValue}>
                    {typeFilter.map((type) => (
                        <option value={`${type}`} key={type}>{`${type}`}</option>
                    ))}
                </select>
                <select className="filter-genre" onChange={onFilterValue}>
                    {genreFilter.map((genre) => (
                        <option value={`${genre}`} key={genre}>{`${genre}`}</option>
                    ))}
                </select>
            </div>
            <div className="all">
            {dateSort.map((album) => (
                <AlbumGrid album={album} key={album.id}/>
            ))}
            </div>
        </section>
    )
}