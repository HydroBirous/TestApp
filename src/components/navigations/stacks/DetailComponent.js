import React, { Component } from 'react';
import { View, Text } from 'react-native';

import ButtonComponent from 'TestApp/src/components/buttons/ButtonComponent';
import { MainScreen, ThirdScreen } from 'TestApp/src/data/screens/StackScreenName';

export default class DetailScreen extends Component {
	navigateToThird = () => {
		this.props.navigation.navigate(ThirdScreen);
	};

	navigateToMain = () => {
		this.props.navigation.navigate(MainScreen);
	};

	render() {
		return (
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: 'mediumspringgreen'
				}}>
				<Text
					style={{
						fontSize: 22,
						fontWeight: 'bold',
						color: 'black'
					}}>
					This is the Detail Screen
				</Text>

				<ButtonComponent
					btnPress={this.navigateToThird}
					btnMarginTop={10}
					btnWidth={200}
					btnHeight={45}
					borRadius={10}
					btnColor='orange'
					textSize={18}
					textColor='black'
					textValue='Navigate to Third'
				/>

				<ButtonComponent
					btnPress={this.navigateToMain}
					btnMarginTop={10}
					btnWidth={200}
					btnHeight={45}
					borRadius={10}
					borWidith={1}
					borColor='black'
					btnColor='white'
					textSize={18}
					textColor='black'
					textValue='Navigate to Main'
				/>
			</View>
		);
	}
}
