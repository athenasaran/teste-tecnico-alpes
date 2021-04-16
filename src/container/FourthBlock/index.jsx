import React from 'react'
import car1 from '../../assets/desktop/accord.png'
import car2 from '../../assets/desktop/city.png'
import car3 from '../../assets/desktop/fit_2018.png'

import './style.sass'


const Card = () => {

    return (
        <div className={"card"}>
            <div className={"container"}>
                <img className={"imagem"} src={car1} alt="carro 1" />
                <p className={"text"}>Novo Honda Accord: a combinação perfeita de três atributos exigidos pelo consumidor: elegância, luxo e alto desempenho.</p>
                <button className={"button"}>CONHEÇA MAIS</button>

            </div>
            <div className={"container"}>
                <img className={"imagem"} src={car2} alt="carro 2" />
                <p className={"text"}>O City está muito mais moderno e esportivo. Com design único e mais tecnológico do que nunca, ele vai conquistar todos os olhares.</p>
                <button className={"button"}>CONHEÇA MAIS</button>
            </div>
            <div className={"container"}>
                <img className={"imagem"} src={car3} alt="carro 3" />
                <p className={"text"}>Com seu design inconfundível, o novo Honda Fit traz novidades que vão surpreender a todos e atrair ainda mais fãs.</p>
                <button className={"button"}>CONHEÇA MAIS</button>
            </div>

        </div>
    )

}

const FourthBlock = () => {
    return (
        <div className={"block-4"}>
            <div>
                <p>PRONTO PARA TER UM HONDA?</p>
            </div>
            <div>
                <p>Conheça os últimos grandes lançamentos da honda.</p>
            </div>
            <Card />
        </div>
    )
}



export default FourthBlock