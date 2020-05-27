import React from 'react';
import Button from '../../../components/button/button';
import Input from '../../../components/input/input';

import {Container} from './styles';

const CreateProductGuaranteeTime = ({nextStep}) => {
  return (
    <Container>
      <Input label="Meses" placeholder="0" />
      <Button value="Continuar" onPress={() => nextStep()} />
    </Container>
  );
};

export default CreateProductGuaranteeTime;
