import React from 'react';

const LoadingSpinner = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '400px',
      flexDirection: 'column',
      gap: '20px'
    }}>
      <div style={{
        width: '80px',
        height: '80px',
        border: '4px solid rgba(102,126,234,0.2)',
        borderTop: '4px solid #f093fb',
        borderRight: '4px solid #f5576c',
        borderBottom: '4px solid #4facfe',
        borderLeft: '4px solid #00f2fe',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <p style={{
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 'bold',
        fontSize: '18px'
      }}>
        Loading amazing products...
      </p>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingSpinner;