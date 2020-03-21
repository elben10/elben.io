import React, { Component, Fragment } from 'react';
import { Container, } from 'react-bootstrap'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import ResumeItem from "../components/ResumeItem"
import ResumeSection from "../components/ResumeSection"
import SideBar from "../components/SideBar"

export default class Index extends Component {
    render() {
        return (
            <Fragment>
                <SideBar />
                <Container fluid>
                    <ResumeSection id="Home">
                        <h1 className="mb-0">Jakob Jul <span className="text-primary">Elben</span></h1>
                        <div className="sub-heading mb-5">Slotsherrensvej 151 st.mf. · 2720 Vanløse · Copenhagen</div>
                        <div className="social-icons">
                            <a href="https://dk.linkedin.com/in/jakobjulelben">
                                <FaLinkedinIn />
                            </a>
                            <a href="https://github.com/elben10">
                                <FaGithub />
                            </a>
                        </div>
                    </ResumeSection>
                    <ResumeSection id="Experience">
                        <h2 className="mb-5">Experience</h2>
                        <ResumeItem title="Datamaga" subtitle="Consultant" date="March 2019 - Present">
                            What is going on
                        </ResumeItem>
                        <ResumeItem title="Teaching Assistant" subtitle="University of Copenhagen" date="August 2019 - September 2019">
                            What is going on
                        </ResumeItem>
                        <ResumeItem title="Teaching Assistant and co-author" subtitle="University of Copenhagen" date="August 2019 - September 2019">
                            What is going on
                        </ResumeItem>
                        <ResumeItem title="Research Assistant" subtitle="hello" date="2018-2020">
                            What is going on
                        </ResumeItem>
                        <ResumeItem title="Teaching Assistant" subtitle="hello" date="2018-2020">
                            What is going on
                        </ResumeItem>
                    </ResumeSection>
                </Container>
            </Fragment>
        )
    }
}