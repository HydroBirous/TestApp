import { createStackNavigator } from 'react-navigation-stack';

import MainComponent from './MainComponent';
import DetailComponent from './DetailComponent';
import ThirdComponent from './ThirdComponent';

import { MainScreen, DetailScreen, ThirdScreen } from './../../../../data/screens/StackScreenName';

const StackControllerComponent = createStackNavigator(
	{
		MainScreen: {
			screen: MainComponent
		},
		DetailScreen: {
			screen: DetailComponent
		},
		ThirdScreen: {
			screen: ThirdComponent
		}
	},
	{ headerMode: 'none' }
);

export default StackControllerComponent;
