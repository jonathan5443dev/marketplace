import React from 'react';
import MultiStepForm from '../../components/multi-step-form/multi-step-form';
import CreateProductName from './steps/name';
import CreateProductType from './steps/type';
import CreateProductCategory from './steps/category';
import CreateProductSubCategory from './steps/sub-category';
import CreateProductState from './steps/state';
import CreateProductImage from './steps/image';

const CreateProduct = () => {
  return (
    <MultiStepForm
      steps={[
        {
          title: 'Indica tu producto, marca y model',
          content: <CreateProductName />,
        },
        {
          title: '¿Cómo clasificas tu producto?',
          content: <CreateProductType />,
        },
        {
          title: '¿Qué opción define a tu producto?',
          content: <CreateProductCategory />,
        },
        {
          title: '¿Qué opción define a tu producto?',
          content: <CreateProductSubCategory />,
        },
        {
          title: 'Tu producto es...',
          content: <CreateProductState />,
        },
        {
          title: 'Agrega fotos de tu producto',
          content: <CreateProductImage />,
        },
      ]}
    />
  );
};

export default CreateProduct;
