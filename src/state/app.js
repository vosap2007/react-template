import { State } from '../utils/state';

import { initNear } from './near';

const initialState = {
  app: {
    mounted: false,
    tab: 1,
    sort: 2,
    filter: 1,
  },
  near: {
    initialized: false,
  },
  views: {
    marketStoragePaid: '0',
    tokens: [],
    sales: [],
    allTokens: [],
  },
};
let snackTimeout;

export const { appStore, AppProvider } = State(initialState, 'app');

export const onAppMount =
  () =>
  async ({ update, dispatch }) => {
    update('app', { mounted: true });
    dispatch(initNear());
  };

export const snackAttack =
  (msg) =>
  async ({ update }) => {
    console.log('Snacking on:', msg);
    update('app.snack', msg);
    if (snackTimeout) clearTimeout(snackTimeout);
    snackTimeout = setTimeout(() => update('app.snack', null), 3000);
  };
