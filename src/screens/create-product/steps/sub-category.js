import React from 'react';
import SelectList from '../../../components/select-list/select-list';
import {ContainerFullWidth} from './styles';

const CreateProductSubCategory = ({nextStep}) => {
  const onSelect = () => {
    //TODO: dispatch some action
    nextStep();
  };

  return (
    <ContainerFullWidth>
      <SelectList
        items={[
          {id: '1', name: 'Accesorios'},
          {id: '2', name: 'Agro'},
          {id: '3', name: 'Arte'},
          {id: '4', name: 'Computacion'},
          {id: '5', name: 'Celulares'},
          {id: '6', name: 'Antiguedades'},
        ]}
        onSelect={onSelect}
      />
    </ContainerFullWidth>
  );
};

export default CreateProductSubCategory;
