import React, { useState, useEffect } from 'react'
import homeButton from '../../images/desktop/home-button.svg'
import maps from '../../images/desktop/facebook-placeholder-for-locate-places-on-maps-1.svg'
import envelope from '../../images/desktop/black-envelope.svg'
import banzai from '../../images/desktop/logo.png'

import './style.sass'

const Header = () => {

    return (
        <>
            <div className="header">

                <div className="</div>">
                    <img className="portal-icon" src={homeButton} alt="home" />
                    <p className="portal">Ir para o Portal Banzai </p>
                </div>
                <div className="div-concessionaria">
                    <img className="concessionaria-icon" src={maps} alt="maps" />
                    <p className="concessionaria">Encontre uma concessionária</p>
                </div>
                <div className="div-fale">
                    <img className="fale-icon" src={envelope} alt="envelope" />
                    <p className="fale">Fale Conosco</p>
                </div>

            </div>
            <div className="div-logo">
                <img className="logo" src={banzai} alt="logo honda banzai" />
                <span className="central">CENTRAL DE ATENDIMENTO</span>
                <span className="telefone">(31) 3123-1234</span>
            </div>
        </>

    )
}

export default Header