
import {ApolloProvider } from '@apollo/client';

import client from "../apollo-client";
import { AuthProvider } from '../context/auth'

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>

      <Component {...pageProps} />
      </AuthProvider>
    </ApolloProvider>
  );
}

export default MyApp;
