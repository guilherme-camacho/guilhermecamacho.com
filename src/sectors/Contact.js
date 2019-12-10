import React, { Component } from 'react';


export default class Curriculum extends Component {
    render() {
        return (<div className="section" id="contact">
            <div className="cc-contact-information" style={{ backgroundImage: "url('images/staticmap.png')" }}>
                <div className="container">
                    <div className="cc-contact">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="card mb-0" data-aos="zoom-in">
                                    <div className="h4 text-center title">Entre em contato</div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="card-body">
                                                <form action="https://formspree.io/guilhermecamachop@gmail.com"
                                                    method="POST">
                                                    <div className="p pb-3"><strong>Me mande uma mensagem</strong></div>
                                                    <div className="row mb-3">
                                                        <div className="col">
                                                            <div className="input-group"><span className="input-group-addon"><i
                                                                className="fa fa-user-circle"></i></span>
                                                                <input className="form-control" type="text" name="name"
                                                                    placeholder="Nome" required="required" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <div className="col">
                                                            <div className="input-group"><span className="input-group-addon"><i
                                                                className="fa fa-file-text"></i></span>
                                                                <input className="form-control" type="text" name="Subject"
                                                                    placeholder="Asunto" required="required" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <div className="col">
                                                            <div className="input-group"><span className="input-group-addon"><i
                                                                className="fa fa-envelope"></i></span>
                                                                <input className="form-control" type="email" name="_replyto"
                                                                    placeholder="E-mail" required="required" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <div className="col">
                                                            <div className="form-group">
                                                                <textarea className="form-control" name="message"
                                                                    placeholder="Sua Mensagem"
                                                                    required="required"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <button className="btn btn-primary" type="submit">Enviar
                                                    </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="card-body">
                                                <p className="mb-0"><strong>Endereço </strong></p>
                                                <p className="pb-2">Rua Coronel Oscar Porto, 70 - Paraíso, São Paulo - SP,
                                                    04003-000
                                        </p>
                                                <p className="mb-0"><strong>Telefone</strong></p>
                                                <p className="pb-2">+55 11 993867346</p>
                                                <p className="mb-0"><strong>Email</strong></p>
                                                <p>guilhermecamachop@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
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