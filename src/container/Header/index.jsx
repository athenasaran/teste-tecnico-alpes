import React from 'react';
import home from '../../assets/desktop/home-button.svg'
import map from '../../assets/desktop/facebook-placeholder-for-locate-places-on-maps.svg'
import mail from '../../assets/desktop/black-envelope.svg'
import vencedor from '../../assets/desktop/os-eleitos-grande-vencedor-2017_0.svg'
import logo from '../../assets/desktop/logo.png'
import banner from '../../assets/desktop/Retangulo 1.png'
import telefone from '../../assets/desktop/Grupo 45.svg'
import './style.sass'


const HeaderFirst = () => {
    return (
        <div className={"header"}>
            <div>
                <a href={"https://www.banzaihonda.com.br"}>
                    <img src={home} alt="icon home" />
                    <label className={"text"}>Ir para o portal Banzai</label>
                </a>
            </div>
            <div></div>
            <div className={"maps"}><img src={map} alt="icon maps" /><label className={"text"}>Encontre uma concessionária</label></div>
            <div className={"email"}><img src={mail} alt="icon email" /><label className={"text"}>Fale Conosco</label></div>
        </div>
    )
}

const Contato = () => {
    return (
        <div className={"contato"}>
            <div>
                <img src={telefone} alt="telefone" />
                <div>
                    <h6>Solicitar um</h6>
                    <h3>CONTATO</h3>
                </div>
            </div>
            <form method="POST" action="" >
                <input className={"forms"} type="text" placeholder="Nome" />
                <input className={"forms"} type="email" placeholder="E-mail" />
                <input className={"forms"} type="number" placeholder="Telefone" />
                <select className={"forms"}>
                    <option>Escolha o horário</option>
                </select>
                <select className={"forms"}>
                    <option>Escolha a unidade</option>
                </select>
                <button type="submit">AGENDAR TEST DRIVE</button>
            </form>
        </div>
    )
}

const About = () => {
    return (
        <div className={"about"} >
            <div>
                <img src={logo} alt="bonzai" />
            </div>
            <div>
                <p>CENTRAL DE ATENDIMENTO</p>
                <p>(31) 3123-1234</p>
            </div>
        </div>
    )
}

const Header = () => {

    return (
        <div className={"block-1"}>
            <HeaderFirst />
            <About />
            <Contato />
            <img className="banner" src={banner} alt="civic 10 geração" />
            <img className="vencedor" src={vencedor} alt="os eleitos quatro rodas" />
        </div>
    )


}

export default Header