import React, { Component } from 'react';
import Topic from "./Topic"


export default class PersonalProjects extends Component {
    render() {
        return (<div className="section">
            <div className="container cc-education">
                <div className="h4 text-center mb-4 title">Projetos Pessoais</div>
                <Topic
                    year="2019"
                    type="Software"
                    title="Blockchain com javascript"
                    location="Blockchain / Sofware"
                    description="Criei esse projeto para uma simples prova de conveito e se tornou algo muito maior hoje e um clone do bitcoin feito usando javascript puro com o node.js para suporte de servidor o projeto esta aberto no meu <a href='https://github.com/guilherme-camacho/blockchain-nodejs'><strong>repositorio do github</strong></a>"
                />
                <Topic
                    year="2019"
                    type="Software"
                    title="Este site (guilhermecamacho.com)"
                    location="Sofware"
                    description="Criei esse site com o intuito de mostrar um pouco do meu trabalho a primeira versao dele era apenas html e css puro sem nenhuma biblioteca agora refiz ele usando react e agora estou disponibilizando o codigo fonte dele no meu <a href='https://github.com/guilherme-camacho/guilhermecamacho.com'><strong>repositorio do github</strong></a> "
                />
                <Topic
                    year="2015"
                    type="Engenharia"
                    title="NanoSats"
                    location="Engenharia / Sofware"
                    description="Em meu tempo livre também trabalho nesse projeto de nano satélites que tenho mais como hobby, o objetivo desse projeto seria baratear o custo de um satélite comercial de alguns milhões de dólares para algumas centenas. Utilizando como plataforma o Arduino e trabalhando com Python para a interface de usuário, para a interface do sistema trabalho com Assembly e C, A engenharia do projeto também estou fazendo sozinho."
                />
                <Topic
                    year="2015"
                    type="Engenharia"
                    title="Self-Flight Drone"
                    location="Engenharia / Sofware"
                    description="Trabalhando com todas as tecnologias que tenho disponíveis hoje eu trabalho em um Drone que funciona com energia solar que seria capaz de voar sozinho sem a necessidade de um controlador. Ele poderia fazer voos de grandes distâncias e altitudes para distribuição de internet mais barata para comunidades carentes."
                />
                <Topic
                    year="2017"
                    type="Finanças"
                    title="Arbitragem de criptomoedas"
                    location="Sofware / Finanças"
                    description="Trabalhei em uma inteligência artifical e arbitragem de criptomoedas completamente autônoma, utilizando a maioria das tecnologias do mercado. Trabalhando com algoritmos genéticos e redes neurais. Coloquei em prática esse projeto pessoal e venho trabalhando nele em meu tempo livre."
                />
                <Topic
                    year="2017"
                    type="Viagens"
                    title="Viajando com amigos"
                    location="Sofware / Travel"
                    description="O organizador da viagem pode compartilhar as opções de hospedagem, locação de carro entre outras coisas com todos os integrantes para que possa ser votado melhor opção. O app se comunica automaticamente com todos os sites de hotéis / locação de casa e serviços de viagem. O app cria eventos dentro da viagem como visitas a locais, shows e coisas que o usuário pode fazer na viagem. O app também faz a gestão"
                />
            </div>
        </div>
        )
    }
}