import React from 'react';

import './Container.css'

const Container = ({ children }) => {
  return (
    <div className='container container-flex__column'>
      {children}
    </div>
  )
}

export default Container;