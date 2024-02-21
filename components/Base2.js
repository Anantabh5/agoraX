import React from 'react';

const Base2= ({ children }) => {
  return (
    <div
      style={{
        background: 'linear-gradient(to right,  #BD84C6, #1c1442 )',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      {children}
    </div>
  );
};

export default Base2;
