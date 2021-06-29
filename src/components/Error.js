import React from 'react';

const Error = ({mensaje}) =>{
  return(
    <p className='my-5 p-4 text-center alert-danger'><strong>{mensaje}</strong></p>
  );
}


export default Error;
