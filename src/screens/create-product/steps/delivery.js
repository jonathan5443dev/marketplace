import React from 'react';
import SelectList from '../../../components/select-list/select-list';
import {ContainerFullWidth} from './styles';

const CreateProductDelivery = ({nextStep}) => {
  const onSelect = () => {
    //TODO: dispatch some action
    nextStep();
  };

  return (
    <ContainerFullWidth>
      <SelectList
        items={[
          {id: '1', name: 'Envío a cargo del comprador'},
          {id: '2', name: 'Envío gratis'},
          {id: '3', name: 'Acuerdo según destino'},
        ]}
        onSelect={onSelect}
      />
    </ContainerFullWidth>
  );
};

export default CreateProductDelivery;
