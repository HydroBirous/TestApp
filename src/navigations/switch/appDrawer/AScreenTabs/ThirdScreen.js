import React, { Component } from 'react';
import { View, Text } from 'react-native';

import IconComponent from './../../../../components/icons/IconComponent';
import ButtonComponent from './../../../../components/buttons/ButtonComponent';

import { First, Second, Third, Fourth } from './../../../../data/screens/TabScreenName';

const iconSrc = './../../../../assets/icons/setting-icon.png';

export default class ThirdScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		let tabBarLabel = Third;
		let tabBarIcon = () => <IconComponent src={require(iconSrc)} />;
		return { tabBarLabel, tabBarIcon };
	};

	navigateToFourth = () => {
		this.props.navigation.navigate(Fourth);
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
						backgroundColor: 'gold',
						alignItems: 'center',
						justifyContent: 'center'
					}}>
					<Text
						style={{
							fontWeight: 'bold',
							fontSize: 22,
							color: 'black'
						}}>
						This is Third Screen
					</Text>

					<ButtonComponent
						btnMarginTop={10}
						btnPress={this.navigateToFourth}
						btnColor='tomato'
						borRadius={10}
						textSize={16}
						textColor='white'
						textValue='Navigate to Fourth Screen'
					/>
				</View>
			</View>
		);
	}
}
