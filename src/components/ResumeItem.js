import React, { Component } from 'react'

export default class ResumeItem extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="d-flex flex-column flex-md-row justify-content-between">
                <div>
                <h3>{this.props.title}</h3>
                <div className="sub-heading">{this.props.subtitle}</div>
                <p>{this.props.children}</p>
                </div>
                <div className="date-item text-md-right">
                    <span className="text-primary">
                        {this.props.date}
                    </span>
                </div>
            </div>
        )
    }
}

