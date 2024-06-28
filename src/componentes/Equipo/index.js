import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
    //Destructuracion
    //lo sig sería lo mismo que hacer...
    // const colorPrimario=props.datos.colorPrimario
    // const colorSecundario=props.datos.colorSecundario
    // const titulo=props.datos.titulo
    const {colorPrimario, colorSecundario, titulo, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props
    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6) 
    }

    //Cuántos elementos existen en colaboradores
    //console.log(colaboradores.length>0)

    const estiloTitulo = {borderColor: colorPrimario}

    return <> {
        //si colaboradores cantidad de elementos es >0 entonces (&&)...
        colaboradores.length >0 &&
            <section className="equipo" style={obj}>
                <input
                    type="color"
                    className="input-color"
                    value={colorPrimario}
                    //value={hexToRgba(colorPrimario, 0.6)}
                    onChange={(evento)=> {
                        actualizarColor(evento.target.value, id)
                    }}
                />
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map( (colaborador, index) => <Colaborador 
                        datos={colaborador} 
                        key={index}
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        like={like}
                    />)
                }
            </div>
        </section>
    }</>
}

export default Equipo