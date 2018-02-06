import React from 'react';
import {AppRegistry} from 'react-native-web';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
});
registerServiceWorker();
