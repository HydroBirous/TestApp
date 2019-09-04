import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import ButtonComponent from 'TestApp/src/components/buttons/ButtonComponent';
import { Home, Info, Settings, Cloud } from 'TestApp/src/data/screens/TabScreenName';

export default class InfoComponent extends Component {
	static navigationOptions = ({ navigation }) => {
		let tabBarLabel = 'Home';
		let tabBarIcon = () => (
			<Image
				source={require('TestApp/src/assets/icons/plus-icon.png')}
				style={{
					width: 25,
					height: 25
				}}
			/>
		);
		return { tabBarLabel, tabBarIcon };
	};

	navigateToSettings = () => {
		this.props.navigation.navigate(Settings);
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
						This is Info Screen
					</Text>

					<ButtonComponent
						btnMarginTop={10}
						btnPress={this.navigateToSettings}
						btnColor='gold'
						borRadius={10}
						textSize={16}
						textColor='black'
						textValue='Navigate to Settings Screen'
					/>
				</View>
			</View>
		);
	}
}
