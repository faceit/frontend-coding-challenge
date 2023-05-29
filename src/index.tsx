import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyle from './GlobalStyle';
import store from './store';
import Container from './components/Container';
import H4 from './components/H4';
import Tournaments from './pages/Tournaments';

const App = () => {
  return (
    <Container>
      <H4>FACEIT Tournaments</H4>
    </Container>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Tournaments />,
  },
]);

const container = document.getElementById('root');
if (!container) {
  throw new Error('No container found');
}

const root = createRoot(container);
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
    <RouterProvider router={router} />
  </Provider>
);
