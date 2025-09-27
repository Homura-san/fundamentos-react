import React from "react";
import './Contador.css'

class Contador extends React.Component {
    // Sintaxe 1 - Usando construtor
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         numero: props.numeroInicial
    //     }
    //     this.inc = this.inc.bind(this)
    // }

    // Sintaxe 2 - Sem usar construtor
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }


    // Método sem arrow function - precisa bind no construtor
    // inc() {
    //     this.setState({
    //         numero: this.state.numero + 1
    //     });
    // }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        });
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        });
    }

    setPasso = evento => {
        // O + converte string para número
        this.setState({
            passo: +evento.target.value
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <h3> {this.state.numero} </h3>

                <div>
                    <label htmlFor="passoInput">Passo:</label>
                    <input id="passoInput" type="number"
                        value={this.state.passo} onChange={this.setPasso}
                    />
                </div>

                <button onClick={this.inc}> + </button>
                <button onClick={this.dec}> - </button>
            </div>
        );
    }
}

export default Contador;