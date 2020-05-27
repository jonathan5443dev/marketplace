import React from 'react';
import CreateProductName from './steps/name';
import CreateProductType from './steps/type';
import CreateProductState from './steps/state';
import CreateProductImage from './steps/image';
import CreateProductPrice from './steps/price';
import CreateProductDelivery from './steps/delivery';
import CreateProductCategory from './steps/category';
import CreateProductGuarantee from './steps/guarantee';
import CreateProductDescription from './steps/description';
import CreateProductSubCategory from './steps/sub-category';
import CreateProductConfirmation from './steps/confirmation';
import CreateProductGuaranteeTime from './steps/guarantee-time';

import MultiStepForm from '../../components/multi-step-form/multi-step-form';

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
        {
          title: 'Describe tu producto',
          content: <CreateProductDescription />,
        },
        {
          title: '¿Cuál es el precio?',
          content: <CreateProductPrice />,
        },
        {
          title: '¿Cómo quieres entregar tu producto?',
          content: <CreateProductDelivery />,
        },
        {
          title: '¿Cuánto tiempo de garantía ofreces?',
          content: <CreateProductGuarantee />,
        },
        {
          title: '¿Cuánto tiempo de garantía ofreces?',
          content: <CreateProductGuaranteeTime />,
        },
        {
          title: 'Revisa y publica',
          content: <CreateProductConfirmation />,
        },
        {
          title: 'Revisa y publica',
          content: <CreateProductConfirmation />,
        },
      ]}
    />
  );
};

export default CreateProduct;
