import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import TouchableContainer from '../../utilities/TouchableContainer';
import ButtonComponent from './../../components/buttons/ButtonComponent';

export default class HoriListItemComponent extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image style={styles.avatar} source={{ uri: this.props.avatar }} />
				<Text style={styles.name}>{this.props.name}</Text>
				<ButtonComponent
					btnPress={this.props.pressTest}
					btnWidth={100}
					btnHeight={30}
					btnColor='black'
					borRadius={20}
					textValue='Làm bài'
					textSize={18}
					textColor='gold'
					textPadding={2}
					textMarginTop={1}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: 140,
		height: 200,
		alignItems: 'center',
		backgroundColor: 'white',
		borderRadius: 10
	},
	avatar: {
		width: 140,
		height: 140,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10
	},
	name: {
		fontSize: 16,
		color: 'black'
	},
	anime: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'yellow'
	}
});
