import React from 'react';
import Button from '../../../components/button/button';
import Text from '../../../components/text/text';

import {
  ContainerFullWidth,
  ConfirmationItem,
  PublishContainer,
  PhotoCarousel,
  PhotoItem,
} from './styles';

const CreateProductConfirmation = ({nextStep}) => {
  return (
    <ContainerFullWidth>
      <ConfirmationItem>
        <Text color="gray" type="small">
          Fotos
        </Text>
        <PhotoCarousel>
          <PhotoItem source={{uri: 'https://picsum.photos/300/300'}} />
          <PhotoItem source={{uri: 'https://picsum.photos/300/300'}} />
          <PhotoItem source={{uri: 'https://picsum.photos/300/300'}} />
        </PhotoCarousel>
      </ConfirmationItem>
      <ConfirmationItem>
        <Text color="gray" type="small">
          Titulo
        </Text>
        <Text>Cafe mocha</Text>
      </ConfirmationItem>
      <ConfirmationItem>
        <Text color="gray" type="small">
          Precio
        </Text>
        <Text>$15.000</Text>
      </ConfirmationItem>
      <ConfirmationItem>
        <Text color="gray" type="small">
          Descripcion
        </Text>
        <Text>Lorem ipsum</Text>
      </ConfirmationItem>
      <ConfirmationItem>
        <Text color="gray" type="small">
          Garantia
        </Text>
        <Text>Sin garantia</Text>
      </ConfirmationItem>
      <ConfirmationItem>
        <Text color="gray" type="small">
          Condicion
        </Text>
        <Text>Nuevo</Text>
      </ConfirmationItem>
      <PublishContainer>
        <Button value="Publicar" onPress={() => nextStep()} />
      </PublishContainer>
    </ContainerFullWidth>
  );
};

export default CreateProductConfirmation;
