import React, { Component } from 'react';
import { View, Text } from 'react-native';

import IconComponent from './../../../../components/icons/IconComponent';
import ButtonComponent from './../../../../components/buttons/ButtonComponent';

import { First, Second, Third, Fourth } from './../../../../data/screens/TabScreenName';

const iconSrc = './../../../../assets/icons/info.png';

export default class SecondScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		let tabBarLabel = Second;
		let tabBarIcon = () => <IconComponent src={require(iconSrc)} />;
		return { tabBarLabel, tabBarIcon };
	};

	navigateToThird = () => {
		this.props.navigation.navigate(Third);
	};

	render() {
		return (
			<View
				style={{
					flex: 1,
					flexDirection: 'column'
				}}>
				<View
					style={{
						flex: 1,
						backgroundColor: 'royalblue',
						alignItems: 'center',
						justifyContent: 'center'
					}}>
					<Text
						style={{
							fontWeight: 'bold',
							fontSize: 22,
							color: 'white'
						}}>
						This is Second Screen
					</Text>

					<ButtonComponent
						btnMarginTop={10}
						btnPress={this.navigateToThird}
						btnColor='gold'
						borRadius={10}
						textSize={16}
						textColor='black'
						textValue='Navigate to Third Screen'
					/>
				</View>
			</View>
		);
	}
}
