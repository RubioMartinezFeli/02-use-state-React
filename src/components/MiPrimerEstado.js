import React, {useState} from 'react'

export const MiPrimerEstado = () => {

/*
Problema

let nombre = "Feli";

const cambiarNombre = e => {
    nombre = "PaquitoFernandez";
}
*/

//Solución: Hook useState
const [nombre, setNombre] = useState("Feli")

const cambiarNombre = (e, nombre_fijo) => {
    console.log(e.target);
    setNombre(nombre_fijo);
}

  return (
    <div>
        <h3>Componente: MiPrimerEstado</h3>
        <strong className='label'>
            {nombre}
        </strong>
        &nbsp;

        <button onClick={ e => cambiarNombre(e, "Arantxa") }>Cambiar nombre por Arantxa</button>
        &nbsp;

        <input type="text" onKeyUp={ e => cambiarNombre(e, e.target.value) } placeholder='Cambia el nombre'></input>
    </div>
  )
}
