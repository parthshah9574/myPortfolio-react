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
                                <strong>
                                    Web Development Technologies/Frameworks:{" "}
                                </strong>
                            </span>
                            <br />• HTML5 • CSS3 • NodeJS • Bootstrap • VueJS •
                            React.js • Postman API.
                        </li>
                        <li>
                            <span>
                                <strong>Programming Languagess</strong>
                            </span>
                            <br />• JavaScript • Python • Java.
                        </li>
                        <li>
                            <span>
                                <strong>UI/UX Design and Development</strong>
                            </span>
                            <br />• Adobe Creative Cloud • Adobe XD • Figma •
                            UI/UX design & development • Prototyping •
                            Wireframing.
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
                            • Design and developed dynamic web pages for events
                            using HTML5, CSS3, JavaScript, Bootstrap.
                            <br />• Developing interactive activities such as
                            learning objects, interactive web pages, videos,
                            etc. <br />• Design banner and certificates for
                            events using graphic design tools such as: Adobe
                            photoshop, Adobe Illustrator.
                        </li>
                        <li>
                            {" "}
                            <span>
                                <strong>Information Security Co-op </strong>
                                <br />
                                at Gore Mutual Insurance <br />{" "}
                            </span>
                            • Established context for incident response protocol
                            & formulated plans to ensure system remediation
                            within 5 days for 85% of reported incidents. <br />
                            • Provide security support to organizations
                            employees to resolve security incidents through Jira
                            and ServiceNow ticket management. <br />
                            • Enabled 95% of employees to comply with firm-wide
                            security guidelines via training & policy overviews,
                            resulting in improved data security & confidential
                            info protection. Completed identity and access
                            management tasks. <br />
                            • Conducted audits of the cloud environment to
                            identify security risks and recommend security
                            controls. <br />• Successfully identified and
                            reported vulnerabilities to the security team.{" "}
                            <br />• Monitored over 500 security events sourced
                            from multiple SIEM tools daily, evaluated &
                            identified priority incidents within a four-hour
                            time frame. <br />• Maintained a security dashboard
                            and provided a health check and status reports.{" "}
                            <br />
                            • Synchronized security tools to reduce response
                            time. <br />• Contributed towards security projects
                            such as Appguard deployment and Keeper (Password
                            Safeguard).{" "}
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
                            <img src="src/assets/images/USER.jpg" alt="" />
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
                            <br />
                            <p>
                                Also possesses practical knowledge of HTML, CSS,
                                JavaScript, Bootstrap, Java, MySQL, Azure
                                DevOps, MongoDB, NodeJS, and VueJS.
                            </p>
                            <br />
                            <p>
                                As a result of my work term, I have a working
                                knowledge of security tools such as Microsoft
                                Azure Sentinel, KnowBe4, ExtraHop, Crowdstrike
                                Falcon, Veracode, Microsoft defender for cloud,
                                and Microsoft defender 365.
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
