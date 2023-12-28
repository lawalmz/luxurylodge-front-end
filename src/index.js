// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './components/home/store';
import App from './components/home/App';
import Hotels from './components/Hotels/hotelsPage';
import Fm from './components/Hotels/fm';
import HT from './components/HTS/ht'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/hotels',
    element: <Hotels />,
  },
  {
    path: '/t',
    element: <Fm/>,
  },
  {
    path: '/ht',
    element: <HT/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
