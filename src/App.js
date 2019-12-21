import React from 'react';
import { ApolloClient } from 'apollo-client';
import { WebSocketLink } from 'apollo-link-ws';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Home from './Screens/Home/Home';

const cache = new InMemoryCache();

const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  options: {
    reconnect: true,
  },
});

const client = new ApolloClient({
  link: wsLink,
  cache,
});

const App = () => (
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>
);

export default App;
