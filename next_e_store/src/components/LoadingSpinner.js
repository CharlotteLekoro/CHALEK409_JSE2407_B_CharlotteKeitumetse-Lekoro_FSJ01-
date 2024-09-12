'use client'; // Indicate that this is a client component

import React from 'react';

const LoadingSpinner = () => (
  <div style={{ textAlign: 'center', marginTop: '20px' }}>
    <div style={{
      border: '5px solid rgba(0, 0, 0, 0.1)', 
      borderRadius: '50%', 
      borderTop: '5px solid #0070f3', 
      width: '40px', 
      height: '40px', 
      animation: 'spin 1s linear infinite'
    }} />
    <style jsx>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

export default LoadingSpinner;
