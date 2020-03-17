import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap'

export default class ResumeItem extends Component {
    render() {
        return (
            <section className="resume-section">
                <div className="w-100">
                    {this.props.children}
                </div>
            </section>
        )
    }
}