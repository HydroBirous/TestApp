import React, { Component } from 'react';
import { View, Text } from 'react-native';

import ButtonComponent from 'TestApp/src/components/buttons/ButtonComponent';
import { DetailScreen, ThirdScreen } from 'TestApp/src/data/screens/StackScreenName';

export default class MainComponent extends Component {
	navigateToDetail = () => {
		this.props.navigation.navigate(DetailScreen);
	};

	navigateToThird = () => {
		this.props.navigation.navigate(ThirdScreen);
	};

	render() {
		return (
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center'
				}}>
				<Text
					style={{
						fontSize: 22,
						fontWeight: 'bold',
						color: 'black'
					}}>
					This is the Main Screen
				</Text>

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
			</View>
		);
	}
}
