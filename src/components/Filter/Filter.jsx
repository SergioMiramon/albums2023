import "./Filter.css";
import { genreFilter, typeFilter } from "../../data/albums2023";

export const Filter = ({onTypeSelected, onGenreSelected}) => {

    const onTypeValue = (e) => {
        onTypeSelected(e.target.value)
    }
    
    const onGenreValue = (e) => {
        onGenreSelected(e.target.value)
    }

    return (
            <div className="filters">
                <select className="filter-type" onChange={onTypeValue}>
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
            </div>
    )
}