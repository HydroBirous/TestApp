/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

//import TestComponent from 'TestApp/src/components/odds/TestComponent';

//import TextInputComponent from 'TestApp/src/components/textinputs/TextInputComponent';
//import ScrollViewComponent from 'TestApp/src/components/scrollviews/ScrollViewComponent';

//import AppController from './src/navigations/switch/AppController';
import DrawerControllerComponent from './src/navigations/switch/appDrawer/DrawerControllerComponent';

//import LoginComponent from 'TestApp/src/components/firebase/authentications/LoginComponent';

//import FlatListComponent from './src/components/lists/flatLists/FlatListComponent';

AppRegistry.registerComponent(appName, () => DrawerControllerComponent);
