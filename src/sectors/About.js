import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return <div className="section" id="about">
            <div className="container">
                <div className="card" data-aos="fade-up" data-aos-offset="10">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="card-body">
                                <div className="h4 mt-0 title">Sobre Mim</div>
                                <p>Ola! Sou o Guilherme Camacho, Engenheiro de Software, Analista DevOps</p>
                                <p>
                                    Sou Pai de 2 filhos, Casado a 7 anos, Geek, Apaixonado por tecnologia
                    </p>
                                <p>
                                    Atualmente trabalho como Analista de Sistemas com foco em Front-End e sistemas SPA.
                    </p>
                                <p>
                                    Anteriormente já trabalhei com todos os espectros da TI de Gerenciamento de
                                    servidores (DevOps), Programação de Back End
                                    utilizando linguagens de baixo nível a linguagens compiladas, Front End com UX e
                                    diretamente no desenvolvimento de sistemas SPA.
                    </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="card-body">
                                <div className="h4 mt-0 title">Informações Básicas</div>
                                <div className="row">
                                    <div className="col-sm-4"><strong className="text-uppercase">Idade:</strong></div>
                                    <div className="col-sm-8">27</div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4"><strong className="text-uppercase">Email:</strong></div>
                                    <div className="col-sm-8">guilhermecamachop@gmail.com</div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4"><strong className="text-uppercase">Telefone:</strong></div>
                                    <div className="col-sm-8">+55 11 993867346</div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4"><strong className="text-uppercase">Endereço:</strong></div>
                                    <div className="col-sm-8">São Paulo, SP, Brasil</div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4"><strong className="text-uppercase">Linguas:</strong></div>
                                    <div className="col-sm-8">English, Português</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}