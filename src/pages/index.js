import React, { Component, Fragment } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap'

import Sidebar from "../components/SideBar"

export default class Index extends Component {
    render() {
        return (
            <Fragment>
                <Sidebar />
                <Container fluid>
                    "Hello"
                </Container>
            </Fragment>
        )
    }
}