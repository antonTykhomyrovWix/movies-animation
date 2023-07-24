import React from 'react';
import {Provider} from 'react-redux';
import {NativeBaseProvider} from 'native-base';
import {RootSiblingParent} from 'react-native-root-siblings';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {store} from './store';
import {RootStackScreen} from './navigation';

const App = () => (
  <NativeBaseProvider>
    <SafeAreaProvider>
      <RootSiblingParent>
        <NavigationContainer>
          <Provider store={store}>
            <RootStackScreen />
          </Provider>
        </NavigationContainer>
      </RootSiblingParent>
    </SafeAreaProvider>
  </NativeBaseProvider>
);

export default App;
