import React from 'react';

 const Container = ({children}) => {
    
  return (
    <div className='flex items-start'>
      {children}
    </div>
  );
};
export default Container