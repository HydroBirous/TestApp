import { createStackNavigator } from 'react-navigation-stack';

import ChooseSubjectScreen from './ChooseSubjectScreen';
import DoTestScreen from './DoTestScreen';

const DoTestStackController = createStackNavigator(
	{
		ChooseSubject: {
			screen: ChooseSubjectScreen
		},
		DoTest: {
			screen: DoTestScreen
		}
	},
	{
		headerMode: 'none',
		initialRouteName: 'ChooseSubject'
	}
);

DoTestStackController.navigationOptions = ({ navigation }) => {
	let tabBarVisible = true;
	if (navigation.state.index > 0) {
		tabBarVisible = false;
	}
	return {
		tabBarVisible
	};
};

export default DoTestStackController;
