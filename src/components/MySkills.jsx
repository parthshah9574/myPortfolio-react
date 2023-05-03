import {
    FaBootstrap,
    FaCss3Alt,
    FaHtml5,
    FaReact,
    FaVuejs,
} from "react-icons/fa";
import {SiJavascript} from "react-icons/si";

const MySkills = () => {
    return (
        <>
            {" "}
            <div id="myskills">
                <div className="container">
                    <h1 className="sub-title">My skills</h1>
                    <div className="skill-list">
                        <div>
                            <i className="fa-sharp fa-solid fa-code"></i>
                            <h2>Web Development</h2>
                        </div>
                        <div>
                            <i className="fa-brands fa-react"></i>
                            <h2>Application Development</h2>
                        </div>
                        <div>
                            <i className="fa-solid fa-user-secret"></i>
                            <h2>Cyber Security Tools</h2>
                        </div>

                        <div>
                            <i className="fa-solid fa-camera"></i>
                            <h2>Photography</h2>
                        </div>
                    </div>
                    <h1 className="sub-title2">My skill-set</h1>
                    <div className="skill-list2">
                        <div className="skill-list2">
                            <div className="icons-div">
                                <FaReact className="icons" />
                            </div>
                            <div>
                                <FaVuejs className="icons" />
                            </div>
                            <div>
                                <FaHtml5 className="icons" />
                            </div>
                            <div>
                                <FaCss3Alt className="icons" />
                            </div>
                            <div>
                                <SiJavascript className="icons" />
                            </div>
                            <div>
                                <FaBootstrap className="icons" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MySkills;
