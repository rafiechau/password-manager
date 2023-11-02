import { Link } from "react-router-dom";
import Classes from "../styles/styles.module.scss";
import { useState } from "react";

function Navigation(){
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }
    return(
        <header className={Classes.header}>
            <div className={Classes.logo}>
                <Link to={'/'}>Password Manager</Link>
            </div>
            <nav className={Classes.navigation}>
                <ul className={`${Classes.menu} ${isMenuOpen ? 'slide' : ''}`}>
                    <li><Link to={'/family'} >Family</Link></li>
                    <li><Link to={'/work'} >Work</Link></li>
                    <li><Link to={'/personal'}>Personal</Link></li>
                </ul>
                {/* <div className={Classes.menutoggle}>
                <input type="checkbox" id="menuToggle" className={Classes.checkbox} onClick={toggleMenu}/>
                <span className={Classes.bar}></span>
                <span className={Classes.bar}></span>
                <span className={Classes.bar}></span>
            </div> */}
            </nav>
        </header>
    )
}

export default Navigation;