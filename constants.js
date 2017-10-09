'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
} from 'react-native';

class constants extends Component {

	//类内部静态方法，可以通过类名.直接访问
	static data(num1, num2) {
		return num1 + num2;
	}



	render() {
		return (
			<View />
		);
	}
}

//外部方法导出
export function lastData(num3, num4) {
	return num3 - num4;
};

const styles = StyleSheet.create({

});


//外部对象导出
const object = {
	website: 'http://www.hao123.com',
	name: '好123',
};

//默认导出，默认只能导出一个
export default object;

export {
	constants
};