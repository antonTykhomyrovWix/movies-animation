import React from 'react';
import {Provider} from 'react-redux';
import {NativeBaseProvider} from 'native-base';
import {RootSiblingParent} from 'react-native-root-siblings';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Colors} from 'react-native-ui-lib';

import {store} from './store';
import {RootStackScreen} from './navigation';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.$backgroundGeneralLight,
  },
};

const App = () => (
  <NativeBaseProvider>
    <SafeAreaProvider>
      <RootSiblingParent>
        <NavigationContainer theme={theme}>
          <Provider store={store}>
            <RootStackScreen />
          </Provider>
        </NavigationContainer>
      </RootSiblingParent>
    </SafeAreaProvider>
  </NativeBaseProvider>
);

export default App;
