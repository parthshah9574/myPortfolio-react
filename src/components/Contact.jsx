import {
    FaLinkedin,
    FaAngleUp,
    /* FiPhone, */ HiMailOpen,
    FaGithub,
} from "react-icons/all";

const Contact = () => {
    return (
        <>
            <div id="contact">
                <div className="container">
                    <div className="contact-heading-text-div">
                        <h1 className="contact-heading-text" style={{}}>
                            Contact Me
                        </h1>
                        <p className="contact-header-detail-text ">
                            You can contact me at the places mentioned below. I
                            will try to get back to you as fast as I can.{" "}
                        </p>
                        <div className="social-icons">
                            <div>
                                <a
                                    href="https://www.linkedin.com/in/parthshah1398/"
                                    className="linkedIn"
                                >
                                    <FaLinkedin />
                                </a>
                            </div>

                            <a href="https://github.com/parthshah9574">
                                <FaGithub />
                            </a>
                            <div>
                                <a
                                    href="mailto:shah.parth1398@gmail.com"
                                    className="mail"
                                >
                                    <HiMailOpen />
                                </a>
                            </div>
                        </div>
                        <div>
                            <a
                                href="https://drive.google.com/file/d/1JQT7gTxa-qvIQigOxFQjP0CnsRSKyXgl/view?usp=sharing"
                                className="btn btn2"
                            >
                                My Resume
                            </a>
                        </div>
                        <br></br>
                    </div>
                </div>

                <a href="#header" className="top-link">
                    <FaAngleUp />
                </a>
            </div>
        </>
    );
};

export default Contact;
