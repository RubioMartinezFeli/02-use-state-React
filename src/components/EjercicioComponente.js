import React, { useState } from 'react'
import { PropTypes } from 'prop-types'

export const EjercicioComponente = ({year_actual}) => {

  const [year, setyear] = useState(year_actual);

  const siguienteyear = (e, year) => {
    setyear(year + 1);
  }

  const anterioryear = (e, year) => {
    setyear(year - 1);
  }

  const escribiryear = e => {
    let dato = parseInt(e.target.value);

    if(Number.isInteger(dato)){
       setyear(dato);
    }else {
      setyear(year_actual);
    }
  }

  return (
    <div>
        <h3>Ejercicio Curso React</h3>

        <p>El año seleccionado es: {year}</p>

        <button onClick={ e=> anterioryear(e, year) }>Pasar al anterior año</button>
        <button onClick={ e=> siguienteyear(e, year) }>Pasar al siguiente año</button>
        <br/>
        <input 
          type="text" 
          onChange={e => escribiryear(e) } 
          placeholder='Escribe el año' ></input>
    </div>
  )

  
}

EjercicioComponente.propTypes = {
  year_actual: PropTypes.number.isRequired
  }
 