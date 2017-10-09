import React, {
	Component
} from 'react';

import object from './constants.js';
import {
	constants,
	lastData
} from './constants.js';

import {
	StyleSheet,
	View,
	Text
} from 'react-native';

class App extends Component {
	render() {
		return (
			<View>
			<Text>
			  {constants.data(1,2)}
			</Text>
			<Text>
			{lastData(3,4)}
			</Text>
			< Text > {
				object.website
			} < /Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({

});


export default App;