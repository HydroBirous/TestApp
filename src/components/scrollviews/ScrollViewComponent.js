import React, { Component } from 'react';
import { ScrollView, Image, Text, StyleSheet, View } from 'react-native';

export default class ScrollViewComponent extends Component {
	render() {
		const src1 = 'TestApp/src/assets/images/blackreaper1.jpg';
		const src2 = 'TestApp/src/assets/images/blackreaper2.jpg';
		const src3 = 'TestApp/src/assets/images/blackreaper3.jpg';
		const src4 = 'TestApp/src/assets/images/haise.jpg';

		const uri1 = 'https://i.pinimg.com/474x/62/81/26/628126c2c26da2d40de85655315e79d4.jpg';
		const uri2 =
			'http://images6.fanpop.com/image/photos/39900000/Touka-tokyo-ghoul-39979026-1024-1024.jpg';
		const uri3 = 'https://static.zerochan.net/Yoshimura.Eto.full.1962679.jpg';
		const uri4 =
			'https://66.media.tumblr.com/fa87da3613c0ff9c531f2638fad97cc3/tumblr_o3kx3zZp9H1u69mh2o1_1280.jpg';
		return (
			<ScrollView>
				<View style={styles.container}>
					<Text style={styles.text}>Scroll me down !</Text>
					<Image source={require(src1)} style={styles.image} />

					<Text style={styles.text}>What do you see ?</Text>
					<Image source={require(src2)} style={styles.image} />

					<Text style={styles.text}>Wanna see more ?</Text>
					<Image source={require(src3)} style={styles.image} />

					<Text style={styles.text}>Keep scrolling</Text>
					<Image source={require(src4)} style={styles.image} />

					<Text style={styles.text}>Here is image from Web</Text>
					<Image style={styles.image} source={{ uri: uri1 }} />

					<Text style={styles.text}>It's beautiful, isn't it ?</Text>
					<Image style={styles.image} source={{ uri: uri2 }} />

					<Text style={styles.text}>Almost done</Text>
					<Image style={styles.image} source={{ uri: uri3 }} />

					<Text style={styles.text}>DONE !!!</Text>
					<Image style={styles.image} source={{ uri: uri4 }} />
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column'
	},
	text: {
		fontSize: 22,
		fontWeight: 'bold',
		color: 'black',
		marginTop: '1%'
	},
	image: {
		width: 400,
		height: 600,
		marginTop: '1%'
	}
});
