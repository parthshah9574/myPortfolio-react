import React from "react";
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
                                src="src/assets/images/backroad_app.png"
                                alt=""
                            />
                            <div className="layer">
                                <h3>Backroads Tours</h3>
                                <p>
                                    Developed frontend for 'Backroads Tour'
                                    project
                                </p>
                                <a href="https://react-backroadapp.netlify.app/">
                                    <FaExternalLinkAlt className="link-icon" />
                                </a>
                            </div>
                        </div>
                        <div className="work">
                            <img
                                src="/src/assets/images/grocery_bud.png"
                                alt=""
                            />
                            <div className="layer">
                                <h3>Backroads Tours</h3>
                                <p>Grocery-bud</p>
                                <a href="https://react-backroadapp.netlify.app/">
                                    <FaExternalLinkAlt className="link-icon" />
                                </a>
                            </div>
                        </div>
                        <div className="work">
                            <img src="images/backroad_app.png" alt="" />
                            <div className="layer">
                                <h3>Backroads Tours</h3>
                                <p>
                                    Developed frontend for 'Backroads Tour'
                                    project
                                </p>
                                <a href="https://react-backroadapp.netlify.app/">
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

export default ReactProjects;
