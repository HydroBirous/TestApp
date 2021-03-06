import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, TouchableHighlight } from 'react-native';

const buttonSrc = { uri: 'https://i.imgur.com/xAVuJ8y.png' };

/* ----- PROPS LIST -----

		btnMarginTop
		btnMarginLeft
		btnPress

		imgWidth
		imgHeight
		imgSrc

		iconWidth
		iconHeight
		iconMarginTop
		iconMarginLeft
		iconPadding
		iconSrc

		textSize
		textWeight
		textColor
		textMarginTop
		textPadding
		textValue

*/

export default class ImageButtonComponent extends Component {
	checkNull = (property, defaultValue) => {
		if (property === null || typeof property === 'undefined') return defaultValue;
		else return property;
	};

	btnDefaultPress = () => {
		alert('Image Button Pressed');
	};

	render() {
		return (
			<View
				style={{
					marginTop: this.checkNull(this.props.btnMarginTop, 0),
					marginLeft: this.checkNull(this.props.btnMarginLeft, 0)
				}}>
				<TouchableHighlight
					activeOpacity={0.7}
					underlayColor='transparent'
					onPress={this.checkNull(this.props.btnPress, this.btnDefaultPress)}>
					<View>
						<ImageBackground
							style={{
								width: this.checkNull(this.props.imgWidth, 120),
								height: this.checkNull(this.props.imgHeight, 60)
							}}
							source={this.checkNull(this.props.imgSrc, buttonSrc)}>
							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'center',
									alignItems: 'center'
								}}>
								<Image
									style={{
										width: this.checkNull(this.props.iconWidth, 0),
										height: this.checkNull(this.props.iconHeight, 0),
										marginTop: this.checkNull(this.props.iconMarginTop, 0),
										marginLeft: this.checkNull(this.props.iconMarginLeft, 0),
										padding: this.checkNull(this.props.iconPadding, 0)
									}}
									source={this.checkNull(this.props.iconSrc, null)}
								/>
								<Text
									style={{
										textAlign: 'center',
										fontSize: this.checkNull(this.props.textSize, 16),
										fontWeight: this.checkNull(this.props.textWeight, 'normal'),
										color: this.checkNull(this.props.textColor, 'white'),
										marginTop: this.checkNull(this.props.textMarginTop, 11),
										marginLeft: this.checkNull(this.props.textMarginLeft, 0),
										padding: this.checkNull(this.props.textPadding, 5)
									}}>
									{this.checkNull(this.props.textValue, 'Nút Có Hình')}
								</Text>
							</View>
						</ImageBackground>
					</View>
				</TouchableHighlight>
			</View>
		);
	}
}
