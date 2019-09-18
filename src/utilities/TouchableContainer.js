import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native';

const TouchableContainer = ({ children, pressFunc }) => {
	return (
		<TouchableHighlight underlayColor='transparent' onPress={pressFunc}>
			{children}
		</TouchableHighlight>
	);
};

export default TouchableContainer;
