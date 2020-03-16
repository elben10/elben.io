import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap'

export default class SideBar extends Component {
    render() {
        return (
            <Navbar id="sideNav" className="navbar-dark bg-primary fixed-top" expand='lg'>
                <Navbar.Brand>
                    <span className="d-block d-lg-none">Jakob Jul Elben</span>
                </Navbar.Brand>
                <Navbar.Toggle className="mr-2" />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Item>
                            <Nav.Link>
                                Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link>
                                Contact
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}