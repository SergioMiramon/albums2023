import './Favs.css';
import { favsTot, favAlbums } from '../../data/albums2023';
import { AlbumGrid } from '../../components/AlbumGrid/AlbumGrid';
import { NavLink } from 'react-router-dom';

export const Favs = () => {
  return (
    <main>
      <section className="favs-section">
      <h1>Fav Albums: {`(${favsTot})`}</h1>
        <section className="favs">
          {favAlbums.map((album) => (
            <NavLink to={`/favs/${album.title}`} key={album.id}>
              <AlbumGrid album={album} />
            </NavLink>
          ))}
        </section>
      </section>
    </main>
  );
};
