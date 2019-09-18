import React, { Fragment, Component } from 'react';
import {
	SafeAreaView,
	View,
	Text,
	Alert,
	ImageBackground,
	TouchableHighlight,
	StyleSheet
} from 'react-native';

import DrawerHeaderComponent from './DrawerHeaderComponent';
import IconComponent from './../../../components/icons/IconComponent';
import { A, B, C, D } from './../../../data/screens/DrawerScreenName';

const iconSrc = './../../../assets/icons/data-icon.png';
const buttonImageSrc = './../../../assets/icons/blue-square-button.png';

export default class CScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		let drawerLabel = C;
		let drawerIcon = () => <IconComponent src={require(iconSrc)} />;
		return { drawerLabel, drawerIcon };
	};

	_onPressButton = () => {
		this.props.navigation.navigate(D);
	};

	render() {
		return (
			<Fragment>
				<DrawerHeaderComponent {...this.props} />
				<SafeAreaView style={styles.safeAreaView}>
					<Text style={styles.text}>This is C Screen</Text>
					<TouchableHighlight
						activeOpacity={0.65}
						underlayColor='transparent'
						onPress={this._onPressButton}>
						<View style={styles.buttonView}>
							<ImageBackground
								style={styles.buttonImage}
								source={require(buttonImageSrc)}
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
