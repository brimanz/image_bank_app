import React, {useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';



function App() {

  //using states
  const [busqueda, guardarBusqueda] = useState('');
  const [imagenes, guardarImagenes] = useState([]);
  const [paginaactual, guardarPaginaActual] = useState(1);
  const [totalpaginas, guardarTotalPaginas] = useState(1);


  useEffect(()=> {
    const consultarApi = async() =>{
      if(busqueda === '')
      return;
      const imagenesPorPagina = 25;
      const key = '22164929-518f0719c22ac1c15ee568524';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaactual}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      guardarImagenes(resultado.hits);

      //calculate total pages
      const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina);
      guardarTotalPaginas(calcularTotalPaginas);

      //up initial page
      const smooth = document.querySelector('.container-2');
      smooth.scrollIntoView({behavior: 'smooth'})

    }
    consultarApi();
  },[busqueda, paginaactual])

  //back page
  const paginaAnterior = () =>{
    const nuevaPaginaActual = paginaactual-1
    if (nuevaPaginaActual === 0) return;
    guardarPaginaActual(nuevaPaginaActual);
  }

  //next page
  const paginaSiguiente = () =>{
    const nuevaPaginaActual = paginaactual+1
    if(nuevaPaginaActual > totalpaginas) return;
    guardarPaginaActual(nuevaPaginaActual);
  }

  return (
    <div className='container'>
      <div className='container-2'>
        <p className='lead text-center'>Banco de imagenes</p>
        <Formulario
          guardarBusqueda={guardarBusqueda}
        />
      </div>
      <div className='row justify-conten-center'>
        <ListadoImagenes
          imagenes={imagenes}
        />
        {(paginaactual === 1)? null :
          <button
            type='button'
            className='btn btn-dark mr-1 mb-2'
            onClick={paginaAnterior}
          >&laquo; Anterior</button>
        }
        {(paginaactual === totalpaginas) ? null :
          <button
            type='button'
            className='btn btn-dark mb-2'
            onClick={paginaSiguiente}
          >Siguiente &raquo;</button>
        }
      </div>
    </div>

  );
}

export default App;
