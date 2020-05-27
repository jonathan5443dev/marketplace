import React from 'react';
import Button from '../../../components/button/button';
import Input from '../../../components/input/input';
import Text from '../../../components/text/text';

import {Container, AdviceContainer} from './styles';

const CreateProductDescription = ({nextStep}) => {
  return (
    <Container>
      <Input
        multiline={true}
        placeholder="Ej.: Celular con excelentes condiciones, sin rayones..."
      />
      <AdviceContainer>
        <Text type="small" color="gray">
          Es opcional. No incluyas datos de contacto, como e-mails, teléfonos,
          direcciones, links externos y redes sociales
        </Text>
      </AdviceContainer>
      <Button value="Continuar" onPress={() => nextStep()} />
    </Container>
  );
};

export default CreateProductDescription;
