/* eslint-disable react-native/no-inline-styles */
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

  const saleOptions = [
    {
      id: '1',
      title: t('profile.publications'),
      subTitle: `3 ${t('profile.addresses')}`,
      action: () => dispatch(addressesActions.startAddressesFlow()),
    },
    {
      id: '2',
      title: t('profile.support'),
      subTitle: `3 ${t('profile.orders')}`,
      action: () => dispatch(ordersActions.startOrdersFlow()),
    },
    {
      id: '3',
      title: t('profile.sales'),
      subTitle: t('profile.notificationsPassword'),
      action: () => dispatch(profileActions.startProfileSettingsFlow()),
    },
  ];

  const generalOptions = [
    {
      id: '1',
      title: t('profile.myAccount'),
      subTitle: `3 ${t('profile.myAccount')}`,
      action: () => dispatch(addressesActions.startAddressesFlow()),
    },
    {
      id: '2',
      title: t('profile.addresses'),
      subTitle: `3 ${t('profile.addresses')}`,
      action: () => dispatch(ordersActions.startOrdersFlow()),
    },
  ];

  const informationOptions = [
    {
      id: '1',
      title: t('profile.myAccount'),
      subTitle: `3 ${t('profile.myAccount')}`,
      action: () => dispatch(addressesActions.startAddressesFlow()),
    },
    {
      id: '2',
      title: t('profile.addresses'),
      subTitle: `3 ${t('profile.addresses')}`,
      action: () => dispatch(ordersActions.startOrdersFlow()),
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
            <Text type="headline 2">{t('hi')}</Text>
            <Text type="headline 3">{`${user.name} ${user.lastName}`}</Text>
            <Text> {`${user.email}`}</Text>
          </Information>
          <Avatar source={AvatarImage} />
        </Header>
        <SellContainer>
          <Button value={t('freeSale')} />
        </SellContainer>
        <OptionsContainer>
          <Text type="headline 3">{t('sales')}</Text>
          <List
            data={saleOptions}
            renderItem={({item}) => renderOption(item)}
            keyExtractor={item => item.id}
          />
        </OptionsContainer>
        <OptionsContainer>
          <Text type="headline 3">{t('general')}</Text>
          <List
            data={generalOptions}
            renderItem={({item}) => renderOption(item)}
            keyExtractor={item => item.id}
          />
        </OptionsContainer>
        <OptionsContainer>
          <Text type="headline 3">{t('information')}</Text>
          <List
            data={informationOptions}
            renderItem={({item}) => renderOption(item)}
            keyExtractor={item => item.id}
          />
        </OptionsContainer>
        <CloseSession>
          <FontAwesomeIcon
            style={{color: theme.redLigth, marginRight: 10}}
            icon={faPowerOff}
          />
          <Text type="highlight" color="redLigth">
            {t('closeSession')}
          </Text>
        </CloseSession>
      </Container>
    </SafeArea>
  );
};

export default Profile;
