import React, { Component, Fragment } from 'react';

export default class ResumeItem extends Component {
    render() {
        return (
            <Fragment>
                <section className="resume-section p-3 p-lg-5 d-flex align-items-center">
                    <div className="w-100">
                        {this.props.children}
                    </div>
                </section>
                <hr />
            </Fragment>
        )
    }
}