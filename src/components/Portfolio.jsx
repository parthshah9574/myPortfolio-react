import {FaExternalLinkAlt} from "react-icons/fa";
import {Link} from "react-router-dom";
const Portfolio = () => {
    return (
        <>
            <div id="portfolio">
                <div className="container">
                    <h1 className="sub-title">My work</h1>
                    <div className="work-list">
                        <div className="work">
                            <img src="/assets/images/Nextfab.png" alt="" />
                            <div className="layer">
                                <h3>Nextfab Application</h3>
                                <p>
                                    • An application for the organization`s
                                    employees for labor jobs. <br />
                                    • Technologies used: React Native, nodejs,
                                    SQL, Figma for UI/UX design. <br />
                                </p>
                                <a href="https://www.figma.com/file/DOhWmgoMn2CPtITRZJUxVc/NextFeb?node-id=0%3A1&t=fpAjfgN5MJaglpeL-1">
                                    <FaExternalLinkAlt className="link-icon" />
                                </a>
                            </div>
                        </div>
                        <div className="work">
                            <img src="/assets/images/dice_game.jpg" alt="" />
                            <div className="layer">
                                <h3>Dice Game</h3>
                                <p>
                                    Developed dice game to practice JavaScript
                                </p>
                                <a href="https://parthshah9574.github.io/Dice_Game/">
                                    <FaExternalLinkAlt className="link-icon" />
                                </a>
                            </div>
                        </div>
                        <div className="work">
                            <img src="/assets/images/backroad_app.png" alt="" />
                            <div className="layer">
                                <h3>My React Projects</h3>
                                <p>Fundamental projects for React.js</p>
                                {/*  <a href="https://react-backroadapp.netlify.app/">
                                    <FaExternalLinkAlt className="link-icon" />
                                </a> */}
                                <Link to="/ReactProjects">
                                    <FaExternalLinkAlt className="link-icon" />
                                </Link>
                            </div>
                        </div>
                        <div className="work">
                            <img
                                src="/assets/images/power ranger4.jpg"
                                alt=""
                            />
                            <div className="layer">
                                <h3>Creativity</h3>
                                <p>
                                    Explore my creativity for design and 3D
                                    projects.
                                </p>
                                <a href="https://drive.google.com/drive/folders/1g9DK6hV8xFKD6qJGZo9r2_WpFgX4pANg?usp=sharing">
                                    <FaExternalLinkAlt className="link-icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- <a href="#" className="btn">See more</a> --> */}
            </div>
        </>
    );
};

export default Portfolio;
