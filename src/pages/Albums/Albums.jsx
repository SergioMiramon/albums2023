import "./Albums.css";
import { dateSort } from "../../data/albums2023";
import { AlbumGrid } from "../../components/AlbumGrid/AlbumGrid";
import { Filter } from "../../components/Filter/Filter";
import { useState } from "react";

export const Albums = () => {
    const [typeValue,setTypeValue] = useState("")
    const [genreValue,setGenreValue] = useState("")

    const onTypeSelected = (typeSelected) => {
        setTypeValue(typeSelected)
    }

    const onGenreSelected = (genreSelected) => {
        setGenreValue(genreSelected)
    }

    return (
      <section>
        <Filter
          onTypeSelected={onTypeSelected}
          onGenreSelected={onGenreSelected}
        />
        <div className="all">
          {typeValue == "" && genreValue == ""
            ? dateSort.map((album) => (
                <AlbumGrid album={album} key={album.id} />
              ))
            : typeValue == "" || genreValue == ""
            ? dateSort
                .filter(
                  (album) =>
                    album.type == typeValue || album.genre == genreValue
                )
                .map((album) => <AlbumGrid album={album} key={album.id} />)
            : genreValue && typeValue
            ? dateSort
                .filter(
                  (album) =>
                    album.type == typeValue && album.genre == genreValue
                )
                .map((album) => <AlbumGrid album={album} key={album.id} />)
            : dateSort
                .filter(
                  (album) =>
                    album.type == typeValue ||
                    album.genre == genreValue
                )
                .map((album) => <AlbumGrid album={album} key={album.id} />)}
        </div>
      </section>
    );
}