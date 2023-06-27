import React, { StrictMode } from 'react';
import { waitFor, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import store from '../../store';

import Tournaments from '.';
import { API_TOURNAMENTS_URL } from '../../constants/api';

const mockAxios = new MockAdapter(axios);

mockAxios.onPost().reply((config) => {
  return [
    200,
    {
      id: '1',
      name: 'test',
      organizer: 'test',
      game: 'test',
      participants: {
        current: 1,
        max: 10,
      },
      startDate: '0',
    },
  ];
});

test('Check that Tournament page renders, and create button is available', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Tournaments />
    </Provider>
  );
  const button = getByText('Create tournament');
  expect(button).toHaveTextContent('Create tournament');
});

test('Check that Tournament page renders, and one tournament has been created automaticaly', async () => {
  const { getByText } = await waitFor(() =>
    render(
      <Provider store={store}>
        <Tournaments />
      </Provider>
    )
  );

  const tournament = await waitFor(() => getByText('Organizer: test'));

  expect(tournament).toHaveTextContent('Organizer: test');
});

test.only('New tournament could not be created with empty name, default name will be used instead', async () => {
  global.prompt = () => ' '; // Simulate an empty prompt input
  const { getByText } = await waitFor(() =>
    render(
      <Provider store={store}>
        <Tournaments />
      </Provider>
    )
  );

  const button = await waitFor(() => getByText('Create tournament'));

  mockAxios.onPost().reply(() => {
    return [
      200,
      {
        id: '2',
        name: 'Default',
        organizer: 'Default',
        game: 'Default',
        participants: {
          current: 1,
          max: 10,
        },
        startDate: '0',
      },
    ];
  });
  button.click();
  expect(mockAxios.history.post[1].data).toBe(
    JSON.stringify({ name: 'Default' })
  );
});

test('Fetch list of tournaments and render them', () => {
  //TODO
});
