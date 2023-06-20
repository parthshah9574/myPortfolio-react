import {FaExternalLinkAlt} from "react-icons/fa";
import {IoMdArrowRoundBack} from "react-icons/io";
import {Link} from "react-router-dom";

const ReactProjects = () => {
    return (
        <>
            <div id="portfolio">
                <div className="back-icon">
                    <Link to="/src/components/Portfolio.jsx">
                        <button
                            className="back-btn"
                            style={{cursor: "pointer"}}
                            onClick={() => window.history.back()}
                        >
                            <IoMdArrowRoundBack />
                        </button>
                    </Link>
                </div>
                <div className="container">
                    <h1 className="sub-title">My React Projects</h1>
                    <div className="work-list">
                        <div className="work">
                            <img src="/assets/images/backroad_app.png" alt="" />
                            <div className="layer">
                                <h3>Backroads Tours</h3>
                                <p>
                                    Developed frontend for Backroads Tours
                                    project
                                </p>
                                <a
                                    href="https://react-backroadapp.netlify.app/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaExternalLinkAlt className="link-icon" />
                                </a>
                            </div>
                        </div>
                        <div className="work">
                            <img src="/assets/images/grocery_bud.png" alt="" />
                            <div className="layer">
                                <h3>Grocery-bud</h3>
                                <p>Create your grocery list</p>
                                <a
                                    href="https://grocery-list-v.netlify.app/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaExternalLinkAlt className="link-icon" />
                                </a>
                            </div>
                        </div>
                        <div className="work">
                            <img src="/assets/images/tours.png" alt="" />
                            <div className="layer">
                                <h3>Display-tours-react</h3>
                                <p></p>
                                <a
                                    href="https://display-tours-react.netlify.app/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaExternalLinkAlt className="link-icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReactProjects;
