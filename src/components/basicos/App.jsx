import React from "react";
import './index.css';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';

// Sintaxe de função mais reduzida possível

export default _ =>
    <div id="app">
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Carlos Pareira" nota={6.2}
        />

        <Primeiro />
    </div>

