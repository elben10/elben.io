import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import Scrollspy from 'react-scrollspy'


export default class SideBar extends Component {
    render() {
        return (
            <Navbar id="sideNav" className="navbar-dark bg-primary fixed-top" expand='lg'>
                <Navbar.Brand>
                    <span className="d-block d-lg-none">Jakob Jul Elben</span>
                    <span className="d-none d-lg-block">
                        <img className="rounded-circle img-profile mb-3" src="https://media-exp1.licdn.com/dms/image/C4D03AQFsobrRzZ1FWA/profile-displayphoto-shrink_200_200/0?e=1590019200&v=beta&t=UEDEHMtDdIhqZcSdfj-58x6VLXl79L7Ov-l8mNSVJSg" />
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle className="mr-2" />
                <Navbar.Collapse>
                    <Nav>
                        <Scrollspy className="d-flex w-100 flex-column align-items-center" items={ ['Home', 'Experience', "Education"] } currentClassName="active" componentTag="div">
                            <Nav.Item>
                                <Nav.Link href="#Home" active={false}>
                                    Home
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#Experience" active={false}>
                                    Experience
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#Education" active={false}>
                                    Education
                                </Nav.Link>
                            </Nav.Item>
                        </Scrollspy>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}