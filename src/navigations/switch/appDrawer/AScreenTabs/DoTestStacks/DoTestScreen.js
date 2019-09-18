import React, { Component } from 'react';
import { View, Text, Alert, BackHandler, StyleSheet } from 'react-native';

export default class DoTestScreen extends Component {
	navigateTo = (screenName) => {
		this.props.navigation.navigate(screenName);
	};

	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.backPressed);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
	}

	backPressed = () => {
		Alert.alert(
			'HỦY BÀI LÀM',
			'Bạn muốn hủy bài làm ?',
			[
				{ text: 'Không', style: 'cancel' },
				{
					text: 'Có',
					onPress: () => {
						this.navigateTo('ChooseSubject');
					}
				}
			],
			{ cancelable: false }
		);
		return true;
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.titile}>Đây là màn hình làm bài trắc nghiệm</Text>
				<Text style={styles.note}>Bấm Back để hủy bài thi và quay lại trang trước</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	titile: {
		fontSize: 28,
		fontWeight: 'bold',
		color: 'red',
		textAlign: 'center'
	},
	note: {
		fontSize: 22,
		color: 'black',
		textAlign: 'center'
	}
});
