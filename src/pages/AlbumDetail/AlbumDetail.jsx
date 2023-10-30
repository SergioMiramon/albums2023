import { getAlbum } from '../../data/albums2023';
import './AlbumDetail.css';
import { useParams } from 'react-router-dom';

export const AlbumDetail = () => {
  const { title } = useParams();
  const album = getAlbum(title);
  if (!album) {
    return (
      <main>
        <p className="nf">{title} not available</p>
      </main>
    );
  } else {
    return (
      <>
        <main>
          <section className="album-detail">
            <img src={album.image} alt={album.title} />
            <div className="info-detail">
              <h4>{album.type}</h4>
              <div className="title-detail">
                {album.favs === '⭐' ? (
                  <a className="link" href={album.link} target="blank">
                    <h2 className="favs-title">{album.title}</h2>
                  </a>
                ) : (
                  <h2>{album.title}</h2>
                )}
              </div>
              <div className="details-detail">
                <h3>{album.artist}</h3>
                <p>
                  {album.releasedate} · {album.songs} songs · {album.duration}
                </p>
                {album.hr ? <p className="hr">*Highly Recommended*</p> : ''}
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
};
