import React, { Component } from 'react';
import { View, Text, Alert, BackHandler } from 'react-native';

import ButtonComponent from './../../../../components/buttons/ButtonComponent';
import { MainScreen, ThirdScreen } from './../../../../data/screens/StackScreenName';

export default class DetailComponent extends Component {
	navigateToThird = () => {
		this.props.navigation.navigate(ThirdScreen);
	};

	navigateToMain = () => {
		this.props.navigation.navigate(MainScreen);
	};

	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.backPressed);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
	}

	backPressed = () => {
		Alert.alert(
			'HỦY BÀI LÀM',
			'Bạn muốn hủy bài làm ?',
			[
				{ text: 'Không', style: 'cancel' },
				{ text: 'Có', onPress: () => this.props.navigation.navigate(MainScreen) }
			],
			{ cancelable: false }
		);
		return true;
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
