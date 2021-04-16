import React from 'react';
import banner from '../../assets/desktop/Grupo 74.png'
import { Carousel } from "react-responsive-carousel"
import car1 from '../../assets/desktop/07-DIRECAO_ELETRICA.png'
import car2 from '../../assets/desktop/01-CAMBIO_AUTOMATICO.png'
import car3 from '../../assets/desktop/08-VIDROS_ELETRICOS.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import './style.sass'

const CarouselFirst = () => {
    return (
        <div className="carousel" >
            <Carousel autoPlay showArrows={true} infiniteLoop>
                <div>
                    <img alt="" src={car1} />
                    <p className="legend">Direção com Assistência</p>
                    <p className="sublegend"> Sistema de estabilidade que reforça automaticamente o retorno da direção,
                        auxiliando o motorista em situações onde o carro está ameaçado de instabilidade.</p>
                </div>
                <div>
                    <img alt="" src={car2} />
                    <p className="legend">Câmbio CVT com Paddle Shift</p>
                    <p className="sublegend">O câmbio com transmissão CVT de 7 velocidade com Paddle Shift (aletas) proporciona conforto ao trocar de marchas.</p>
                </div>
                <div>
                    <img alt="" src={car3} />
                    <p className="legend">Vidros elétricos com subida automática</p>
                    <p className="sublegend">Todas as portas possuem vidros elétricos com a função “um toque” e sistema de segurança antiesmagamento.</p>
                </div>
                <div>
                    <img alt="" src={car1} />
                    <p className="legend">Direção com Assistência</p>
                </div>
                <div>
                    <img alt="" src={car2} />
                    <p className="legend">Câmbio CVT com Paddle Shift</p>
                </div>
                <div>
                    <img alt="" src={car3} />
                    <p className="legend">Vidros elétricos com subida automática</p>
                </div>

            </Carousel>
        </div>
    )
}

const ThirdBlock = () => {

    return (
        <div className={"block-3"}>
            {/* <img src={banner} alt="carousel" /> */}
            <CarouselFirst />
        </div>
    )


}

export default ThirdBlock