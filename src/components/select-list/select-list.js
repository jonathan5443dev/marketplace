import React from 'react';
import {List, ListItem} from './styles';
import Text from '../text/text';

const SelectList = ({items, onSelect}) => {
  return (
    <List>
      {items.map(item => (
        <ListItem onPress={() => onSelect(item.id)}>
          <Text color="gray">{item.name}</Text>
        </ListItem>
      ))}
    </List>
  );
};

export default SelectList;
