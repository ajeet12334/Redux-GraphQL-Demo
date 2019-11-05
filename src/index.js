import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux'

import store from './store/store'
import LinkList from './screens/LinkList'
import ListCounter from './screens/listCounter'


const Index = () => {

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Provider store={store}>
            <ListCounter />
            <LinkList />
          </Provider>
        </SafeAreaView>
      </>
    );
  };
  
  export default Index;