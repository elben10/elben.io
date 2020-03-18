import React, { Component } from 'react';

export default class ResumeItem extends Component {
    render() {
        return (
            <section className="resume-section d-flex align-items-center">
                <div className="w-100">
                    {this.props.children}
                </div>
            </section>
        )
    }
}