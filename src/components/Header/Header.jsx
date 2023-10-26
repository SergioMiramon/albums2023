import "./Header.css";
import { NavLink } from 'react-router-dom'
export const Header = ({headerImg, headerAlt}) => {
    return (
        <header>
            <NavLink to="/" id="logo">
                <img className="logo" src={headerImg} alt={headerAlt}/>
            </NavLink>
            <nav>
            <ul>
                <li>
                    <NavLink to="/albums" id="albumslink">Albums</NavLink>
                </li>
                <li>
                    <NavLink to="/favs" id='favslink'>Favs</NavLink>
                </li>
                <li>
                    <NavLink to="/" id='sliderlink'>Slider</NavLink>
                </li>
            </ul>
            </nav>
        </header>
    )
};