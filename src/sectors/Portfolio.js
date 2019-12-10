import React, { Component } from 'react';

export default class Portfolio extends Component {
    render() {
        return (<div className="section" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ml-auto mr-auto">
                        <div className="h4 text-center mb-4 title">Portfolio</div>
                        <div className="nav-align-center">
                            <ul className="nav nav-pills nav-pills-primary" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#web-development" role="tablist">
                                        <i className="fa fa-laptop" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="tab-content gallery mt-5">
                    <div className="tab-pane active" id="web-development">
                        <div className="ml-auto mr-auto">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="cc-porfolio-image img-raised" data-aos="fade-up"
                                        data-aos-anchor-placement="top-bottom"><a
                                            href="#web-development">
                                            <figure className="cc-effect"><img src="images/753c6942703631.57d45ce4eed95.png"
                                                alt="Image" />
                                                <figcaption>
                                                    <div className="h4">LabConnect</div>
                                                </figcaption>
                                            </figure>
                                        </a></div>

                                    <div className="cc-porfolio-image img-raised" data-aos="fade-up"
                                        data-aos-anchor-placement="top-bottom"><a
                                            href="#web-development">
                                            <figure className="cc-effect"><img src="images/34bd0542703631.57d45ce4f074d.png"
                                                alt="Image" />
                                                <figcaption>
                                                    <div className="h4">LabConnect</div>
                                                </figcaption>
                                            </figure>
                                        </a></div>

                                    <div className="cc-porfolio-image img-raised" data-aos="fade-up"
                                        data-aos-anchor-placement="top-bottom"><a
                                            href="#web-development">
                                            <figure className="cc-effect"><img src="images/b1557543354377.57ebed6548bf2.png"
                                                alt="Image" />
                                                <figcaption>
                                                    <div className="h4">Couto Interiores</div>
                                                </figcaption>
                                            </figure>
                                        </a></div>

                                </div>
                                <div className="col-md-6">
                                    <div className="cc-porfolio-image img-raised" data-aos="fade-up"
                                        data-aos-anchor-placement="top-bottom"><a
                                            href="#web-development">
                                            <figure className="cc-effect"><img src="images/eb7e3743354377.57ebed654728e.png"
                                                alt="Image" />
                                                <figcaption>
                                                    <div className="h4">Couto Interiores</div>
                                                </figcaption>
                                            </figure>
                                        </a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}