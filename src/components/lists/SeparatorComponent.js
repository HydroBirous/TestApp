import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class SeparatorComponent extends Component {
	render() {
		return <View style={styles.separator} />;
	}
}

const styles = StyleSheet.create({
	separator: {
		width: 10,
		backgroundColor: 'transparent'
	}
});
