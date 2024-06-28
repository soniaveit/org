import {v4 as uuid} from "uuid"
import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';
//import Colaborador from './componentes/Colaborador';

function App() {
  const [mostrarFormulario, actualizarMostrar]=useState(false);
  //lo sig comienza con un ARREGLO VACIO para el estado de actualizar colaboradores
  //const [colaboradores, actualizarColaboradores]=useState([])

  //Si quisiera que comience con un colaborador ya cargado, cuando recargo la página seía:
  const [colaboradores, actualizarColaboradores]=useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/soniaveit.png",
      nombre: "Sonia Veit",
      puesto: "Instructora",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav: true
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false
    }
  ])

  const [equipos, actualizarEquipos]=useState([
    {
      id: uuid(),
      titulo:"Programación",
      colorPrimario: "#57C278",
      colorSecundario:"#D9F7E9"
    },

    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario: "#82CFFA",
      colorSecundario:"#E8F8FF"
    },

    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario: "#A6D157",
      colorSecundario:"#F0F8E2"
    },

    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario: "#E06B69",
      colorSecundario:"#FDE7E8"
    },

    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario:"#FAE9F5"
    },

    {
      id: uuid(),
      titulo:"Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario:"#FFF5D9"
    },

    {
      id: uuid(),
      titulo:"Inovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario:"#FFEEDF"
    }

  ] )

  //console.log(uuid()) //este era para ver cómo crea un id cada vez que recargamos la pág
  
  //Ternario --> condicion ? seMuestra : noSeMuestra
  // condicion && seMuestra  --> es otra opcion al Ternario

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador: ", colaborador)
    //Spread operator --> hace una copia de los datos que existen en colaboradores
    actualizarColaboradores([...colaboradores,colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador: ", id)

    // 1
    //const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    //2
    const nuevosColaboradores = colaboradores.filter((colaborador) => {
      console.log("Filtrando el colaborador: ", colaborador.id);
      return colaborador.id!==id
    } )
    //3 
    // lo que está en 1 es lo mismo que lo que está entre 2 y 3
    // lo cambié para poder ver cuál es el id del colaborador que se está filtrando en esa instancia
    
    actualizarColaboradores(nuevosColaboradores)
    console.log("Nuevos colaboradores: ", nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor=(color, id) => {
    console.log("Actualizar color: ", color, id)
    const equiposActualizados=equipos.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario=color
      }

      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid()}])
  }

  // Funcion like
  const like = (id) => {
    console.log("like", id)
    const colaboradoresActualizados= colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      {/* tres formas distintas que muestran el Header.png en la página*/} 
      {/*{Header()};
      <Header></Header>;
      <Header/>; */}
      <Header/>

      {/* //Componente FORMULARIO */}
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {mostrarFormulario && <Formulario 
        equipos={equipos.map((equipo)=>equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
        />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {/* Lo siguiente ya no se usará porque se creó un array por cada equipo 
      <Equipo equipo="Programación"/>
      <Equipo equipo="Front End"/>
      <Equipo equipo="Data Science"/>
      <Equipo equipo="Devops"/>
      <Equipo equipo="Ux y Diseño"/>
      */}

      {/* Lo que sigue es para recorrer el arreglo (array) de cada equipo */}
      { 
        equipos.map((equipo) => 
          <Equipo 
            datos={equipo} 
            key={equipo.titulo}
            colaboradores={colaboradores.filter(colaborador=>colaborador.equipo===equipo.titulo)}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            like={like}
          />)
      }

      <Footer />
      
    </div>
  );
}

export default App;
