import "./Filter.css";
import { genreFilter, typeFilter } from "../../data/albums2023";
import { useState } from "react";

export const Filter = ({onFilterSelected}) => {
    // const [textValue,setTextValue]

    const onFilterValue = (e) => {
        console.log(e.target.value)
        onFilterSelected(e.target.value)
    }

    return (
            <div className="filter">
                <select className="filter-type" onChange={onFilterValue}>
                        <option value="all">All</option>
                    {typeFilter.map((type) => (
                        <option value={`${type}`} key={type}>{`${type}`}</option>
                    ))}
                </select>
                <select className="filter-genre" onChange={onFilterValue}>
                    <option value="all">All</option>
                    {genreFilter.map((genre) => (
                        <option value={`${genre}`} key={genre}>{`${genre}`}</option>
                    ))}
                </select>
            </div>
    )
}