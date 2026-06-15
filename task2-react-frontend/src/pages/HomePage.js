import React from 'react';
import ProductList from '../components/ProductList';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1>Product Catalog</h1>
      <ProductList />
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px'
  }
};

export default HomePage;