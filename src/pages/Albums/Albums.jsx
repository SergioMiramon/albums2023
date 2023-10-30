import './Albums.css';
import { dateSort } from '../../data/albums2023';
import { AlbumGrid } from '../../components/AlbumGrid/AlbumGrid';
import { Filter } from '../../components/Filter/Filter';
import { useEffect, useState } from 'react';
export const Albums = () => {
  const [typeValue, setTypeValue] = useState('');
  const [genreValue, setGenreValue] = useState('');
  const [albumsSort, setAlbumsSort] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  const albumsTot = dateSort.length;
  const albumsPerPage = 7;

  const paginationAlbums = () => {
    return dateSort.slice(currentPage, currentPage + albumsPerPage);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + albumsPerPage);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - albumsPerPage);
  };

  const onTypeSelected = (typeSelected) => {
    setTypeValue(typeSelected);
  };

  const onGenreSelected = (genreSelected) => {
    setGenreValue(genreSelected);
  };

  useEffect(() => {
    paginationAlbums();
  }, [currentPage]);

  return (
    <section className="albums-section">
      <section className="filter-section">
        <Filter onTypeSelected={onTypeSelected} onGenreSelected={onGenreSelected} />
        <div className="reverse-filter">
          {typeValue == '' && genreValue == '' ? (
            ''
          ) : !albumsSort ? (
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
      <section className="albums">
        {albumsSort
          ? typeValue == '' && genreValue == ''
            ? paginationAlbums().map((album) => (
                <AlbumGrid album={album} key={album.id} />
              ))
            : typeValue == '' || genreValue == ''
            ? dateSort
                .filter((album) => album.type == typeValue || album.genre == genreValue)
                .map((album) => <AlbumGrid album={album} key={album.id} />)
            : genreValue && typeValue
            ? dateSort
                .filter((album) => album.type == typeValue && album.genre == genreValue)
                .map((album) => <AlbumGrid album={album} key={album.id} />)
            : dateSort
                .filter((album) => album.type == typeValue || album.genre == genreValue)
                .map((album) => <AlbumGrid album={album} key={album.id} />)
          : typeValue == '' && genreValue == ''
          ? paginationAlbums()
              .map((album) => <AlbumGrid album={album} key={album.id} />)
              .reverse()
          : typeValue == '' || genreValue == ''
          ? dateSort
              .filter((album) => album.type == typeValue || album.genre == genreValue)
              .map((album) => <AlbumGrid album={album} key={album.id} />)
              .reverse()
          : genreValue && typeValue
          ? dateSort
              .filter((album) => album.type == typeValue && album.genre == genreValue)
              .map((album) => <AlbumGrid album={album} key={album.id} />)
              .reverse()
          : dateSort
              .filter((album) => album.type == typeValue || album.genre == genreValue)
              .map((album) => <AlbumGrid album={album} key={album.id} />)}
      </section>
      <section className="pagination">
        {currentPage > 1 && typeValue == '' && genreValue == '' ? (
          <img
            onClick={prevPage}
            src="/icons/images/arrows/triangular-arrow.png"
            className="prev-page"
          />
        ) : (
          ''
        )}
        {currentPage < albumsTot - albumsPerPage &&
        typeValue == '' &&
        genreValue == '' ? (
          <img
            onClick={nextPage}
            src="/icons/images/arrows/triangular-arrow.png"
            className="next-page"
          />
        ) : (
          ''
        )}
      </section>
    </section>
  );
};
