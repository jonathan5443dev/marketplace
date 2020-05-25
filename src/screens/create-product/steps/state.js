import React from 'react';
import SelectList from '../../../components/select-list/select-list';
import {ContainerFullWidth} from './styles';

const CreateProductState = ({nextStep}) => {
  const onSelect = () => {
    //TODO: dispatch some action
    nextStep();
  };

  return (
    <ContainerFullWidth>
      <SelectList
        items={[
          {id: '1', name: 'Nuevo'},
          {id: '2', name: 'Usado'},
          {id: '3', name: 'Reacondicionado'},
        ]}
        onSelect={onSelect}
      />
    </ContainerFullWidth>
  );
};

export default CreateProductState;
