'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text,
	Button,
	TextInput,
	Alert
} from 'react-native';
import PopupDialog, {
	SlideAnimation,
	DialogTitle
} from 'react-native-popup-dialog';
import {
	deviceWidth,
	deviceHeight,
	setSpText,
	scaleSize
} from './Utils/ScreenUiUtils.js';

class MyTest extends Component {

	constructor(props) {
		super(props);
		this.text = 'Useless Placeholder';
		this.state = {};
	}

	render() {

		return (
			<View>
  				<Button title="Show Dialog" onPress={() => {this.popupDialog.show();}}/>
  				<Button title = "showText" onPress = {() => Alert.alert('this.text:' + this.text)} />
  				<PopupDialog ref={(popupDialog) => { this.popupDialog = popupDialog; }}  dialogAnimation = { new SlideAnimation({ slideFrom: 'bottom' })} 
  					 dialogTitle={<DialogTitle title="Dialog Title" />} 
  				>
    				<View>
     				 	<TextInput  style={{height: 40, borderColor: 'gray', borderWidth: 1}}  
     				 		onChangeText={(text) => this.text = text} 
     				 		placeholder = "chenjianhui" 
     				 		placeholderTextColor  = 'gray'
							secureTextEntry  = {true}
							underlineColorAndroid = 'transparent'
							/>
    				</View>
  				</PopupDialog>
			</View>
		);
	}
}

const styles = StyleSheet.create({

});


export default MyTest;