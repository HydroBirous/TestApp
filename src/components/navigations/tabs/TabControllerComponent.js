import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

import HomeComponent from 'TestApp/src/components/navigations/tabs/HomeComponent';
import InfoComponent from 'TestApp/src/components/navigations/tabs/InfoComponent';
import SettingsComponent from 'TestApp/src/components/navigations/tabs/SettingsComponent';
import CloudComponent from 'TestApp/src/components/navigations/tabs/CloudComponent';

import { Home, Info, Settings, Cloud } from 'TestApp/src/data/screens/TabScreenName';

let routeConfig = {
	Home: {
		screen: HomeComponent
	},
	Info: {
		screen: InfoComponent
	},
	Settings: {
		screen: SettingsComponent
	},
	Cloud: {
		screen: CloudComponent
	}
};
let tabNavigatorConfig = {
	tabBarPosition: 'top',
	tabBarOptions: {
		activeTintColor: 'yellow',
		pressColor: 'white',
		indicatorStyle: {
			height: '5%'
		},
		showLabel: false,
		showIcon: true
	},
	animationEnabled: true,
	swipeEnabled: true,
	bounces: true
};

const TabControllerComponent = createMaterialTopTabNavigator(routeConfig, tabNavigatorConfig);

export default createAppContainer(TabControllerComponent);
