import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	Alert,
	TouchableHighlight,
	ImageBackground,
	Button,
	StyleSheet
} from 'react-native';

const buttonImage1 = 'TestApp/src/assets/icons/square-button.png';

export default class HeaderComponent extends Component {
	_onPressButton = () => {
		this.props.navigation.openDrawer();
	};
	render() {
		return (
			<View style={styles.container}>
				<Button title='Menu' onPress={this._onPressButton} />
				<TouchableHighlight
					activeOpacity={0.65}
					underlayColor='transparent'
					onPress={this._onPressButton}>
					<View style={styles.buttonView}>
						<ImageBackground style={styles.buttonImage} source={require(buttonImage1)}>
							<Text style={styles.buttonText}>Menu</Text>
						</ImageBackground>
					</View>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: '10%',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	buttonView: {
		opacity: 1
	},
	buttonText: {
		fontSize: 16,
		color: 'black',
		textAlign: 'center',
		marginTop: 15
	},
	buttonImage: {
		width: 60,
		height: 60
	}
});
