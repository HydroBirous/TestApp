import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import ButtonComponent from 'TestApp/src/components/buttons/ButtonComponent';
import { Home, Info, Settings, Cloud } from 'TestApp/src/data/screens/TabScreenName';

export default class CloudComponent extends Component {
	static navigationOptions = ({ navigation }) => {
		let tabBarLabel = 'Home';
		let tabBarIcon = () => (
			<Image
				source={require('TestApp/src/assets/icons/iron-man-icon.png')}
				style={{
					width: 25,
					height: 25
				}}
			/>
		);
		return { tabBarLabel, tabBarIcon };
	};

	navigateToHome = () => {
		this.props.navigation.navigate(Home);
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
						This is Cloud Screen
					</Text>

					<ButtonComponent
						btnMarginTop={10}
						btnPress={this.navigateToHome}
						btnColor='white'
						borRadius={10}
						textSize={16}
						textColor='black'
						textValue='Navigate to Home Screen'
					/>
				</View>
			</View>
		);
	}
}
