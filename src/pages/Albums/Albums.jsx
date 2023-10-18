import "./Albums.css";
import { albumsTot, dateSort } from "../../data/albums2023";
import { AlbumGrid } from "../../components/AlbumGrid/AlbumGrid";
import { Filter } from "../../components/Filter/Filter";
import { useState } from "react";
export const Albums = () => {
    const [typeValue,setTypeValue] = useState("")
    const [genreValue,setGenreValue] = useState("")
    const [albumsSort, setAlbumsSort] = useState(false)
    // const [albumsCount, setAlbumsCount] = useState(0)

    const onTypeSelected = (typeSelected) => {
        setTypeValue(typeSelected)
    }

    const onGenreSelected = (genreSelected) => {
        setGenreValue(genreSelected)
    }
    
    const onAlbumsSort = () => {
        setAlbumsSort( albumsSort ? dateSort : dateSort.reverse())
        // setAlbumsSort(dateSort.Sort())
        console.log(onAlbumsSort)
    }

    // const onAlbumsCount = () => {
    //   dateSort.length
    // }
    // albumsCount

    // console.log(dateSort.length)

    return (
      <section>
        <Filter
          onTypeSelected={onTypeSelected}
          onGenreSelected={onGenreSelected}
        />
        <button className="reverse-filter" onClick={onAlbumsSort}>||||||</button>
        <div className="album-count">{`(${albumsTot})`}</div>
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