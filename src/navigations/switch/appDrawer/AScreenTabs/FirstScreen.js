import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import IconComponent from './../../../../components/icons/IconComponent';
import ButtonComponent from './../../../../components/buttons/ButtonComponent';
import HoriListItemComponent from './../../../../components/lists/HoriListItemComponent';
import SeparatorComponent from './../../../../components/lists/SeparatorComponent';
import flatListData from './../../../../data/lists/flatListData';

import { First, Second, Third, Fourth } from './../../../../data/screens/TabScreenName';

const iconSrc = './../../../../assets/icons/home.png';

export default class FirstScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		let tabBarLabel = First;
		let tabBarIcon = () => <IconComponent src={require(iconSrc)} />;
		return { tabBarLabel, tabBarIcon };
	};

	testPress = () => {
		alert('Click at Item');
	};

	navigateToSecond = () => {
		this.props.navigation.navigate(Second);
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>LÀM TRẮC NGHIỆM</Text>
				<Text style={styles.note}>Vui lòng chọn Môn học</Text>
				<View style={styles.listContainer}>
					<FlatList
						data={flatListData}
						renderItem={({ item, index }) => {
							return (
								<View style={styles.itemContainer}>
									<HoriListItemComponent
										item={item}
										index={index}
										avatar={item.avatar}
										name={item.name}
										anime={item.anime}
									/>
								</View>
							);
						}}
						horizontal={true}
						ItemSeparatorComponent={SeparatorComponent}
						initialNumToRender={3}
						keyExtractor={(item) => item.key}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#47be83'
	},
	title: {
		fontSize: 28,
		fontWeight: 'bold',
		backgroundColor: 'rgba(255,255,255,0.7)',
		color: 'black',
		textAlign: 'center',
		padding: 10,
		borderRadius: 30
	},
	note: {
		fontSize: 20,
		fontStyle: 'italic',
		color: 'white',
		textAlign: 'center',
		marginTop: 15
	},
	listContainer: {
		height: 210,
		marginTop: 15,
		marginLeft: 15,
		marginRight: 15
	},
	itemContainer: {
		justifyContent: 'center',
		alignItems: 'center'
	}
});
