/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar } from 'react-native';
import RootNavigation from './routes/Root';
import { Provider } from 'react-redux';
import store from './redux/store';
import UserContext from './contexts/UserContext';
import TeamContextProvider from './contexts/TeamContext';
import DetailContextProvider from './contexts/DetailContext';
import SearchedContextProvider from './contexts/SearchedContext';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Provider store={store}>
        <UserContext>
          <TeamContextProvider>
            <DetailContextProvider>
              <SearchedContextProvider>
                <RootNavigation />
              </SearchedContextProvider>
            </DetailContextProvider>
          </TeamContextProvider>
        </UserContext>
      </Provider>
    </>
  );
};

export default App;
