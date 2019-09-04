import React, { Fragment, Component } from 'react';
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	Keyboard,
	keyboardDidShowListener,
	TouchableWithoutFeedback
} from 'react-native';

export default class TextInputComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			typedEmail: 'Here is your typed Email',
			typedPassword: 'Here is your Password',
			keyboardState: ''
		};
	}

	componentDidMount() {
		this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
			this.setState(() => {
				return { keyboardState: 'Keyboard is shown' };
			});
		});
		this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
			this.setState(() => {
				return { keyboardState: 'Keyboard is hidden' };
			});
		});
	}

	componentWillUnmount() {
		this.keyboardDidShowListener.remove();
		this.keyboardDidHideListener.remove();
	}

	render() {
		return (
			//Auto hide keyboard when click blank
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<View style={css.container}>
					<View style={css.boxContainer}>
						<TextInput
							style={css.emailBox}
							placeholder='Type your Email'
							placeholderTextColor='red'
							keyboardType='email-address'
							onChangeText={(text) => {
								this.setState((previousState) => {
									return {
										typedEmail: text
									};
								});
							}}
						/>
						<Text style={css.changedText}>{this.state.typedEmail}</Text>
						<TextInput
							style={css.passwordBox}
							placeholder='Type your Password'
							placeholderTextColor='blue'
							secureTextEntry={true}
							onChangeText={(text) => {
								this.setState((previousState) => {
									return {
										typedPassword: text
									};
								});
							}}
						/>
						<Text style={css.changedText}>{this.state.typedPassword}</Text>

						<Text style={css.changedText}>{this.state.keyboardState}</Text>
						<TextInput
							style={css.multilineBox}
							placeholder={
								'Edit this box if you can\nThis is the second line\nAnd this is the third one'
							}
							multiline={true}
							borderTopColor='green'
							borderBottomColor='orange'
							borderLeftColor='red'
							borderRightColor='purple'
							borderWidth={3}
							editable={true}
							autoFocus={true}
							//returnKeyLabel='done'
							//onSubmitEditing={Keyboard.dismiss}
						/>
					</View>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const css = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	boxContainer: {
		width: '100%',
		height: 400,
		alignItems: 'center'
	},
	emailBox: {
		width: '90%',
		height: '10%',
		borderColor: 'red',
		borderWidth: 1,
		marginTop: '5%'
	},
	changedText: {
		padding: '1%'
	},
	passwordBox: {
		width: '90%',
		height: '10%',
		borderColor: 'blue',
		borderWidth: 1
	},
	multilineBox: {
		width: '80%',
		height: '40%',
		//borderColor: 'black',
		//borderWidth: 1,
		textAlignVertical: 'top'
	}
});
