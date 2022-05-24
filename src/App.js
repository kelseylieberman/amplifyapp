import React from 'react';
import logo from './logo.svg';
import { Amplify } from 'aws-amplify';

import { Authenticator, Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
      <main className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to Desk Lite with authentication, {user.username}!</h1>
          <Button variation='primary' size="large" onClick={signOut} className="colorful-button">Sign out</Button>
        </header>
      </main>
    )}
    </Authenticator>
  );
}

export default App;