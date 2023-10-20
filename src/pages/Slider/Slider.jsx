
import { shuffleSlider } from "../../data/albums2023";
import "./Slider.css"
export const Slider = () => {

    return (
      <section className="slider-section">
        {shuffleSlider.map((album) => (
          <div key={album.id}>
            <img src={album.image} alt={album.title} />
            <p>{album.title}</p>
          </div>
        ))}
      </section>
    );
}