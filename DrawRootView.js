'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text,
} from 'react-native';

class DrawRootView extends Component {
	static navigationOptions = {
		drawerLabel: '首页',
	};

	render() {
		return (
			<Text>DrawRootView</Text>
		);
	}
}

class DayDateView extends Component {
	static navigationOptions = {
		drawerLabel: '我的数据',
	};
	render() {
		return (
			<Text>DayDateView</Text>
		);
	}
}

class DataDownloadingView extends Component {
	render() {
		return (
			<Text>DataDownloadingView</Text>
		);
	}
}

//设备诊断
class DeviceDiagnosisView extends Component {
	render() {
		return (
			<Text>DeviceDiagnosis</Text>
		);
	}
}

//系统配置
class SystemConfigurationView extends Component {
	render() {
		return (
			<Text>SystemConfiguration</Text>
		);
	}
}

class NetworkSettingsView extends Component {
	render() {
		return (
			<Text>NetworkSettings</Text>
		);
	}
}


//卫星状态
class SatelliteStatusView extends Component {
	render() {
		return (
			<Text>SatelliteStatus</Text>
		);
	}
}

//报警设置
class AlarmSettingView extends Component {
	render() {
		return (
			<Text>AlarmSetting</Text>
		);
	}
}

//系统升级
class SystemUpgradeView extends Component {
	render() {
		return (
			<Text>SystemUpgrade</Text>
		);
	}
}

const styles = StyleSheet.create({

});


export {
	DrawRootView,
	DayDateView,
	DataDownloadingView,
	DeviceDiagnosisView,
	SystemConfigurationView,
	NetworkSettingsView,
	SatelliteStatusView,
	AlarmSettingView,
	SystemUpgradeView,
};
// export default DrawRootView;