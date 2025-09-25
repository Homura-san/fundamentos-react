import React from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props => {
    let name = ""
    let age = 0
    let n = false
    //nome idade nerd
    function fornecerInformacoes(nome, idade, nerd) {
        name = nome
        age = idade
        n = nerd
        console.log(name, age, n)
    }

    return (
        <div>
            <div>
                <span>{name}</span>
                <span><strong> {age} </strong></span>
                <span>{n ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}