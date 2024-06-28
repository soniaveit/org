import { useState } from "react";
import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado / hooks
    //useState
    //const [nombreVariable,funcionActualiza]=useState(valorInicial)
    console.log(props)
    // const [mostrar,actualizarMostrar]=useState(true)
    // const manejarClick = () => {
        // console.log("Mostrar/Ocultar el elemento", !mostrar);
        // actualizarMostrar(!mostrar)
    // }
    //combinacion de teclas para comentar
    // CTRL + K + C
    
    return <section className="orgSection">
        <h3 className="title">Mi organización </h3>;
        <img src="/img/add.png" alt="Add MiOrg" onClick={props.cambiarMostrar}></img>;
    </section>
}

export default MiOrg;