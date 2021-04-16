import React from 'react'
import home from '../../assets/desktop/home-button.svg'
import map from '../../assets/desktop/facebook-placeholder-for-locate-places-on-maps.svg'
import mail from '../../assets/desktop/black-envelope.svg'

import logo from '../../assets/desktop/logo.png'
import banner from '../../assets/desktop/Retangulo 1.png'

import './style.sass'


const HeaderFirst = () => {
    return (
        <div className={"header"}>
            <a href={"https://www.banzaihonda.com.br"}><img src={home} alt="icon home" />Ir para o portal Banzai</a>
            <div></div>
            <div><img src={map} alt="icon maps" />Encontre uma conssecionaria</div>
            <div><img src={mail} alt="icon email" />Fale Conosco</div>
        </div>
    )
}

const About = () => {
    return (
        <div className={"about"} >
            <div>
                <img src={logo} alt="logo banzai" />
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
            <img src={banner} alt="civic 10 geração" />
        </div>
    )


}

export default Header