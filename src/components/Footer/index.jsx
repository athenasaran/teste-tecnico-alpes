import React, { useState, useEffect } from 'react'
import banzai from '../../images/desktop/logo.png'
import ibama from '../../images/desktop/logo_ibama.png'

import './style.sass'

const Footer = () => {
    return (
        <>
            <div className="div-contato">
                <div className="div-central">
                    <span className="central">CENTRAL DE ATENDIMENTO</span>
                    <span className="telefone">(31) 3123-1234</span>
                </div>
                <div className="div-central">
                    <span className="central">CENTRAL DE ATENDIMENTO</span>
                    <span className="telefone">(31) 3123-1234</span>

                </div>
                <div className="div-siga">
                    <span className="siga">SIGA A BANZAI NAS REDES SOCIAIS</span>
                </div>
                <div className="div-logo">
                    <span className="facebook"></span>
                    <span className="instagram"></span>
                    <span className="twitter"></span>
                </div>
            </div>
            <div className="container">
                <img className="logo-banzai" src={banzai} alt="logo honda banzai" />
                <p>Todos juntos fazem um trânsito melhor</p>
                <img className="logo-ibama" src={ibama} alt="logo ibama" />
            </div>
        </>
    )

}

export default Footer