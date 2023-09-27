import "./Header.css";
export const Header = ({headerImg, headerAlt}) => {
    return (
        <header>
            <a href="#" id="logo">
                <img className="logo" src={headerImg} alt={headerAlt}/>
            </a>
        </header>
    )
};
