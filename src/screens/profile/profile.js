import React from 'react';
import {useDispatch} from 'react-redux';
import Text from '../../components/text/text';
import {useTranslation} from 'react-i18next';
import AvatarImage from '../../assets/images/product-1.png';
import Button from '../../components/button/button';
import {
  List,
  Option,
  Header,
  Avatar,
  Information,
  SafeArea,
  Container,
  OptionsContainer,
  CloseSession,
  SellContainer,
} from './styles';
import profileActions from '../../redux/reducers/profile-settings';
import ordersActions from '../../redux/reducers/orders';
import addressesActions from '../../redux/reducers/addresses';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPowerOff} from '@fortawesome/free-solid-svg-icons';
import theme from '../../config/themes/default';

const user = {
  name: 'Vanessa Hayed',
  lastName: 'Torres',
  email: 'vanessa.torres@marketplace.com',
};

const Profile = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const options = [
    {
      id: '1',
      title: t('profile.shippingAddresses'),
      subTitle: `3 ${t('profile.addresses')}`,
      action: () => dispatch(addressesActions.startAddressesFlow()),
    },
    {
      id: '2',
      title: t('profile.myOrders'),
      subTitle: `3 ${t('profile.orders')}`,
      action: () => dispatch(ordersActions.startOrdersFlow()),
    },
    {
      id: '3',
      title: t('profile.settings'),
      subTitle: t('profile.notificationsPassword'),
      action: () => dispatch(profileActions.startProfileSettingsFlow()),
    },
  ];
  const renderOption = option => (
    <Option onPress={option.action}>
      <Text type="body">{option.title}</Text>
    </Option>
  );
  return (
    <SafeArea>
      <Container>
        <Header>
          <Information>
            <Text type="headline 2">Hola</Text>
            <Text type="headline 3">{`${user.name} ${user.lastName}`}</Text>
            <Text> {`${user.email}`}</Text>
          </Information>
          <Avatar source={AvatarImage} />
        </Header>
        <SellContainer>
          <Button value="Vender gratis" />
        </SellContainer>
        <OptionsContainer>
          <Text type="headline 3">Ventas</Text>
          <List
            data={options}
            renderItem={({item}) => renderOption(item)}
            keyExtractor={item => item.id}
          />
        </OptionsContainer>
        <OptionsContainer>
          <Text type="headline 3">General</Text>
          <List
            data={options}
            renderItem={({item}) => renderOption(item)}
            keyExtractor={item => item.id}
          />
        </OptionsContainer>
        <OptionsContainer>
          <Text type="headline 3">Information</Text>
          <List
            data={options}
            renderItem={({item}) => renderOption(item)}
            keyExtractor={item => item.id}
          />
        </OptionsContainer>
        <CloseSession>
          <FontAwesomeIcon style={{color: theme.redLigth}} icon={faPowerOff} />
          <Text type="highlight" color="redLigth">
            Close session
          </Text>
        </CloseSession>
      </Container>
    </SafeArea>
  );
};

export default Profile;
