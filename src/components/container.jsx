import React from 'react';
import Sidebar  from './Sidebar'; 

 const Container = ({children}) => {
    
  return (
    <div className='flex items-start'>
      {children}
    </div>
  );
};
export default Container