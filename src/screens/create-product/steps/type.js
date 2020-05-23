import React from 'react';
import SelectList from '../../../components/select-list/select-list';

import {ContainerFullWidth} from './styles';

const CreateProductType = ({nextStep}) => {
  const onSelect = () => {
    //TODO: dispatch some action
    nextStep();
  };

  return (
    <ContainerFullWidth>
      <SelectList
        items={[
          {id: '1', name: 'Tecnologia'},
          {id: '2', name: 'Hogar'},
          {id: '3', name: 'Mascotas'},
          {id: '4', name: 'Bebes'},
          {id: '5', name: 'Moda'},
        ]}
        onSelect={onSelect}
      />
    </ContainerFullWidth>
  );
};

export default CreateProductType;
