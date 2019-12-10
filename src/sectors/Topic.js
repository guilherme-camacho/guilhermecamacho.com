import React, { Component } from 'react';

export default class Topic extends Component {
    description(fthis) {
        return fthis.props.description
    }
    render() {
        return (<div className="card">
            <div className="row">
                <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50"
                    data-aos-duration="500">
                    <div className={!this.props.typeDiv ? "card-body cc-education-header" : "card-body cc-experience-header"}>
                        <p>{this.props.year}</p>
                        <div className="h5">{this.props.type}</div>
                    </div>
                </div>
                <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
                    <div className="card-body">
                        <div className="h5">{this.props.title}</div>
                        <p className="category">{this.props.location}</p>
                        <p dangerouslySetInnerHTML={{ __html: this.props.description }}></p>


                    </div>
                </div>
            </div>
        </div>)
    }
}
