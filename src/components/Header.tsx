import "./Header.css";

function Header() {
    return  (
        <header className="header">
           <span className="logo">Teachinder</span>
            <nav className="nav">
                <a href="#teachers">Teachers</a>
                <a href="#statistics">Statistics</a>
                <a href="#favorites">Favorites</a>
                <a href="#about">About</a>
            </nav>
        </header>
    )
}

export default Header;