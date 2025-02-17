import React from "react";
import './index.css';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Aleatorio from "./components/basicos/Aleatorio";
import Card from './components/layouts/Card';

// Sintaxe de função mais reduzida possível

export default _ =>
    <div id="app">
        <Card titulo="Primeiro Componente">
            <Primeiro />
        </Card>

        <Card titulo="Desafio Aleatório">
            <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="Componente com Parâmetro">
            <ComParametro
                titulo="Situação do Aluno"
                aluno="Carlos Pareira" nota={6.2}
            />
        </Card>

        

    </div>



