import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProduct } from '../services/api';
import LoadingSpinner from './LoadingSpinner';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const data = await getProduct(id);
      setProduct(data.data);
      setError(null);
    } catch (err) {
      setError('Product not found or server error');
    } finally {
      setLoading(false);
    }
  };

  const getCategoryIcon = (category) => {
    const icons = {
      electronics: '📱',
      clothing: '👕',
      books: '📚',
      food: '🍔',
      other: '🎁'
    };
    return icons[category] || '📦';
  };

  const getCategoryColor = (category) => {
    const colors = {
      electronics: '#667eea',
      clothing: '#f093fb',
      books: '#4facfe',
      food: '#43e97b',
      other: '#fa709a'
    };
    return colors[category] || '#667eea';
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div style={{ color: 'red', textAlign: 'center', marginTop: '50px' }}>{error}</div>;

  return (
    <div className="fade-in" style={{
      maxWidth: '900px',
      margin: '40px auto',
      padding: '20px'
    }}>
      <Link to="/" style={{
        display: 'inline-block',
        marginBottom: '20px',
        color: '#667eea',
        textDecoration: 'none',
        fontWeight: 'bold'
      }}>
        ← Back to Products
      </Link>
      
      <div style={{
        background: 'white',
        borderRadius: '30px',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
      }}>
        {/* Header */}
        <div style={{
          background: `linear-gradient(135deg, ${getCategoryColor(product.category)} 0%, ${getCategoryColor(product.category)}80 100%)`,
          padding: '40px',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '80px',
            marginBottom: '20px'
          }}>
            {getCategoryIcon(product.category)}
          </div>
          <h1 style={{
            fontSize: '2.5rem',
            color: 'white',
            marginBottom: '10px'
          }}>
            {product.name}
          </h1>
          <span style={{
            display: 'inline-block',
            padding: '6px 16px',
            background: 'rgba(255,255,255,0.3)',
            backdropFilter: 'blur(10px)',
            color: 'white',
            borderRadius: '30px',
            fontSize: '14px',
            fontWeight: 'bold'
          }}>
            {product.category}
          </span>
        </div>

        {/* Body */}
        <div style={{ padding: '40px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '30px',
            padding: '20px',
            background: '#f7fafc',
            borderRadius: '20px'
          }}>
            <div>
              <span style={{ color: '#718096', fontSize: '14px' }}>Price</span>
              <div style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#667eea'
              }}>
                ${product.price}
              </div>
            </div>
            <div style={{
              padding: '10px 20px',
              background: product.inStock ? '#48bb78' : '#f56565',
              color: 'white',
              borderRadius: '50px',
              fontWeight: 'bold'
            }}>
              {product.inStock ? '✅ In Stock' : '❌ Out of Stock'}
            </div>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#2d3748', marginBottom: '10px' }}>📝 Description</h3>
            <p style={{ color: '#4a5568', lineHeight: '1.8', fontSize: '16px' }}>
              {product.description}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            marginBottom: '30px',
            padding: '20px',
            background: '#f7fafc',
            borderRadius: '20px'
          }}>
            <div>
              <span style={{ color: '#718096', fontSize: '14px' }}>📅 Created</span>
              <p style={{ fontWeight: 'bold', color: '#2d3748' }}>
                {new Date(product.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div>
              <span style={{ color: '#718096', fontSize: '14px' }}>🔄 Last Updated</span>
              <p style={{ fontWeight: 'bold', color: '#2d3748' }}>
                {new Date(product.updatedAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          <Link to={`/edit/${product._id}`}>
            <button style={{
              width: '100%',
              padding: '15px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
              ✏️ Edit This Product
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;