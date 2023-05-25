import {FaExternalLinkAlt, IoMdArrowRoundBack} from "react-icons/all";
import {Link} from "react-router-dom";

const ReactProjects = () => {
    return (
        <>
            <div id="portfolio">
                <div className="back-icon">
                    <Link to="/Portfolio">
                        <button className="back-btn">
                            <IoMdArrowRoundBack />
                        </button>
                    </Link>
                </div>
                <div className="container">
                    <h1 className="sub-title">My React Projects</h1>
                    <div className="work-list">
                        <div className="work">
                            <img
                                src="../../public/assets/images/backroad_app.png"
                                alt=""
                            />
                            <div className="layer">
                                <h3>Backroads Tours</h3>
                                <p>
                                    Developed frontend for Backroads Tours
                                    project
                                </p>
                                <a href="https://react-backroadapp.netlify.app/">
                                    <FaExternalLinkAlt className="link-icon" />
                                </a>
                            </div>
                        </div>
                        <div className="work">
                            <img
                                src="../../public/assets/images/grocery_bud.png"
                                alt=""
                            />
                            <div className="layer">
                                <h3>Grocery-bud</h3>
                                <p>Create your grocery list</p>
                                <a href="https://grocery-list-v.netlify.app/">
                                    <FaExternalLinkAlt className="link-icon" />
                                </a>
                            </div>
                        </div>
                        <div className="work">
                            <img
                                src="../../public/assets/images/tours.png"
                                alt=""
                            />
                            <div className="layer">
                                <h3>Display-tours-react</h3>
                                <p></p>
                                <a href="https://display-tours-react.netlify.app/">
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
