import "./Monthly.css";
import { dateSort } from "../../data/albums2023";
import { AlbumGrid } from "../../components/AlbumGrid/AlbumGrid";
import { Filter } from "../../components/Filter/Filter";
import { useState } from "react";

export const Monthly = () => {
    const [typeValue,setTypeValue] = useState("")
    const [genreValue,setGenreValue] = useState("")
    const [artistValue,setArtistValue] = useState("")
    console.log(typeValue)

    const onFilterSelected = (filterSelected) => {
        setTypeValue(filterSelected)
        // setGenreValue(filterSelected)
        // setArtistValue(filterSelected)
        console.log(filterSelected)
    }

    const onGenreSelected = (genreSelected) => {
        setGenreValue(genreSelected)
        console.log(genreSelected)
    }

    const onArtistSelected = (artistSelected) => {
        setArtistValue(artistSelected)
        console.log(artistSelected)
    }

    return (
      <section>
        <Filter onFilterSelected={onFilterSelected} />
        <div className="all">
          {typeValue === ""
            ? dateSort.map((album) => (
                <AlbumGrid album={album} key={album.id} />
              ))
            : dateSort
                .filter((album) => album.type == typeValue && album.genre == genreValue && album.artist == artistValue)
                .map((album) => <AlbumGrid album={album} key={album.id} />)}
        </div>
      </section>
    );
}