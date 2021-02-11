import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppCtxProvider } from './context'

ReactDOM.render(
  <React.StrictMode>
    <AppCtxProvider>
      <App />
    </AppCtxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
