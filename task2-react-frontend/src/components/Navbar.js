import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{
      background: 'rgba(26, 26, 46, 0.95)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      padding: '1rem 2rem',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: '1px solid rgba(255,255,255,0.1)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{
            width: '45px',
            height: '45px',
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            animation: 'pulse 2s infinite'
          }}>
            🛒
          </div>
          <h2 style={{ margin: 0 }}>
            <Link to="/" style={{
              background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 25%, #4facfe 50%, #00f2fe 75%, #43e97b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textDecoration: 'none',
              fontSize: '1.8rem',
              fontWeight: 'bold',
              backgroundSize: '200% auto',
              animation: 'gradientShift 3s linear infinite'
            }}>
              PremiumStore
            </Link>
          </h2>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link to="/" style={{
            color: '#e0e0e0',
            textDecoration: 'none',
            padding: '10px 24px',
            borderRadius: '50px',
            transition: 'all 0.3s ease',
            fontWeight: '500'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            e.target.style.color = 'white';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = '#e0e0e0';
            e.target.style.transform = 'translateY(0)';
          }}>
            🏠 Home
          </Link>
          <Link to="/add" style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            textDecoration: 'none',
            padding: '10px 24px',
            borderRadius: '50px',
            transition: 'all 0.3s ease',
            fontWeight: '500'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 5px 20px rgba(102,126,234,0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}>
            ➕ Add Product
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;