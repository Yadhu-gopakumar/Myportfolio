import React from "react";
import './Projects.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import AllCards from "./AllCards.jsx";
import WebCards from "./WebCards.jsx";
import AppCards from "./AppCards.jsx";
import ArtCards from "./ArtCards.jsx";
const Projects = () => {



    return (
        <section id="projects" >
            <div className="bigtext">
                Portfolio
            </div>
            <div className="aboutcontents portfoliotext">
                Here are some of my recent works
            </div>
            <Tabs className="tabs ptabs">
                <TabList className="tablist ptablist">
                    <Tab className="tab ptab">All</Tab>
                    <Tab className="tab ptab">Web</Tab>
                    <Tab className="tab ptab">Apps</Tab>
                    <Tab className="tab ptab">Arts</Tab>


                </TabList>

                <TabPanel className="tabpanel">
                    <div className="tabpanelcontent">
                        <div className="item">
                            <AllCards />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel className="tabpanel">
                    <div className="tabpanelcontent">
                        <div className="item">
                            <WebCards />

                        </div>
                    </div>
                </TabPanel>
                <TabPanel className="tabpanel">
                    <div className="tabpanelcontent">
                        <div className="item">
                            <AppCards />
                        </div>
                    </div>
                </TabPanel>
                <TabPanel className="tabpanel">
                    <div className="tabpanelcontent">
                        <div className="item">
                            <ArtCards />

                        </div>
                    </div>
                </TabPanel>


            </Tabs>
        </section>
    );
}
export default Projects