/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, Component } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	View,
	Text,
	Image,
	ImageBackground,
	TouchableHighlight
} from 'react-native';

import ButtonComponent from 'TestApp/src/components/buttons/ButtonComponent';
import ImageButtonComponent from 'TestApp/src/components/buttons/ImageButtonComponent';

const src1 = require('TestApp/src/assets/icons/golden-button.png');

export default class TestComponent extends Component {
	_onPressButton = () => {
		alert('Button clicked');
	};

	render() {
		return (
			<Fragment>
				<SafeAreaView style={styles.safeAreaView}>
					{global.HermesInternal == null ? null : (
						<View style={styles.engineView}>
							<Text style={styles.engineText}>Using Hermes</Text>
						</View>
					)}
					<Text style={styles.text}>Hmm...</Text>
					<Image
						style={styles.image}
						source={require('TestApp/src/assets/images/blackreaper3.jpg')}
					/>

					<ButtonComponent />
					<ImageButtonComponent />
					<ButtonComponent
						iconWidth={25}
						iconHeight={25}
						iconMarginLeft={3}
						iconSrc={require('TestApp/src/assets/icons/hacker.jpg')}
						textValue='Icon Button'
					/>
					<ImageButtonComponent
						iconWidth={16}
						iconHeight={16}
						iconMarginTop={16}
						iconMarginLeft={4}
						iconSrc={require('TestApp/src/assets/icons/login.png')}
						textSize={12}
						textMarginTop={15}
						textMarginLeft={1}
						textValue='Icon ImgBtn'
					/>
				</SafeAreaView>
			</Fragment>
		);
	}
}

const styles = StyleSheet.create({
	safeAreaView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	engineView: {
		position: 'absolute',
		top: 0,
		right: 0
	},
	engineText: {
		color: '#8000ff',
		fontSize: 12,
		fontWeight: 'bold',
		textAlign: 'right'
	},
	text: {
		fontSize: 16,
		color: 'royalblue',
		marginTop: '1%',
		textAlign: 'center'
	},
	image: {
		width: '50%',
		height: '60%',
		marginTop: '1%',
		marginBottom: '1%'
	}
});
