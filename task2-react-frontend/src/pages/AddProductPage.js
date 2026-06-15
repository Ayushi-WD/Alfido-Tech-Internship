import React from 'react';
import ProductForm from '../components/ProductForm';

const AddProductPage = () => {
  return (
    <div>
      <ProductForm isEditing={false} />
    </div>
  );
};

export default AddProductPage;