import React from 'react';
import Button from '../../../components/button/button';
import Input from '../../../components/input/input';
import Text from '../../../components/text/text';

import {Container, AdviceContainer} from './styles';

const CreateProductName = ({nextStep}) => {
  return (
    <Container>
      <Input
        multiline={true}
        placeholder="Ej.: Celular Samsung Galaxy S9 64 GB negro"
      />
      <AdviceContainer>
        <Text type="small" color="gray">
          Evita incluir condiciones de venta
        </Text>
      </AdviceContainer>
      <Button value="Continuar" onPress={() => nextStep()} />
    </Container>
  );
};

export default CreateProductName;
