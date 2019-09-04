import { createStackNavigator, createAppContainer } from 'react-navigation';

import MainComponent from 'TestApp/src/components/navigations/stacks/MainComponent';
import DetailComponent from 'TestApp/src/components/navigations/stacks/DetailComponent';
import ThirdComponent from 'TestApp/src/components/navigations/stacks/ThirdComponent';

import { MainScreen, DetailScreen, ThirdScreen } from 'TestApp/src/data/screens/StackScreenName';

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

export default createAppContainer(StackControllerComponent);
