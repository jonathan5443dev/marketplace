import {takeLatest, select, call} from 'redux-saga/effects';
import App from '../../config/app';

function* startHomeFlow() {
  try {
    // call home product list service
    const categories = yield call(
      () =>
        new Promise((resolve, reject) =>
          resolve([
            {
              name: 'Restaurantes',
              count: 10,
              image: 'https://picsum.photos/700/300',
              isNew: true,
            },
            {
              name: 'Medicina',
              count: 20,
              image: 'https://picsum.photos/700/300',
              isNew: true,
            },
            {
              name: 'Transporte',
              count: 13,
              image: 'https://picsum.photos/700/300',
              isNew: false,
            },
            {
              name: 'Hogar',
              count: 133,
              image: 'https://picsum.photos/700/300',
              isNew: true,
            },
          ]),
        ),
    );
    App.navigation.reset('TabBar', {categories});
  } catch (e) {
    App.firebase.crashlytics.recordError(new Error('Home error'));
    App.navigation.navigate('Login');
  }
}

function* homeFlows() {
  yield takeLatest('START_HOME_FLOW', startHomeFlow);
}

export default homeFlows;
