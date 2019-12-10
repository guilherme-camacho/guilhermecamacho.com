import React, { Component } from 'react';
import Topic from "./Topic"

export default class EducationSchools extends Component {
    render() {
        return (<div className="section">
            <div className="container cc-education">
                <div className="h4 text-center mb-4 title">Educação</div>
                <Topic
                    year="2009 - 2013"
                    type="Gradução"
                    title="Ciência da Computação"
                    location="Universidade de São paulo"
                    description="Curso de ciencias das computação, realizei o curso enquanto estava trabalhando no Guia Das industrias e realizando os meus projetos externos."
                />
                <Topic
                    year="2018"
                    type="Curso"
                    title="Algoritmos genéticos"
                    location="Udemy"
                    description="Os algoritmos genéticos são uma importante área da Inteligência Artificial que são responsáveis pela resolução de problemas complexos, tendo como base encontrar soluções para problemas de otimização e busca. Existem várias aplicações práticas deste tipo de algoritmo, as quais podem ser aplicadas na resolução de problemas em cenários comerciais do dia a dia."
                />
                <Topic
                    year="2018"
                    type="Curso"
                    title="Sketch 3 / UX"
                    location="Udemy"
                    description="Dominando o Sketch podemos focar em SOLUCIONAR PROBLEMAS e fazer nosso produto evoluir mais rápido. Esse software completo e fácil de usar revolucionou a maneira na qual profissionais digitais trabalham."
                />
                <Topic
                    year="2018"
                    type="Curso"
                    title="Docker"
                    location="Udemy"
                    description="Criacao de ambientes profissionais e completos utilizando a arquitetura docker. Trabalhando em larga escala com servidores otimizados para cada tipo de aplicação"
                />
                <Topic
                    year="2018"
                    type="Curso"
                    title="Jenkins em larga escala via Docker e Kubernetes"
                    location="Udemy"
                    description="Administração de instâncias de Jenkins em escala, Opções de automações dentro da                    ferramenta                    baseados em imagens Docker, Plugins e Códigos Groovy, Otimizar a utilização de                    recursos                    computacionais, Garantindo reprodutibilidade entre instâncias de Jenkins"
                />
            </div>
        </div>
        )
    }
}