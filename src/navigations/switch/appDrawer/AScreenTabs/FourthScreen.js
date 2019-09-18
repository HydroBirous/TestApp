import React, { Component } from 'react';
import { View, Text } from 'react-native';

import IconComponent from './../../../../components/icons/IconComponent';
import ButtonComponent from './../../../../components/buttons/ButtonComponent';

import { First, Second, Third, Fourth } from './../../../../data/screens/TabScreenName';

const iconSrc = './../../../../assets/icons/plus-icon.png';

export default class FourthScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		let tabBarLabel = Fourth;
		let tabBarIcon = () => <IconComponent src={require(iconSrc)} />;
		return { tabBarLabel, tabBarIcon };
	};

	navigateToFirst = () => {
		this.props.navigation.navigate(First);
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
						backgroundColor: 'tomato',
						alignItems: 'center',
						justifyContent: 'center'
					}}>
					<Text
						style={{
							fontWeight: 'bold',
							fontSize: 22,
							color: 'white'
						}}>
						This is Fourth Screen
					</Text>

					<ButtonComponent
						btnMarginTop={10}
						btnPress={this.navigateToFirst}
						btnColor='white'
						borRadius={10}
						textSize={16}
						textColor='black'
						textValue='Navigate to First Screen'
					/>
				</View>
			</View>
		);
	}
}
