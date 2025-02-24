import React from "react";
import "./App.css";
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Aleatorio from "./components/basicos/Aleatorio";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Card from './components/layouts/Card';

// Sintaxe de função mais reduzida possível

export default _ =>
    <div className="App">
        <div className="Cards">
        <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

            <Card titulo="Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="Componente com Parâmetro" color="#E94C6F">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Carlos Pareira" nota={6.2}
                />
            </Card>

            <Card titulo="Primeiro Componente" color="#E8B71A">
                <Primeiro />
            </Card>
        </div>
    </div>



