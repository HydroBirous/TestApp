import React, { Component } from 'react';
import { View, Text } from 'react-native';

import ButtonComponent from './../../../../components/buttons/ButtonComponent';
import { MainScreen, DetailScreen } from './../../../../data/screens/StackScreenName';

export default class ThirdComponent extends Component {
	navigateToMain = () => {
		this.props.navigation.navigate(MainScreen);
	};

	navigateToDetail = () => {
		this.props.navigation.navigate(DetailScreen);
	};

	render() {
		return (
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: 'orange'
				}}>
				<Text
					style={{
						fontSize: 22,
						fontWeight: 'bold',
						color: 'black'
					}}>
					This is the Third Screen
				</Text>

				<ButtonComponent
					btnPress={this.navigateToMain}
					btnMarginTop={10}
					btnWidth={200}
					btnHeight={45}
					borWidth={1}
					borColor='black'
					borRadius={10}
					btnColor='white'
					textSize={18}
					textColor='black'
					textValue='Navigate to Main'
				/>

				<ButtonComponent
					btnPress={this.navigateToDetail}
					btnMarginTop={10}
					btnWidth={200}
					btnHeight={45}
					borRadius={10}
					borWidth={1}
					borColor='black'
					btnColor='mediumspringgreen'
					textSize={18}
					textColor='black'
					textValue='Navigate to Detail'
				/>
			</View>
		);
	}
}
