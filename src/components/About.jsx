import {useState} from "react";

const About = () => {
    const [activeTab, setActiveTab] = useState({
        skillActive: true,
        experienceActive: false,
        educationActive: false,
    });

    const onTabClick = (index) => {
        switch (index) {
            case 0:
                setActiveTab({
                    skillActive: true,
                    experienceActive: false,
                    educationActive: false,
                });
                break;
            case 1:
                setActiveTab({
                    skillActive: false,
                    experienceActive: true,
                    educationActive: false,
                });
                break;
            case 2:
                setActiveTab({
                    skillActive: false,
                    experienceActive: false,
                    educationActive: true,
                });
                break;
        }
    };

    function renderTabContent() {
        return (
            <>
                <div
                    className={
                        activeTab.skillActive
                            ? "tab-contents active-tab"
                            : "tab-contents"
                    }
                    value="skills"
                >
                    <ul>
                        <li>
                            <span>
                                <strong>Cyber Security Tools</strong>
                            </span>
                            <br />• Microsoft Azure Sentinel • Defender for
                            Cloud • Defender for identity • Microsoft 365
                            defender • CrowdStrike Falcon.
                        </li>
                        <li>
                            <span>
                                <strong>
                                    Web Development Technologies/Frameworks
                                </strong>
                            </span>
                            <br />• HTML5 • CSS3 • NodeJS • Bootstrap • VueJS •
                            React.js • Postman API.
                        </li>
                        <li>
                            <span>
                                <strong>Programming Languages</strong>
                            </span>
                            <br />• JavaScript • Python.
                        </li>
                        <li>
                            <span>
                                <strong>Database</strong>
                            </span>
                            <br />• SQL • MySQL • MongoDB • MySQL Server.
                        </li>
                        <li>
                            <span>
                                <strong>UI/UX Design and Development</strong>
                            </span>
                            <br />• Adobe Creative Cloud • Adobe XD • Figma •
                            UI/UX design & development • Prototyping •
                            Wireframing • Photoshop • Illustrator.
                        </li>
                    </ul>
                </div>
                <div
                    className={
                        activeTab.experienceActive
                            ? "tab-contents active-tab"
                            : "tab-contents"
                    }
                    value="experience"
                >
                    <ul>
                        <li>
                            <span>
                                <strong>Student Web developer</strong>
                                <br />
                                at Ahmedabad Institute of Technology
                            </span>
                            <br />
                            • Front-end web development using HTML5, CSS3,
                            JavaScript, and Bootstrap to create dynamic and
                            responsive web pages. <br />• In-depth knowledge of
                            full-stack software development principles, Software
                            Development life cycle, OOPs concepts, REST APIs,
                            database design, and Use Interfaces / User
                            Experience design, to deliver interactive and
                            engaging web experiences. <br /> • Demonstrated
                            expertise in debugging web page errors or issues,
                            creating interactive learning objects, implementing
                            OOPs concepts, developing responsive and interactive
                            web pages, and producing high-quality videos. <br />{" "}
                            • Work on Adobe Photoshop, Adobe Illustrator, to
                            design visually appealing banners and certificates
                            for events.
                        </li>
                        <li>
                            {" "}
                            <span>
                                <strong>Information Security Co-op </strong>
                                <br />
                                at Gore Mutual Insurance <br />{" "}
                            </span>
                            • Established incident response protocol ensuring
                            system remediation within 5 days for 85% of reported
                            incidents. Provide support to resolve
                            security-related technical incidents by ticket
                            management – Jira, ServiceNow.
                            <br /> • Enabled 95% of employees to comply with
                            security guidelines via training & policy overviews,
                            resulting in improved data security & confidential
                            info protection. Collaborated with the platform team
                            to resolve security incidents. <br /> • Ensure
                            Security Compliance by meeting external standards
                            and internal security protocols. <br />
                            • Identified vulnerabilities and document reports to
                            the Enterprise security team, monitoring over 500
                            security events via SIEM tools, evaluated problems &
                            identified priority incidents within a four-hour
                            trip for Triage incoming requests. <br /> • Improved
                            Security awareness by 80% with “KnowBe4” practices
                            to make employees aware of security risks.
                            Maintained a security dashboard and provided health
                            checks and status reports. Synchronized security
                            tools to reduce response time.
                        </li>
                    </ul>
                </div>
                <div
                    className={
                        activeTab.educationActive
                            ? "tab-contents active-tab"
                            : "tab-contents"
                    }
                    value="education"
                >
                    <ul>
                        <li>
                            <span>
                                <strong>Mobile Solutions Developement</strong>
                            </span>
                            <br />
                            Conestoga College, Waterloo.
                            <br />
                            GPA: 3.66
                        </li>
                        <li>
                            <span>
                                <strong>
                                    Bachelors in Information Technologies
                                </strong>
                            </span>
                            <br />
                            Gujarat Technological University, India.
                            <br />
                            GPA: 3.7
                        </li>
                        <li>
                            <span>
                                <strong>
                                    Certification in 3D animation and Visual
                                    Effects
                                </strong>
                            </span>
                            <br />
                            Kshitij Vivan Institute, India.
                        </li>
                    </ul>
                </div>
            </>
        );
    }
    return (
        <>
            <div id="about">
                <div className="container">
                    <div className="row">
                        <div className="about-col-1">
                            <img src="/assets/images/USER.jpg" alt="" />
                        </div>
                        <div className="about-col-2">
                            <h1 className="sub-title">About Me</h1>
                            <p>
                                I am a Postgraduate student at Conestoga College
                                in Mobile Solutions Development graduated in
                                December 2022. I am passionately seeking
                                opportunities to get industrial experience,
                                learn more skills, and grow into a professional.
                            </p>

                            <div className="tab-titles">
                                <p
                                    className={`tab-links ${
                                        activeTab.skillActive
                                            ? "active-link"
                                            : ""
                                    }`}
                                    onClick={() => onTabClick(0)}
                                >
                                    Skills
                                </p>
                                <p
                                    className={`tab-links ${
                                        activeTab.experienceActive
                                            ? "active-link"
                                            : ""
                                    }`}
                                    onClick={() => onTabClick(1)}
                                >
                                    Experience
                                </p>
                                <p
                                    className={`tab-links ${
                                        activeTab.educationActive
                                            ? "active-link"
                                            : ""
                                    }`}
                                    onClick={() => onTabClick(2)}
                                >
                                    Education
                                </p>
                            </div>
                            <>{renderTabContent()}</>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
