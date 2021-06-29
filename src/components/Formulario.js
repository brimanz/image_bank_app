import React, {useState} from 'react';
import Error from './Error'


const Formulario = ({guardarBusqueda}) =>{
  //using states
  const [termino, guardarTermino] = useState('');
  const [error, guardarError] = useState(false);

  //search image function
  const buscarImagen = e =>{
    e.preventDefault();

    //validate
    if(termino.trim()=== ''){
      guardarError(true);
      return;
    }
    guardarError(false);

    //send term to the main component
    guardarBusqueda(termino);
  }

  return(
    <form
      onSubmit={buscarImagen}
    >
      <div className='row'>
        <div className='form-goup col-md-8'>
          <input
            type='text'
            className='form-control'
            placeholder='Busca una imagen ya!!'
            onChange={e => guardarTermino(e.target.value)}
          />
        </div>
        <div className='form-goup col-md-4'>
          <input
            type='submit'
            className='btn btn-dark form-control'
            value='Buscar'
          />
        </div>
      </div>
      {error ? <Error mensaje='Debe agregar una busqueda'/> : null}
    </form>
  )
}


export default Formulario;
