import React, { Component, Fragment } from 'react';
import { Container, } from 'react-bootstrap'

import ResumeItem from "../components/ResumeItem"
import SideBar from "../components/SideBar"

export default class Index extends Component {
    render() {
        return (
            <Fragment>
                <SideBar />
                <Container fluid>
                    <ResumeItem>
                        <h1 className="mb-0">Jakob Jul <span className="text-primary">Elben</span></h1>
                        <div className="sub-heading mb-5">Slotsherrensvej 151 st.mf. · 2720 Vanløse · Copenhagen</div>
                    </ResumeItem>
                </Container>
            </Fragment>
        )
    }
}