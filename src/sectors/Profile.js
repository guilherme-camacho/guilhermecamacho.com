import React, { Component } from 'react';

export default class Profile extends Component {
    render() {
        return <div className="profile-page">
            <div className="wrapper">
                <div className="page-header page-header-small" filter-color="green">
                    <div className="page-header-image" data-parallax="true"
                        style={{ "backgroundImage": "url('images/back.jpg')" }}></div>
                    <div className="container">
                        <div className="content-center">
                            <div className="cc-profile-image"><a href="#"><img src="images/anthony.jpg" alt="Image" /></a>
                            </div>
                            <div className="h2 title">Guilherme Camacho</div>
                            <p className="category text-white">Engenheiro de Software, Analista DevOps</p>
                            <a className="btn btn-primary smooth-scroll mr-2" href="#contact" data-aos="zoom-in"
                                data-aos-anchor="data-aos-anchor">Converse
                                 comigo
                    </a>
                            <a className="btn btn-primary" href="CurriculoGuilhermeCamacho.pdf" data-aos="zoom-in"
                                target="_blank" data-aos-anchor="data-aos-anchor">
                                Baixar meu CV
                    </a>
                        </div>
                    </div>
                    <div className="section">
                        <div className="container">
                            <div className="button-container">
                                <a className="btn btn-default btn-round btn-lg btn-icon"
                                    href="https://www.facebook.com/evguiters" rel="tooltip" title="Me siga no Facebook"
                                    target="_blank">
                                    <i className="fa fa-facebook"></i>
                                </a>
                                <a className="btn btn-default btn-round btn-lg btn-icon" href="https://twitter.com/guitersp"
                                    rel="tooltip" target="_blank" title="Me siga no Twitter">
                                    <i className="fa fa-twitter"></i>
                                </a>
                                <a className="btn btn-default btn-round btn-lg btn-icon"
                                    href="https://www.instagram.com/guitersp/?hl=pt-br" rel="tooltip"
                                    title="Me siga no Instagram"
                                    target="_blank">
                                    <i className="fa fa-instagram"></i>
                                </a>
                                <a className="btn btn-default btn-round btn-lg btn-icon"
                                    href="https://www.behance.net/guitersp" rel="tooltip" title="Me siga no Behance"
                                    target="_blank">
                                    <i className="fa fa-behance"></i>
                                </a>
                                <a className="btn btn-default btn-round btn-lg btn-icon" href="https://github.com/guiters"
                                    rel="tooltip" title="Me siga no GitHub"
                                    target="_blank">
                                    <i className="fa fa-github-alt"></i>
                                </a>
                                <a className="btn btn-default btn-round btn-lg btn-icon" href="https://wa.me/5511993867346"
                                    rel="tooltip" title="Me chame no Whatsapp"
                                    target="_blank">
                                    <i className="fa fa-whatsapp"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}