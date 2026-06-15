import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProduct, updateProduct, getProduct } from '../services/api';

const ProductForm = ({ isEditing, productId }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    category: 'electronics',
    inStock: true
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isEditing && productId) {
      loadProduct();
    }
  }, [isEditing, productId]);

  const loadProduct = async () => {
    try {
      setLoading(true);
      const data = await getProduct(productId);
      setFormData({
        name: data.data.name,
        price: data.data.price,
        description: data.data.description,
        category: data.data.category,
        inStock: data.data.inStock
      });
    } catch (err) {
      setError('Failed to load product');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isEditing) {
        await updateProduct(productId, formData);
        alert('✨ Product updated successfully!');
      } else {
        await createProduct(formData);
        alert('🎉 Product created successfully!');
      }
      navigate('/');
    } catch (err) {
      setError('Failed to save product. Please check all fields.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fade-in" style={{
      maxWidth: '700px',
      margin: '40px auto',
      padding: '40px',
      background: 'white',
      borderRadius: '30px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div style={{
          fontSize: '48px',
          marginBottom: '10px'
        }}>
          {isEditing ? '✏️' : '➕'}
        </div>
        <h2 style={{
          fontSize: '2rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          {isEditing ? 'Edit Product' : 'Create New Product'}
        </h2>
        <p style={{ color: '#718096' }}>
          {isEditing ? 'Update your product information' : 'Fill in the details to add a new product'}
        </p>
      </div>

      {error && <div style={{
        background: '#fed7d7',
        color: '#c53030',
        padding: '15px',
        borderRadius: '10px',
        marginBottom: '20px',
        textAlign: 'center'
      }}>{error}</div>}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: 'bold',
            color: '#2d3748'
          }}>
            🏷️ Product Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '10px',
              border: '2px solid #e2e8f0',
              fontSize: '16px',
              transition: 'all 0.3s ease'
            }}
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
            placeholder="Enter product name"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: 'bold',
            color: '#2d3748'
          }}>
            💰 Price *
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            step="0.01"
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '10px',
              border: '2px solid #e2e8f0',
              fontSize: '16px',
              transition: 'all 0.3s ease'
            }}
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
            placeholder="0.00"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: 'bold',
            color: '#2d3748'
          }}>
            📝 Description *
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '10px',
              border: '2px solid #e2e8f0',
              fontSize: '16px',
              fontFamily: 'inherit',
              transition: 'all 0.3s ease'
            }}
            onFocus={(e) => e.target.style.borderColor = '#667eea'}
            onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
            placeholder="Describe your product..."
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: 'bold',
            color: '#2d3748'
          }}>
            📂 Category *
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '10px',
              border: '2px solid #e2e8f0',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            <option value="electronics">📱 Electronics</option>
            <option value="clothing">👕 Clothing</option>
            <option value="books">📚 Books</option>
            <option value="food">🍔 Food</option>
            <option value="other">🎁 Other</option>
          </select>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <label style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer'
          }}>
            <input
              type="checkbox"
              name="inStock"
              checked={formData.inStock}
              onChange={handleChange}
              style={{ width: '20px', height: '20px', cursor: 'pointer' }}
            />
            <span style={{ fontWeight: 'bold', color: '#2d3748' }}>✅ Available in Stock</span>
          </label>
        </div>

        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '12px 30px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            {loading ? '⏳ Saving...' : (isEditing ? '✨ Update Product' : '🚀 Create Product')}
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            style={{
              padding: '12px 30px',
              background: '#e2e8f0',
              color: '#4a5568',
              border: 'none',
              borderRadius: '50px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#cbd5e0';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#e2e8f0';
              e.target.style.transform = 'scale(1)';
            }}
          >
            ❌ Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;