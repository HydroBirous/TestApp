import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import ImageButtonComponent from './../../../components/buttons/ImageButtonComponent';

const buttonImageSrc = './../../../assets/icons/square-menu-button.png';

export default class DrawerHeaderComponent extends Component {
	_onPressButton = () => {
		this.props.navigation.openDrawer();
	};
	render() {
		return (
			<View style={styles.container}>
				<ImageButtonComponent
					btnPress={this._onPressButton}
					btnMarginLeft={5}
					imgWidth={50}
					imgHeight={50}
					imgSrc={require(buttonImageSrc)}
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
