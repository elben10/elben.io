import React, { Component } from 'react';

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