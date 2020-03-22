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
                        <div className="sub-heading mb-5">Copenhagen, Denmark</div>
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
                        <ResumeItem 
                            title="Consultant" 
                            subtitle="Datamaga" 
                            date="March 2019 - Present"
                        >
                            I've been implementing End-to-End Machine Learning Systems for some of the largest Danish
                            companies. The projects have included email classification, timeseries abnormality detection,
                            and creating a working and scalable estimated time of arrival (ETA) system.
                        </ResumeItem>
                        <ResumeItem 
                            title="Teaching Assistant" 
                            subtitle="Department of Economics, University of Copenhagen" 
                            date="August 2019 - September 2019"
                        >
                            Taught the summer school course <a href="https://kurser.ku.dk/course/a%c3%98kk08216u/2019-2020">Social Data Science </a>
                            that introduces the fundamentals of machine learning using the popular programming language <a href="https://www.python.org/">Python</a>.
                        </ResumeItem>
                        <ResumeItem 
                            title="Teaching Assistant and co-author" 
                            subtitle="Department of Economics, University of Copenhagen" 
                            date="October 2018 – July 2019"
                        >
                            Developed and taught the course <a href="https://kurser.ku.dk/course/a%C3%98ka08232u/2018-2019">Introduction to Programming and Numeical Analysis </a>
                            in collaboration with <a href="https://sites.google.com/view/jeppe-druedahl/home">Jeppe Druedahl</a>. The course applies
                            a numerical approach to solving economic problems introduced during the undergraduate economics programme at 
                            University of Copenhagen.
                        </ResumeItem>
                        <ResumeItem 
                            title="Research Assistant" 
                            subtitle="CEBI, University of Copenhagen" 
                            date="January 2016 – February 2019"
                        >
                            Supported the <a href="https://www.econ.ku.dk/cebi/about/">CEBI</a> research group conducting economic analysis
                            on variaous data sources including the danish registry data. Employed at my first year by the director of the
                            CEBI group <a href="http://web.econ.ku.dk/ctk/">Claus Thustrup Kreiner</a>.
                        </ResumeItem>
                        <ResumeItem 
                            title="Teaching Assistant" 
                            subtitle="Department of Economics, University of Copenhagen" 
                            date="August 2017 – January 2018"
                        >
                            Taught the course <a href="https://kurser.ku.dk/course/a%c3%98kb08001u/2019-2020">Principle of Economics A </a>
                            that introduces the microeconomic principles of the neo-classical school. 
                        </ResumeItem>
                    </ResumeSection>
                    <ResumeSection id="Education">
                        <h2 className="mb-5">Education</h2>
                        <ResumeItem 
                            title="BSc in Economics" 
                            subtitle="Department of Economics, University of Copenhagen" 
                            date="August 2015 – January 2019"
                        />
                    </ResumeSection>
                </Container>
            </Fragment>
        )
    }
}