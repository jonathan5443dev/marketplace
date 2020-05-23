import React from 'react';
import MultiStepForm from '../../components/multi-step-form/multi-step-form';
import CreateProductName from './steps/name';

const CreateProduct = () => {
  return (
    <MultiStepForm
      steps={[
        {
          title: 'indica tu producto, marca y model',
          content: <CreateProductName />,
        },
        {
          title: 'indica tu producto, marca y model',
          content: <CreateProductName />,
        },
        {
          title: 'indica tu producto, marca y model',
          content: <CreateProductName />,
        },
        {
          title: 'indica tu producto, marca y model',
          content: <CreateProductName />,
        },
        {
          title: 'indica tu producto, marca y model',
          content: <CreateProductName />,
        },
      ]}
    />
  );
};

export default CreateProduct;
