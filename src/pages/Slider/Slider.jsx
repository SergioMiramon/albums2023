import { favSlider } from "../../data/slider"
import "./slider.css"
export const Slider = () => {

    return (
        <section className="slider-section">
            {favSlider.map((slider) => (
            <img key={slider.id} src={slider.image} alt={slider.title}/>
          ))}
        </section>
    )
}