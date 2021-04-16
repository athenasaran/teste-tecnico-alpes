import React from 'react'
import map from '../../assets/desktop/facebook-placeholder-for-locate-places-on-maps.svg'
import facebook from '../../assets/desktop/Caminho 87.svg'
import twitter from '../../assets/desktop/Grupo 81.svg'
import banzai from '../../assets/desktop/logo.png'
import ibama from '../../assets/desktop/logo_ibama.png'
import './style.sass'


const About = () => {
    return (
        <div className={"about"}>
            <div>
                <div>
                    <img src={map} alt="icon maps" />
                    <div>
                        <p>Encontre uma</p>
                        <p>CONCESSIONÁRIA</p>
                    </div>
                </div>

                <div>
                    <p>CENTRAL DE ATENDIMENTO</p>
                    <p>(31) 3123-1234</p>
                </div>
            </div>

            <div>
                <span>SIGA A BANZAI NAS REDES SOCIAIS</span>
            </div>

            <div>
                <img src={facebook} alt="facebook" />
                <img src={facebook} alt="instagram" />
                <img src={twitter} alt="twitter" />
            </div>
        </div>
    )
}

const Honda = () => {
    return (
        <div className={"honda"}>
            <img className="logo-banzai" src={banzai} alt="logo honda banzai" />
            <label>Todos juntos fazem um trânsito melhor</label>
            <img className="logo-ibama" src={ibama} alt="logo ibama" />
        </div>
    )
}

const Footer = () => {

    return (
        <div className={"footer"}>
            <About />
            <Honda />
        </div>
    )


}

export default Footer