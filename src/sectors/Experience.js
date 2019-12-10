import React, { Component } from 'react';
import Topic from "./Topic"

export default class Experience extends Component {

    render() {
        return (<div className="section" id="experience">
            <div className="container cc-experience">
                <div className="h4 text-center mb-4 title">Experiencia</div>
                <Topic
                    typeDiv='X'
                    year="Novembro 2019 – Presente"
                    type="everis"
                    title="Arquiteto de software"
                    location="Sao Paulo"
                    description="Na everis o meu desafio esta sendo trabalhar com multicloud em uma integracao unica o projeto tem sido muito legal<br /><strong>Trabalhando com Jenkins, AWS, Docker, Rest, SpringBoot, Angular</strong>"
                />
                <Topic
                    typeDiv='X'
                    year="Abril 2019 – Outubro 2019"
                    type="Sennit-Maxxidata"
                    title="Arquiteto de software"
                    location="Sao Paulo"
                    description="Na maxxidata meu trabalho é de arquitetura de software empenhado em um projeto muito grande com uma camada de usuarios ativos enorme, Realizando muitas tarefas na maxxidata eu pude interagir com muitos outros times de tecnologia e agregar muito conhecimento pessoal e tecnico.<br /><strong>Trabalhando com Jenkins, AWS, Docker, Rest, NodeJs, Swift, React</strong>"
                />
                <Topic
                    typeDiv='X'
                    year="Outubro 2018 – Abril 2019"
                    type="Sennit-Movida"
                    title="Líder Técnico"
                    location="Sao Paulo"
                    description="Meu trabalho com a movida era focado em uma grande integração internacional, trabalhando com uma equipe pequena, porem apenas com especialistas, tive uma grande oportunidade de desenvolver novas habilidades de liderança e arquitetura já que foi um grande desafio integrar a um grande sistema uma funcionalidade tão distinta. <br /><strong>Trabalhando com Jenkins, Kubernetes, Google Cloud Plataform, Rest, PHP, Golang</strong>"
                />
                <Topic
                    typeDiv='X'
                    year="Outubro 2018 – Abril 2019"
                    type="Sennit-Movida"
                    title="Líder Técnico"
                    location="Sao Paulo"
                    description="Meu trabalho com a movida era focado em uma grande integração internacional, trabalhando com uma equipe pequena, porem apenas com especialistas, tive uma grande oportunidade de desenvolver novas habilidades de liderança e arquitetura já que foi um grande desafio integrar a um grande sistema uma funcionalidade tão distinta. <br /><strong>Trabalhando com Jenkins, Kubernetes, Google Cloud Plataform, Rest, PHP, Golang</strong>"
                />
                <Topic
                    typeDiv='X'
                    year="Junho 2018 – Outubro 2018"
                    type="CoinBold"
                    title="Engenheiro de Software"
                    location="Sao Paulo"
                    description="Meu trabalho na Coinbold está muito ligado a arquitetura do sistema e engenharia dos sistemas empregados. A coinbold sendo uma Exchange de criptomoedas me dá muitos desafios por ser uma tecnologia que tem muito valor no mercado e trabalhar com o mercado financeiro foi um grande aprendizado. Trabalhando com sistemas de arbitragem de maneira profissional eu pude entrar em contato com os HFT (High frequency Trade) que me fizeram reimaginar a mim e ao meu código para sermos ainda mais rápido e eficiente. <br /><strong>Trabalhando com Jenkins, Kubernetes, Google Cloud Plataform, Rest, Angular 4, Karma, Python</strong>"
                />
                <Topic
                    typeDiv='X'
                    year="Fevereiro 2018 - Junho 2018"
                    type="Atlas Quantum"
                    title="Desenvolvedor Front End"
                    location="Sao Paulo"
                    description="Atuando como desenvolvedor Front-End trabalhei no maior projeto de atualização da empresa. Criando um sistema inteiramente em Angular 5, utilizando REST e protocolos seguros de comunicação para criar uma plataforma completamente SPA (Single Page Application). Atuando também com testes de stress e penTest na própria plataforma para garantir segurança e estabilidade<br /><strong>Trabalhando com Jenkins, Kubernetes, AWS, Rest, Angular 4, Karma, C#, Spring</strong>"
                />
                <Topic
                    typeDiv='X'
                    year="Maio 2017 - Dezembro 2017"
                    type="Loop Imóveis"
                    title="Gerente de TI / DevOps"
                    location="Sao Paulo"
                    description="Atuando como Gerente de TI trabalhei diretamente com os programadores, desenvolvendo o novo portal de imóveis integrando o IBM Watson em toda plataforma e na tomada de decisão das buscas de imóveis totalmente personalizada para o usuário, gerenciando uma pequena equipe no desenvolvimento e utilizando SCRUM para o gerenciamento do projeto e atuando como DevOps montei toda a infra estrutura com parceria da AWS e IBM Blumix, Trabalhando com múltiplas plataformas interligada em uma rede proprietária para garantir um SLA de 99.999%. <br /> <strong>Trabalhando com Jenkins, Travis CI, AWS, IBM, Rest, PHP, CakePhp</strong>"
                />
                <Topic
                    typeDiv='X'
                    year="Dezembro 2016 - Abril 2017"
                    type="Celebryts"
                    title="Desenvolvedor PHP"
                    location="Sao Paulo"
                    description="Atuei no desenvolvimento interno dos sistemas BackEnd para uma aplicação SPA. Utilizando tecnologia REST para comunicação e micro Serviços para o funcionamento dos sistemas, Atuando com uma pequena equipe desenvolvemos todos os serviços na metade do tempo projetado. E trabalhando com metodologias como SCRUM realizamos o lançamento com sucesso da plataforma <br /> <strong> Trabalhando com Jenkins, AWS, WebSocket, PHP, REST </strong>"
                />

                <Topic
                    typeDiv='X'
                    year="Maio 2013 - Setembro 2016"
                    type="Guia Das Indústrias"
                    title="Gerente de TI / DevOps"
                    location="Sao Paulo"
                    description="Atuando como Gerente de TI trabalhei diretamente da liderança dos programadores para um sistema proprietário de Exchange de commodities internacionais. Atuando como DevOps criei um sistema próprio de Docker’s interligando N plataformas. Também dando treinamentos de programação e computação em nuvens utilizando Docker<br /> <strong>Trabalhando com Jenkins, Vmware vsphere, AWS, WebSocket, Java Spring Framework,AngularJS, HTML5</strong>"
                />
            </div>
        </div>
        )
    }
}
