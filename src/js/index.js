import React from 'react';
import ReactDOM from 'react-dom';

import '../scss/index.scss';

import App from './App';

import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo';
const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj73ejs6m0u8t0179hgj1ln6t'
});

const client = new ApolloClient({
  networkInterface
});

const element = document.getElementById('content');
ReactDOM.render(<ApolloProvider client={client}>
  <App />
</ApolloProvider>, element);

document.body.classList.remove('loading');
