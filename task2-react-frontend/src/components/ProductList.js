import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts, deleteProduct } from '../services/api';
import LoadingSpinner from './LoadingSpinner';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('');

  useEffect(() => {
    fetchProducts();
  }, [category]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await getProducts(category);
      setProducts(data.data);
      setError(null);
    } catch (err) {
      setError('Failed to load products. Make sure the API server is running on port 5000');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id, name) => {
    if (window.confirm(`Are you sure you want to delete "${name}"?`)) {
      try {
        await deleteProduct(id);
        fetchProducts();
      } catch (err) {
        alert('Failed to delete product');
      }
    }
  };

  const getCategoryIcon = (category) => {
    const icons = {
      electronics: '💻',
      clothing: '👔',
      books: '📖',
      food: '🍕',
      other: '🎁'
    };
    return icons[category] || '📦';
  };

  const getCategoryColor = (category) => {
    const colors = {
      electronics: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      clothing: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      books: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      food: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      other: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    };
    return colors[category] || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  };

  // Sample products to add if database is empty
  const sampleProducts = [
    { name: "Gaming Laptop Pro", price: 1499.99, category: "electronics", description: "Ultimate gaming laptop with RTX 4080, 32GB RAM, 1TB SSD", inStock: true },
    { name: "Wireless Headphones", price: 199.99, category: "electronics", description: "Noise cancelling, 30hr battery life, premium sound", inStock: true },
    { name: "Smart Watch Ultra", price: 399.99, category: "electronics", description: "Fitness tracking, GPS, heart rate monitor", inStock: true },
    { name: "Designer T-Shirt", price: 49.99, category: "clothing", description: "Premium cotton, modern fit, available in multiple colors", inStock: true },
    { name: "Leather Jacket", price: 299.99, category: "clothing", description: "Genuine leather, classic design, winter essential", inStock: false },
    { name: "JavaScript: The Definitive Guide", price: 59.99, category: "books", description: "Complete guide to modern JavaScript, 1000+ pages", inStock: true },
    { name: "React Mastery", price: 49.99, category: "books", description: "Learn React hooks, context, and advanced patterns", inStock: true },
    { name: "Gourmet Pizza Kit", price: 34.99, category: "food", description: "Make authentic Italian pizza at home", inStock: true },
    { name: "Premium Coffee Beans", price: 24.99, category: "food", description: "Single-origin Arabica, medium roast", inStock: true }
  ];

  if (loading) return <LoadingSpinner />;
  if (error) return <div style={{ color: 'red', textAlign: 'center', marginTop: '50px' }}>{error}</div>;

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <div style={{
        textAlign: 'center',
        marginBottom: '50px',
        padding: '60px 20px',
        background: 'linear-gradient(135deg, rgba(102,126,234,0.15) 0%, rgba(118,75,162,0.15) 100%)',
        borderRadius: '30px',
        backdropFilter: 'blur(10px)',
        animation: 'float 3s ease-in-out infinite'
      }}>
        <h1 style={{
          fontSize: '4rem',
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 25%, #4facfe 50%, #00f2fe 75%, #43e97b 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '15px',
          backgroundSize: '200% auto',
          animation: 'gradientShift 3s linear infinite'
        }}>
          ✨ PREMIUM PRODUCTS ✨
        </h1>
        <p style={{ 
          color: '#e0e0e0', 
          fontSize: '1.3rem',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Discover our curated collection of amazing products at unbeatable prices
        </p>
      </div>

      {/* Filter Section */}
      <div style={{
        marginBottom: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap'
      }}>
        <label style={{ 
          fontWeight: 'bold', 
          color: '#e0e0e0',
          fontSize: '1.1rem'
        }}>🔍 Filter by:</label>
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
          style={{
            padding: '12px 30px',
            borderRadius: '50px',
            border: '2px solid transparent',
            fontSize: '14px',
            cursor: 'pointer',
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            color: '#e0e0e0',
            transition: 'all 0.3s ease'
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#f5576c';
            e.target.style.transform = 'scale(1.05)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = 'transparent';
            e.target.style.transform = 'scale(1)';
          }}
        >
          <option value="">📋 All Categories</option>
          <option value="electronics">💻 Electronics</option>
          <option value="clothing">👔 Clothing</option>
          <option value="books">📖 Books</option>
          <option value="food">🍕 Food</option>
          <option value="other">🎁 Other</option>
        </select>
        
        {products.length > 0 && (
          <div style={{
            padding: '8px 20px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '50px',
            color: 'white',
            fontWeight: 'bold'
          }}>
            🎯 {products.length} Products Found
          </div>
        )}
      </div>

      {/* Products Grid */}
      {products.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '80px',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '30px',
          backdropFilter: 'blur(10px)'
        }}>
          <p style={{ fontSize: '1.3rem', color: '#e0e0e0' }}>No products found. Add your first product!</p>
          <Link to="/add">
            <button style={{
              marginTop: '20px',
              padding: '12px 30px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}>
              ➕ Add Your First Product
            </button>
          </Link>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '30px',
          padding: '10px'
        }}>
          {products.map((product, index) => (
            <div 
              key={product._id} 
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`,
                border: '1px solid rgba(255,255,255,0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
              }}
            >
              {/* Card Header */}
              <div style={{
                background: getCategoryColor(product.category),
                padding: '25px',
                textAlign: 'center',
                position: 'relative'
              }}>
                <div style={{
                  fontSize: '60px',
                  marginBottom: '10px',
                  animation: 'float 2s ease-in-out infinite'
                }}>
                  {getCategoryIcon(product.category)}
                </div>
                <h3 style={{
                  fontSize: '1.8rem',
                  color: 'white',
                  marginBottom: '8px',
                  fontWeight: 'bold',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
                }}>
                  {product.name}
                </h3>
                <span style={{
                  display: 'inline-block',
                  padding: '5px 15px',
                  background: 'rgba(255,255,255,0.3)',
                  backdropFilter: 'blur(5px)',
                  color: 'white',
                  borderRadius: '25px',
                  fontSize: '13px',
                  fontWeight: 'bold'
                }}>
                  {product.category.toUpperCase()}
                </span>
              </div>

              {/* Card Body */}
              <div style={{ padding: '25px' }}>
                <div style={{
                  fontSize: '36px',
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '15px'
                }}>
                  ${product.price}
                </div>
                <p style={{
                  color: '#c0c0c0',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  marginBottom: '20px',
                  minHeight: '65px'
                }}>
                  {product.description.substring(0, 100)}...
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '25px',
                  padding: '12px',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '12px'
                }}>
                  <span style={{ fontSize: '14px', color: '#a0a0a0' }}>📦 Stock Status:</span>
                  <span style={{
                    color: product.inStock ? '#43e97b' : '#f5576c',
                    fontWeight: 'bold',
                    fontSize: '14px'
                  }}>
                    {product.inStock ? '✅ In Stock Now!' : '❌ Sold Out'}
                  </span>
                </div>

                {/* Action Buttons */}
                <div style={{
                  display: 'flex',
                  gap: '12px',
                  justifyContent: 'space-between'
                }}>
                  <Link to={`/product/${product._id}`} style={{ flex: 1 }}>
                    <button style={{
                      width: '100%',
                      padding: '12px',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '12px',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}>
                      👁️ View Details
                    </button>
                  </Link>
                  <Link to={`/edit/${product._id}`} style={{ flex: 1 }}>
                    <button style={{
                      width: '100%',
                      padding: '12px',
                      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '12px',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}>
                      ✏️ Edit
                    </button>
                  </Link>
                  <button 
                    onClick={() => handleDelete(product._id, product.name)}
                    style={{
                      flex: 1,
                      padding: '12px',
                      background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                      color: '#1a1a2e',
                      border: 'none',
                      borderRadius: '12px',
                      fontSize: '14px',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;