import React, { Fragment, Component } from 'react';
import {
	Text,
	View,
	SafeAreaView,
	StyleSheet,
	Image,
	Alert,
	TextInput,
	Platform,
	TouchableWithoutFeedback,
	Keyboard
} from 'react-native';
import firebase from 'react-native-firebase';

import ButtonComponent from 'TestApp/src/components/buttons/ButtonComponent';
import DismissKeyboard from './../../../utilities/DismissKeyboard';

const firebaseAuth = firebase.auth();

export default class LoginComponent extends Component {
	constructor(props) {
		super(props);
		this.unsubcriber = null;
		this.state = {
			typedEmail: '',
			typedPassword: '',
			user: null,
			changedUser: null,
			registerUser: null,
			loginUser: null
		};
	}

	// unsubcriber is called when ever the user changed
	componentDidMount = async () => {
		this.unsubcriber = await firebaseAuth.onAuthStateChanged(async (changedUser) => {
			await this.setState({
				user: changedUser
			});
		});
		if (firebaseAuth.currentUser !== null) await firebaseAuth.currentUser.reload();
	};

	componentWillUnmount() {
		if (this.unsubcriber) {
			this.unsubcriber();
		}
	}

	onGuestLogin = () => {
		firebaseAuth
			.signInAnonymously()
			.then(() => {
				alert('Anonymously Login Successfully');
				this.setState({
					isAuthenticated: true
				});
			})
			.catch((error) => {
				alert(`Anonymously Login Failed\n${error}`);
				//console.log(`Anonymously Login Failed. Error = ${error}`);
			});
	};

	/* var actionCodeSettings = {
						url: 'https://testapplogin.com/welcome',
						iOS: {
							bundleId: 'com.example.ios'
						},
						android: {
							packageName: 'com.testapp',
							installApp: true,
							minimumVersion: '0.0.1'
						},
						handleCodeInApp: true,
						// When multiple custom dynamic link domains are defined, specify which
						// one to use.
						dynamicLinkDomain: 'https://testapplogin.page.link'
					}; */

	onRegister = async () => {
		if (this.state.typedEmail === null || this.state.typedEmail.trim() === '')
			alert('Please type your Email');
		else if (this.state.typedPassword === null || this.state.typedPassword.trim() === '')
			alert('Please type your Password');
		else {
			await firebaseAuth
				.createUserWithEmailAndPassword(this.state.typedEmail, this.state.typedPassword)
				.then(async (registerUser) => {
					alert('');
					this.setState({
						user: registerUser
					});

					await firebaseAuth.currentUser
						.sendEmailVerification()
						.then(async () => {
							await alert(
								'Successfully register  but you need verify your Email to Login'
							);
						})
						.catch((error) => {
							alert(`${error.toString().replace('Error: ', '')}`);
						});

					await firebaseAuth.signOut().then(async () => {}).catch((error) => {
						alert(`${error.toString().replace('Error: ', '')}`);
					});
				})
				.catch((error) => {
					alert(`${error.toString().replace('Error: ', '')}`);
				});
		}
	};

	onLogin = async () => {
		if (this.state.typedEmail === null || this.state.typedEmail.trim() === '')
			alert('Please type your Email');
		else if (this.state.typedPassword === null || this.state.typedPassword.trim() === '')
			alert('Please type your Password');
		else {
			await firebaseAuth
				.signInWithEmailAndPassword(this.state.typedEmail, this.state.typedPassword)
				.then(async (loginUser) => {
					if (firebaseAuth.currentUser) {
						await firebaseAuth.currentUser.reload();
						if (firebaseAuth.currentUser.emailVerified) {
							alert('Login Successfully');
							this.setState({
								user: loginUser
							});
						} else {
							await firebaseAuth
								.signOut()
								.then(async () => {
									await alert('Please verify your Email to Login');
								})
								.catch((error) => {
									alert(`${error.toString().replace('Error: ', '')}`);
								});
							return;
						}
					} else {
						alert('User is not exist');
						return;
					}
				})
				.catch((error) => {
					alert(`${error.toString().replace('Error: ', '')}`);
				});
		}
	};

	onLogout = async () => {
		Alert.alert(
			'Comfirm',
			'Are you sure wanting to Logout ?',
			[
				{
					style: 'cancel',
					text: 'No'
				},
				{
					text: 'Yes',
					onPress: () => {
						firebaseAuth
							.signOut()
							.then(async () => {
								await alert('Logout Successfully');
							})
							.catch((e) => {
								alert(e);
							});
					}
				}
			],
			{
				cancelable: false
			}
		);
	};

	render() {
		return (
			<Fragment>
				<DismissKeyboard>
					<SafeAreaView style={styles.container}>
						<Text style={styles.title}>FIRE BASE LOGIN TEST</Text>

						<View style={styles.textInputView}>
							<TextInput
								style={styles.textInput}
								keyboardType='email-address'
								placeholder='Enter your Email'
								autoCapitalize='none'
								onChangeText={(text) => {
									this.setState({
										typedEmail: text
									});
								}}
							/>
							<TextInput
								style={styles.textInput}
								keyboardType='default'
								placeholder='Enter your Password'
								secureTextEntry={true}
								onChangeText={(text) => {
									this.setState({
										typedPassword: text
									});
								}}
							/>
						</View>

						<View style={styles.buttonColumnView}>
							<View style={styles.buttonRowView}>
								<ButtonComponent
									btnMarginLeft={5}
									btnWidth={100}
									btnPress={this.onRegister}
									btnColor='violet'
									textValue='Register'
								/>
								<ButtonComponent
									btnMarginLeft={5}
									btnWidth={100}
									btnPress={this.onLogin}
									btnColor='mediumspringgreen'
									textColor='black'
									textValue='Login'
								/>
								<ButtonComponent
									btnMarginLeft={5}
									btnWidth={100}
									btnPress={this.onLogout}
									btnColor='black'
									textColor='white'
									textValue='Logout'
								/>
							</View>
							<View style={styles.buttonRowView}>
								<ButtonComponent
									btnMarginLeft={5}
									btnWidth={100}
									btnPress={this.onGuestLogin}
									btnColor='gold'
									textColor='black'
									textValue='Guest'
								/>
								<ButtonComponent
									btnMarginLeft={5}
									btnWidth={100}
									btnPress={this.onFBLogin}
									btnColor='royalblue'
									textColor='white'
									textValue='Facebook'
								/>
								<ButtonComponent
									btnMarginLeft={5}
									btnWidth={100}
									btnPress={this.onGGLogin}
									btnColor='tomato'
									textColor='white'
									textValue='Google'
								/>
							</View>
						</View>
					</SafeAreaView>
				</DismissKeyboard>
			</Fragment>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		fontSize: 22,
		fontWeight: 'bold',
		textAlign: 'center',
		color: 'red'
	},
	textGuest: {
		marginTop: '1%',
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
		color: 'darkviolet'
	},
	textInputView: {
		marginTop: 10
	},
	textInput: {
		marginTop: '1%',
		height: 50,
		width: 250,
		borderColor: 'grey',
		borderWidth: 1,
		color: 'black'
	},
	buttonColumnView: {
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 10
	},
	buttonRowView: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 10
	}
});
