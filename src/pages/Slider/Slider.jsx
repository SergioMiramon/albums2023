import { useState } from "react";
import { shuffleSlider } from "../../data/albums2023";
import "./Slider.css";
export const Slider = () => {
  const [albumSlider, setAlbumSlider] = useState(false);
  const [albumSrc, setAlbumSrc] = useState("");

  const getImgSlider = (image) => {
    setAlbumSrc(image);
    setAlbumSlider(true);
  };
  
  return (
    <section className="slider-section">
      <div className={albumSlider ? "modal-slider show" : "modal-slider"}>
        <img src={albumSrc} />
        <i
          className="arrows icon-arrow-left2"
          onClick={() => setAlbumSlider(false)}
        ></i>
      </div>
      {shuffleSlider.map((album) => (
        <div key={album.id} onClick={() => getImgSlider(album.image)}>
          <img src={album.image} alt={album.title} />
          <p>{album.title}</p>
        </div>
      ))}
    </section>
  );
};
