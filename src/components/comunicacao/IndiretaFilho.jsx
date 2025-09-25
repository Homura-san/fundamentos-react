import React from "react";


export default props => {
    
    return (
        <div>
            <div>Filho</div>

            <button onClick={_ => props.quandoClicar('Marco', 72, true)}>
                fornecer informações</button>
        </div>
    )
}