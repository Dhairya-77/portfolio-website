import logo from '../assets/db_icon.png'
import { useState } from 'react'

const Header = ()=>{

    const [isMenuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }

    const closeMenu = () => {
        setMenuOpen(false);
    }

    return(
        <header className={`header ${isMenuOpen ? 'expanded' : ''}`}>

            <div className="nav-left">
                <img src={logo} alt="logo" className="logo" />
                <div className="header-title">
                    <div className="top-title">Dhairya</div>
                    <div className="bottom-title">Bhoya</div>
                </div>
            </div>

            <button className="menu-btn" onClick={toggleMenu}>
                ☰
            </button>

            <nav className={` nav ${isMenuOpen ? 'open' : ''}`} >
                <ul className="nav-right">
                    <li><a href="#home" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                    <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                </ul>
            </nav>

        </header>
    ) 
}

export default Header