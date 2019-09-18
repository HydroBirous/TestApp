import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import IconComponent from './../../../../components/icons/IconComponent';

import DoTestStackController from './DoTestStacks/DoTestStackController';

import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';
import FourthScreen from './FourthScreen';

import { First, Second, Third, Fourth } from './../../../../data/screens/TabScreenName';

const iconSrc = './../../../../assets/icons/trac-nghiem.png';

let routeConfig = {
	First: {
		screen: DoTestStackController,
		navigationOptions: {
			tabBarLabel: 'Test',
			tabBarIcon: () => <IconComponent src={require(iconSrc)} />
		}
	},
	Second: {
		screen: SecondScreen
	},
	Third: {
		screen: ThirdScreen
	},
	Fourth: {
		screen: FourthScreen
	}
};
let tabNavigatorConfig = {
	//tabBarPosition: 'top',
	order: [ First, Second, Third, Fourth ],
	initialRouteName: First,
	tabBarOptions: {
		activeTintColor: 'yellow',
		activeBackgroundColor: 'royalblue',
		pressColor: 'white',
		indicatorStyle: {
			height: '5%'
		},
		showLabel: true,
		showIcon: true
	},
	resetOnBlur: true,
	lazy: true
	//animationEnabled: true,
	//swipeEnabled: true,
	//bounces: true,
};

const TabControllerComponent = createBottomTabNavigator(routeConfig, tabNavigatorConfig);

export default TabControllerComponent;
