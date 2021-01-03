import React, {Component} from 'react';

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
                                <p> Geek, Minha vida é tecnologia respiro e acordo cada dia querendo aprender algo
                                    novo. </p>
                                <p> Atualmente trabalho como Arquiteto de software senior, encontrando solucoes para as
                                    empresas nas quais trabalho </p>
                                <p> Anteriormente já trabalhei com todos os espectros da TI do mais baixo nivel C e
                                    Assembly, SysAdmin ate o desenvolvimento de front-end do UI/UX ate o codigo em
                                    si.<br/> Diferente do (padrao do mercado) eu sempre tive uma veia mais empreendedora
                                    e me coloquei sempre a disposicao da empresa para resolver desafios e encontrar
                                    solucoes praticas para cada um deles.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="card-body">
                                <div className="h4 mt-0 title">Informações Básicas</div>
                                <div className="row">
                                    <div className="col-sm-4"><strong className="text-uppercase">Nome:</strong></div>
                                    <div className="col-sm-8">Guilherme da conceicao camacho pinto</div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4"><strong className="text-uppercase">Idade:</strong></div>
                                    <div className="col-sm-8">27</div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4"><strong className="text-uppercase">Email:</strong></div>
                                    <div className="col-sm-8">guilhermecamachop@gmail.com</div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4"><strong className="text-uppercase">Endereço:</strong>
                                    </div>
                                    <div className="col-sm-8">São Paulo, SP, Brasil</div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4"><strong className="text-uppercase">Linguas:</strong></div>
                                    <div className="col-sm-8">English, Português</div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="h4 mt-0 title">Jogue comigo!</div>
                                <div className="row">
                                    <div className="col-sm-4"><strong className="text-uppercase">Steam:</strong></div>
                                    <div className="col-sm-8">guiters</div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-4"><strong className="text-uppercase">Origin:</strong></div>
                                    <div className="col-sm-8">BR_guiters</div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-sm-8">Jogo muito Apex Legends, Factorio, Kerbal Space Program
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}