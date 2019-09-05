import { Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import AComponent from 'TestApp/src/components/navigations/drawers/AComponent';
import BComponent from 'TestApp/src/components/navigations/drawers/BComponent';
import CComponent from 'TestApp/src/components/navigations/drawers/CComponent';
import DComponent from 'TestApp/src/components/navigations/drawers/DComponent';

import { A, B, C, D } from 'TestApp/src/data/screens/DrawerScreenName';

const screenWidth = Dimensions.get('window').width;

let routeConfigs = {
	A: {
		screen: AComponent
	},
	B: {
		screen: BComponent
	},
	C: {
		screen: CComponent
	},
	D: {
		screen: DComponent
	}
};

let drawerNavigatorConfig = {
	initialRouteName: A,
	drawerWidth: screenWidth / 2,
	useNativeAnimations: true,
	swipeable: true,
	drawerPosition: 'left',
	contentOptions: {
		activeTintColor: 'crimson'
	}
};

const DrawerControllerComponent = createDrawerNavigator(routeConfigs, drawerNavigatorConfig);

export default createAppContainer(DrawerControllerComponent);
