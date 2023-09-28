import "./Header.css";
import { NavLink } from 'react-router-dom'
export const Header = ({headerImg, headerAlt}) => {
    return (
        <header>
            <a href="#" id="logo">
                <img className="logo" src={headerImg} alt={headerAlt}/>
            </a>
            <nav>
            <ul>
                <li>
                    <NavLink to="/" id="monthlylink">Monthly</NavLink>
                </li>
                <li>
                    <NavLink to="/favs" id='favslink'>Favs</NavLink>
                </li>
                
            </ul>
            </nav>
        </header>
    )
};