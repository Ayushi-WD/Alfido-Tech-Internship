import React from 'react';
import { useParams } from 'react-router-dom';
import ProductForm from '../components/ProductForm';

const EditProductPage = () => {
  const { id } = useParams();
  return <ProductForm isEditing={true} productId={id} />;
};

export default EditProductPage;