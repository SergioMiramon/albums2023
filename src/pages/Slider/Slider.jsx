import { sliderAlbums } from "../../data/slider"
import "./Slider.css"
export const Slider = () => {

    return (
        <section className="slider-section">
            {sliderAlbums.map((slider) => (
            <div key={slider.id}>
            <img src={slider.image} alt={slider.title}/>
            <p>{slider.title}</p>
            </div>
          ))}
        </section>
    )
}