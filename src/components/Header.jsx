import {FaTimes, TfiMenuAlt} from "react-icons/all";

const Header = () => {
    const openMenu = () => {
        const sidemenu = document.getElementById("sidemenu");
        sidemenu.style.right = "0";
    };
    const closeMenu = () => {
        const sidemenu = document.getElementById("sidemenu");
        sidemenu.style.right = "-200px";
    };
    return (
        <>
            <div id="header">
                <div className="container">
                    <nav>
                        <p className="logo">
                            <span>P</span>arth.
                        </p>

                        {/* <img src="images/my_logo.png" className="logo" />  */}
                        <ul id="sidemenu">
                            <FaTimes
                                className="fas fa-times"
                                onClick={() => closeMenu()}
                            />
                            <li>
                                <a href="#header">Home</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#skills">Skills</a>
                            </li>
                            <li>
                                <a href="#portfolio">Portfolio</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                        <TfiMenuAlt
                            className="side-icon"
                            style={{cursor: "pointer"}}
                            onClick={() => openMenu()}
                        />
                    </nav>
                    <div className="header-text">
                        <p>Software Developer</p>
                        <h1>
                            Hi, <span>Parth</span> Shah here.
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
