import React from 'react';

const Base= ({ children }) => {
  return (
    <div
      style={{
        background: 'linear-gradient(to right,  #21006D, #57007F )',
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

export default Base;
