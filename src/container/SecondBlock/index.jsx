import React from 'react';
import car1 from '../../assets/desktop/Retângulo 16.svg'
import car2 from '../../assets/desktop/Retângulo 19.svg'
import car3 from '../../assets/desktop/Retângulo 21.svg'

import cars from '../../assets/desktop/juntosi.png'

import './style.sass'



const SecondBlock = () => {

    return (
        <div className={"block-2"}>
            <div>
                <p>A EMOÇÃO DE DIRIGIR LEVA VOCÊ MAIS LONGE</p>
            </div>
            <div>
                <img src={car1} alt="carro 1" />
                <img src={car2} alt="carro 2" />
                <img src={car3} alt="carro 3" />
            </div>
            <div>
                <img src={cars} alt="carros" />
            </div>
            <div>
                <p>O novo Civic Geração 10 traz um design único mudando a categoria de sedãs para sempre. Ele garante a melhor dirigibilidade com o máximo em sofisticação e conforto, atribuído por seu design interno e diferenciada ergonomia.</p>
            </div>
        </div>
    )


}

export default SecondBlock