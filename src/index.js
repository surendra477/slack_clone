import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import {Helmet} from "react-helmet";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Surendra Ediga Slack</title>
                <meta name="description" content="Surendra Ediga slack clone"/>
                <meta name="keywords" content="surendra, surendra ediga, Surendra, surendra sies, surendra slac, SURENDRA"></meta>
            </Helmet>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

