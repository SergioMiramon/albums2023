import "./Filter.css";
import { artistFilter, genreFilter, typeFilter } from "../../data/albums2023";
import { useState } from "react";

export const Filter = ({onFilterSelected, onGenreSelected, onArtistSelected}) => {
    // const [textValue,setTextValue]

    const onFilterValue = (e) => {
        console.log(e.target.value)
        onFilterSelected(e.target.value)
    }
    
    const onGenreValue = (e) => {
        console.log(e.target.value)
        onTypeSelected(e.target.value)
    }

    const onArtistValue = (e) => {
        console.log(e.target.value)
        onArtistSelected(e.target.value)
    }

    return (
            <div className="filter">
                <select className="filter-type" onChange={onFilterValue}>
                        <option value="">Type</option>
                    {typeFilter.map((type) => (
                        <option value={`${type}`} key={type}>{`${type}`}</option>
                    ))}
                </select>
                <select className="filter-genre" onChange={onGenreValue}>
                    <option value="">Genre</option>
                    {genreFilter.map((genre) => (
                        <option value={`${genre}`} key={genre}>{`${genre}`}</option>
                    ))}
                </select>
                <select className="filter-artist" onChange={onArtistValue}>
                    <option value="">Artist</option>
                    {artistFilter.map((artist) => (
                        <option value={`${artist}`} key={artist}>{`${artist}`}</option>
                    ))}
                </select>
            </div>
    )
}