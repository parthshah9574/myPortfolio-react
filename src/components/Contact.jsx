import {
    FaLinkedin,
    FaAngleUp,
    /* FiPhone, HiMailOpen, */ FaGithub,
} from "react-icons/all";

const Contact = () => {
    return (
        <>
            <div id="contact">
                <div className="container">
                    <div className="row">
                        <div className="contact-left">
                            <h1 className="sub-title">Contact Me</h1>
                            {/* 
                            <p>
                                <HiMailOpen className="icons" />
                                shah.parth1398@gmail.com
                            </p>
                            <p>
                                <FiPhone className="icons" />
                                647-818-7065
                            </p> */}
                            <div className="social-icons">
                                <a href="https://www.linkedin.com/in/parthshah1398/">
                                    <FaLinkedin />
                                </a>
                            </div>
                            <div className="social-icons">
                                <a href="https://github.com/parthshah9574">
                                    <FaGithub />
                                </a>
                            </div>
                            <a
                                href="https://drive.google.com/file/d/1zrW8XMf-w76Pdc-NugAu1ccBEbRdbApX/view?usp=sharing"
                                className="btn btn2"
                            >
                                My Resume
                            </a>
                        </div>
                        <div className="contact-right">
                            <form name="submit-to-google-sheet">
                                <input
                                    type="text"
                                    name="Name"
                                    placeholder="Your Name"
                                    required
                                />
                                <input
                                    type="email"
                                    name="Email"
                                    placeholder="Your Email"
                                    required
                                />
                                <textarea
                                    name="Message"
                                    rows="6"
                                    placeholder="Your Message"
                                ></textarea>
                                <span id="msg"></span>
                                <button type="submit" className="btn btn2">
                                    Submit
                                </button>
                            </form>
                        </div>
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
