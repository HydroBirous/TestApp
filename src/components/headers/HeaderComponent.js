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

import ImageButtonComponent from './../../buttons/ImageButtonComponent';

const imgBtn = 'TestApp/src/assets/icons/square-menu-button.png';

export default class HeaderComponent extends Component {
	render() {
		return (
			<View style={styles.container}>
				<ImageButtonComponent
					btnPress={this.props.onPressBtn}
					btnMarginLeft={5}
					imgWidth={50}
					imgHeight={50}
					imgSrc={require(imgBtn)}
					textValue=''
				/>
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
	}
});
