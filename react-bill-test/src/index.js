import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './theme.css'
import router from './router';
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
   </Provider>
    
);

