import './Favs.css';
import { favsTot, favAlbums } from '../../data/albums2023';
import { AlbumGrid } from '../../components/AlbumGrid/AlbumGrid';
import { NavLink } from 'react-router-dom';

export const Favs = () => {
  return (
    <section className="favs-section">
      <section className="favs-header">
        <h1>Fav Albums</h1>
        <h1 className="favs-count">{`(${favsTot})`}</h1>
      </section>
      <section className="favs">
        {favAlbums.map((album) => (
          <NavLink to={`/favs/${album.title}`} key={album.id}>
            <AlbumGrid album={album} />
          </NavLink>
        ))}
      </section>
    </section>
  );
};
