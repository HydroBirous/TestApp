import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import ButtonComponent from 'TestApp/src/components/buttons/ButtonComponent';
import { Home, Info, Settings, Cloud } from 'TestApp/src/data/screens/TabScreenName';

export default class HomeComponent extends Component {
	static navigationOptions = ({ navigation }) => {
		let tabBarLabel = 'Home';
		let tabBarIcon = () => (
			<Image
				source={require('TestApp/src/assets/icons/ac-icon.png')}
				style={{
					width: 25,
					height: 25
				}}
			/>
		);
		return { tabBarLabel, tabBarIcon };
	};

	navigateToInfo = () => {
		this.props.navigation.navigate(Info);
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
						backgroundColor: 'white',
						alignItems: 'center',
						justifyContent: 'center'
					}}>
					<Text
						style={{
							fontWeight: 'bold',
							fontSize: 22,
							color: 'black'
						}}>
						This is Home Screen
					</Text>

					<ButtonComponent
						btnMarginTop={10}
						btnPress={this.navigateToInfo}
						btnColor='royalblue'
						borRadius={10}
						textSize={16}
						textColor='white'
						textValue='Navigate to Info Screen'
					/>
				</View>
			</View>
		);
	}
}
