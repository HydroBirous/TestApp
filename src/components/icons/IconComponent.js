import React, { Component } from 'react';
import { Image } from 'react-native';

export default class IconComponent extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Image
				source={this.props.src}
				style={{
					width: 25,
					height: 25
				}}
			/>
		);
	}
}
