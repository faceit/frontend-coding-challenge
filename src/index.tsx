import Container from './components/Container';
import GlobalStyle from './GlobalStyle';
import H4 from './components/H4';
import { Provider } from 'react-redux';
import React from 'react';
import TournamentPage from './pages/tournaments';
import { createRoot } from 'react-dom/client';
import store from './store';

const App = () => {
  return (
    <Container>
      <H4>FACEIT Tournaments</H4>
      <TournamentPage />
    </Container>
  );
};

const container = document.getElementById('root');
if (!container) {
  throw new Error('No container found');
}
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);
