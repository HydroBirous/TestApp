import React, { Fragment, Component } from 'react';
import {
	SafeAreaView,
	View,
	Text,
	Image,
	Alert,
	ImageBackground,
	TouchableHighlight,
	StyleSheet
} from 'react-native';

import HeaderComponent from 'TestApp/src/components/navigations/drawers/HeaderComponent';
import { A, B, C, D } from 'TestApp/src/data/screens/DrawerScreenName';

const icon1 = 'TestApp/src/assets/icons/lol-icon.png';
const buttonImage1 = 'TestApp/src/assets/icons/blue-square-button.png';

export default class AComponent extends Component {
	static navigationOptions = ({ navigation }) => {
		let drawerLabel = 'C';
		let drawerIcon = () => (
			<Image
				source={require(icon1)}
				style={{
					width: 25,
					height: 25
				}}
			/>
		);
		return { drawerLabel, drawerIcon };
	};

	_onPressButton = () => {
		this.props.navigation.navigate(D);
	};

	render() {
		return (
			<Fragment>
				<HeaderComponent {...this.props} />
				<SafeAreaView style={styles.safeAreaView}>
					<Text style={styles.text}>This is C Screen</Text>
					<TouchableHighlight
						activeOpacity={0.65}
						underlayColor='transparent'
						onPress={this._onPressButton}>
						<View style={styles.buttonView}>
							<ImageBackground
								style={styles.buttonImage}
								source={require(buttonImage1)}
							/>
							<Text style={styles.buttonText}>Navigate to D</Text>
						</View>
					</TouchableHighlight>
				</SafeAreaView>
			</Fragment>
		);
	}
}

const styles = StyleSheet.create({
	safeAreaView: {
		flex: 1,
		backgroundColor: 'royalblue',
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		fontWeight: 'bold',
		fontSize: 22,
		color: 'white'
	},
	buttonView: {
		width: 180,
		height: 60,
		backgroundColor: 'tomato',
		borderRadius: 1,
		borderColor: 'white'
	},
	buttonImage: {
		width: 0,
		height: 0
	},
	buttonText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: 'black',
		textAlign: 'center',
		marginTop: 15
	}
});
