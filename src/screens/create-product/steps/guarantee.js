import React from 'react';
import SelectList from '../../../components/select-list/select-list';
import {ContainerFullWidth} from './styles';

const CreateProductGuarantee = ({nextStep}) => {
  const onSelect = () => {
    //TODO: dispatch some action
    nextStep();
  };

  return (
    <ContainerFullWidth>
      <SelectList
        items={[
          {id: '1', name: 'Garantía del vendedor'},
          {id: '2', name: 'Garantía de fábrica'},
          {id: '3', name: 'Sin garantía'},
        ]}
        onSelect={onSelect}
      />
    </ContainerFullWidth>
  );
};

export default CreateProductGuarantee;
