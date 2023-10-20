import "./Albums.css";
import { albumsTot, dateSort } from "../../data/albums2023";
import { AlbumGrid } from "../../components/AlbumGrid/AlbumGrid";
import { Filter } from "../../components/Filter/Filter";
import { useState } from "react";
export const Albums = () => {
    const [typeValue,setTypeValue] = useState("")
    const [genreValue,setGenreValue] = useState("")
    const [albumsSort, setAlbumsSort] = useState(true)

    const onTypeSelected = (typeSelected) => {
        setTypeValue(typeSelected)
    }

    const onGenreSelected = (genreSelected) => {
        setGenreValue(genreSelected)
    }
    return (
      <section>
        <section className="filter-section">
          <Filter
            onTypeSelected={onTypeSelected}
            onGenreSelected={onGenreSelected}
          />
          <div className="reverse-filter">
            {!albumsSort ? (
              <img
                onClick={() => setAlbumsSort(!albumsSort)}
                src="/icons/images/arrows/sort-ascending.png"
                alt="ascending-arrow"
              />
            ) : (
              <img
                onClick={() => setAlbumsSort(!albumsSort)}
                src="/icons/images/arrows/sort-descending.png"
                alt="ascending-arrow"
              />
            )}
          </div>
        </section>
        <div className="all">
          {albumsSort
            ? typeValue == "" && genreValue == ""
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
                      album.type == typeValue || album.genre == genreValue
                  )
                  .map((album) => <AlbumGrid album={album} key={album.id} />)
            : typeValue == "" && genreValue == ""
            ? dateSort
                .map((album) => <AlbumGrid album={album} key={album.id} />)
                .reverse()
            : typeValue == "" || genreValue == ""
            ? dateSort
                .filter(
                  (album) =>
                    album.type == typeValue || album.genre == genreValue
                )
                .map((album) => <AlbumGrid album={album} key={album.id} />)
                .reverse()
            : genreValue && typeValue
            ? dateSort
                .filter(
                  (album) =>
                    album.type == typeValue && album.genre == genreValue
                )
                .map((album) => <AlbumGrid album={album} key={album.id} />)
                .reverse()
            : dateSort
                .filter(
                  (album) =>
                    album.type == typeValue || album.genre == genreValue
                )
                .map((album) => <AlbumGrid album={album} key={album.id} />)
                .reverse()}
        </div>
      </section>
    );
}