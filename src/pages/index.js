import React, { Component, Fragment } from 'react';
import { Container, } from 'react-bootstrap'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import ResumeSection from "../components/ResumeSection"
import SideBar from "../components/SideBar"

export default class Index extends Component {
    render() {
        return (
            <Fragment>
                <SideBar />
                <Container fluid>
                    <ResumeSection>
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
                    <ResumeSection>
                        <h2 className="mb-5">Experience</h2>
                    </ResumeSection>
                </Container>
            </Fragment>
        )
    }
}