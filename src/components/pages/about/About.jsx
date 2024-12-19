import React from "react";
import './About.css';
import avatar from "../../assets/avatar1.png";
import { FaDownload } from "react-icons/fa6";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import resume from '../../assets/Resume2024.pdf';
import Tilt from 'react-parallax-tilt';


const About = () => {



    return (

        <section id="about" >

            <div className="aboutleft" id="avatarimage">


                <Tilt className="aboutleft" id="avatarimage">
                <img src={avatar} alt="img" className="container" />
                    
                </Tilt>
            </div>

            <div className="aboutright">
                <div className="aboutheading">
                    About ()
                </div>
                <div className="aboutcontents">
                    I'm Yadhu Gopakumar, A Fullstack Developer. Specializing in
                    the python Django fullstack.Beyond my professional commitments,
                    I enjoy crafting and hosting engaging open source
                    projects.Also i am a drawing artist and illustratior. Let's explore the possibilities and
                    create something remarkable together!
                </div>

                <div className="aboutcontents">
                    <div>

                        download my <span> <a href={resume} download={"yadhu_resume"}><button className="resbtn">resume <FaDownload /></button></a></span></div>
                </div>
                <Tabs className="tabs">
                    <TabList className="tablist">
                        <Tab className="tab" >My Skills</Tab>
                        <Tab className="tab">Experience</Tab>
                        <Tab className="tab">Education</Tab>

                    </TabList>

                    <TabPanel className="tabpanel">
                        <div className="tabpanelcontent">

                            <div className="item">
                                <div className="heading">Frontend development</div>
                                <div className="subheading">React, Html/CSS, Bootsrap,Javascript,jinja 2 </div>
                            </div>
                            <div className="item">
                                <div className="heading">Backend development</div>
                                <div className="subheading">Django,Php,Mysql,SQLite,MongoDB</div>
                            </div>
                            <div className="item">
                                <div className="heading">Appliction Development</div>
                                <div className="subheading">Dart, Flutter</div>
                            </div>
                            <div className="item">
                                <div className="heading">Programming languages</div>
                                <div className="subheading">Python,C,C++,Java</div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel className="tabpanel">
                        <div className="tabpanelcontent">

                            <div className="item">
                                <div className="heading">Assosiate software engineer</div>
                                <div className="subheading">Accenture : Aug 08 2023 - Jan 20 2023</div>
                            </div>
                            <div className="item">
                                <div className="heading">Junior Python django trainee</div>
                                <div className="subheading">Inmakes : jul 21 2022 - Nov 25 2022</div>
                            </div>

                        </div>
                    </TabPanel>
                    <TabPanel className="tabpanel">
                        <div className="tabpanelcontent">
                            <div className="item">
                                <div className="heading">Bachelor of Computer Applications (BCA)</div>
                                <div className="subheading">St.Berchmans College Changanacherry: 2020-2023</div>
                            </div>
                            <div className="item">
                                <div className="heading">Higher Secondary Education</div>
                                <div className="subheading">T.H.S.S Mallappally :2018-2020</div>
                            </div>
                            <div className="item">
                                <div className="heading">High School</div>
                                <div className="subheading">N.S.S.H.S Kunnam </div>
                            </div>
                            
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </section >


    );
}

export default About
