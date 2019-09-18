import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CComponent from './CScreen';
import DComponent from './DScreen';

import { A, B, C, D } from './../../../data/screens/DrawerScreenName';

import TabControllerComponent from './AScreenTabs/TabControllerComponent';
import StackControllerComponent from './BScreenStacks/StackControllerComponent';
import IconComponent from './../../../components/icons/IconComponent';

const screenWidth = Dimensions.get('window').width;

let routeConfigs = {
	A: {
		screen: TabControllerComponent,
		navigationOptions: {
			drawerLabel: 'A',
			drawerIcon: <IconComponent src={require('./../../../assets/icons/ac-icon.png')} />
		}
	},
	B: {
		screen: StackControllerComponent,
		navigationOptions: {
			drawerLabel: 'B',
			drawerIcon: <IconComponent src={require('./../../../assets/icons/add-icon.png')} />
		}
	},
	C: {
		screen: CComponent
	},
	D: {
		screen: DComponent
	}
};

let drawerNavigatorConfig = {
	initialRouteName: A,
	drawerWidth: screenWidth / 2,
	useNativeAnimations: true,
	swipeable: true,
	drawerPosition: 'left',
	contentOptions: {
		activeTintColor: 'crimson'
	}
};

const DrawerControllerComponent = createDrawerNavigator(routeConfigs, drawerNavigatorConfig);

export default createAppContainer(DrawerControllerComponent);
