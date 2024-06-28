import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    //Método map -> arreglo.map ( (equipo, index)  => {
    //  return <option></option>
    //    })

    //Ya no utilizaremos este array porque está definido en App.js con más datos
    // const equipos = [
        // "Programación",
        // "Front End",
        // "Data Science",
        // "Devops",
        // "UX y Diseño",
        // "Móvil",
        // "Inovación y Gestión"
    // ]

    const manejarCambio = (e) => {
        console.log("cambio",e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((equipo, index)=> <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones;