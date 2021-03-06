import React from 'react';

const Imagen = ({imagen}) =>{

  //var extract
  const {largeImageURL, previewURL, likes, tags, views} = imagen;

  return(
    <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
      <div className='card'>
        <img src={previewURL} atl={tags} className='card-img-top'/>
        <div className='card-body'>
          <p className='card-text'>{likes} Me gusta</p>
          <p className='card-text'>{views} Vista</p>
        </div>
        <div className='card-footer'>
          <a
            href={largeImageURL}
            target='blank'
            rel='noopener noreferrer'
            className='btn btn-dark'
          >Ver imagen HD</a>
        </div>
      </div>
    </div>
  );
}


export default Imagen;
