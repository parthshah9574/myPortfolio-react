import {TfiMenuAlt} from "react-icons/all";

const Header = () => {
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
                            <i className="fas fa-times"></i>
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
                        <TfiMenuAlt className="side-icon" />
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
