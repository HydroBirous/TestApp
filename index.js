/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

//import TestComponent from 'TestApp/src/components/odds/TestComponent';

//import TextInputComponent from 'TestApp/src/components/textinputs/TextInputComponent';
//import ScrollViewComponent from 'TestApp/src/components/scrollviews/ScrollViewComponent';

//import DrawerControllerComponent from 'TestApp/src/components/navigations/drawers/DrawerControllerComponent';
//import StackControllerComponent from 'TestApp/src/components/navigations/stacks/StackControllerComponent';
import TabControllerComponent from 'TestApp/src/components/navigations/tabs/TabControllerComponent';

//import LoginComponent from 'TestApp/src/components/firebase/authentications/LoginComponent';

AppRegistry.registerComponent(appName, () => TabControllerComponent);
