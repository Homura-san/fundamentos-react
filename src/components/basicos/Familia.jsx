import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default props => {
    <div>
        <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome} />
        <FamiliaMembro nome="Val" {...props} /> // Spread operator
        <FamiliaMembro nome="Marco" sobrenome="Ferreira" />
    </div>
}