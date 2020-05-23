import React from 'react';
import Button from '../../../components/button/button';

const CreateProductName = ({nextStep}) => {
  return (
    <>
      <Button value="continue" onPress={() => nextStep()} />
    </>
  );
};

export default CreateProductName;
