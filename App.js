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
	Text,
	Button,
	TouchableHighlight,
	Image,
	ScrollView,
	Modal,
	NavigatorBar,
	TextInput
} from 'react-native';

import {
	DrawRootView,
	DayDateView,
	DataDownloadingView,
	DeviceDiagnosisView,
	SystemConfigurationView,
	NetworkSettingsView,
	SatelliteStatusView,
	AlarmSettingView,
	SystemUpgradeView,
} from './DrawRootView.js';

import {
	DrawerNavigator,
	StackNavigator
} from 'react-navigation';
// import CookieManager from 'react-native-cookies';
import Cookie from 'react-native-cookie';
import {
	Banner_Imgs
} from './Utils/Constants.js';
import {
	deviceWidth,
	deviceHeight,
	setSpText,
	scaleSize
} from './Utils/ScreenUiUtils.js';
import MyTestView from './MyTest.js';

class App extends Component {
	render() {
		return (
			<StackNavigatorRoot />
		);
	}
}

class RootView extends Component {
	static navigationOptions = {
		header: false,
		drawerLabel: '首页',
		drawerIcon: ({
			tintColor
		}) => (
			<Image
        source={Banner_Imgs.TEST_ICON}
        style={[styles.icon, {tintColor: tintColor,height:scaleSize(50),width:scaleSize(50)}]}
      />
		),
	}
	constructor(props) {
		super(props);

		this.state = {
			data: {},
			newOrOld: true,
			modalVisible: false,
		};
	}

	componentDidMount() {
		this.fetchData();
	}

	setModalVisible(visible) {
		this.setState({
			modalVisible: visible
		});
	}

	fetchData() {
		fetch('http://47.94.157.124:8080/customer/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: 'customerCode=' + '111' + '&' + 'password=' + '123456'
			})
			.then((response) => response.json())
			.then((responseJson) => {
				this.setState({
					data: responseJson.message,
				});

				// CookieManager.setFromResponse(
				// 		'http://example.com',
				// 		'user_session=abcdefg; path=/; expires=Thu, 1 Jan 2030 00:00:00 -0000; secure; HttpOnly')
				// 	.then((res) => {
				// 		// `res` will be true or false depending on success.
				// 		console.log('CookieManager.setFromResponse =>', res);
				// 	});

				// console.log("this.state.data.customerId:" + this.state.data.customerId);
				// CookieManager.get('http://example.com')
				// 	.then((res) => {
				// 		console.log('CookieManager.get =>' + res);
				// 		console.log('CookieManager.get =>', res);
				// 	});
				// CookieManager.clearAll()
				// 	.then((res) => {
				// 		console.log('CookieManager.clearAll =>', res);
				// 	});
				Cookie.set('http://47.94.157.124:8080/customer/login', 'foo', 'bar')
					.then((cookie) => {
						console.log('cookieSet:' + cookie);
					});


				Cookie.get('http://47.94.157.124:8080/customer/login')
					.then((cookie) => {
						console.log('cookie:', cookie);
					});

				// Cookie.clear();



			})
			.catch((error) => {
				console.error(error);
			})
			.done();
	}

	render() {

		Cookie.get('http://47.94.157.124:8080/customer/login')
			.then((cookie) => {
				console.log('cookie2:', cookie);
			});

		const {
			navigation
		} = this.props;
		return (

			<View style = {{flex: 1, flexDirection:'row',}}>
				<View style={{flex: 0.2, backgroundColor:'#90EE90',}}>
				</View>
				<View style={{flex: 0.8, backgroundColor:'#FFFFFF'}}>
					<View style={{flex: 0.1, backgroundColor:'#8B5A2B'}}>
					
					</View>
					<View style={{flex: 0.9, backgroundColor:'#FFFFFF', flexDirection:'row'}}>
						<View style={{flex: 0.8, backgroundColor:'#FFFF00', } }>

							<TouchableHighlight onPress = {() => this.setState({
								newOrOld:this.state.newOrOld?false:true,
							})} underlayColor = '#FFFF00'>

								<Image
								  style={{height:40,width:250}}
								  source={this.state.newOrOld?Banner_Imgs.MAINPAGEVIEW_BANNER:Banner_Imgs.MAINPAGEVIEW_TOPICON}
								/>
								
							</TouchableHighlight>
							
						</View>
						<View style={{flex: 0.2, backgroundColor:'#00FF00', } }>
							
							<Button onPress = {() => {
								navigation.navigate('DrawerToggle');
							}} title = "Touch Me" />

							
						</View>
					</View>
				</View>
			</View>


		);
	}
}

class TestView extends Component {


	constructor(props) {
			super(props);
			this.state = {
				show: false,
				text: 'Useless Placeholder',
			};
		}
		// 自定义方法区域  

	// your method  
	_leftButtonClick() {

	}
	_rightButtonClick() {
		//  
		console.log('右侧按钮点击了');
		this._setModalVisible();
	}

	// 显示/隐藏 modal  
	_setModalVisible() {
		let isShow = this.state.show;
		this.setState({
			show: !isShow,
		});
	}

	render() {
		return (
			<View style={styles.container}>  

           <Button onPress = {() => this._rightButtonClick()} title = 'Modal测试' />

         <Modal  
           animationType='slide'  
           transparent={true}  
           visible={this.state.show}  
           onShow={() => {}}  
           onRequestClose={() => {}} >  
           <View style={styles.modalStyle}>  
             <View style={styles.subView}>  
               <Text style={styles.titleText}>  
                 提示  
               </Text>  
               <Text style={styles.contentText}>  
                 Modal显示的View 
               </Text>  
               <TextInput  style={{height: scaleSize(40),borderColor: 'gray', borderWidth: 1}}  onChangeText={(text) => this.setState({text})} value={this.state.text} />
               <View style={styles.horizontalLine} />  
               <View style={styles.buttonView}>  
                 <TouchableHighlight underlayColor='transparent'  
                   style={styles.buttonStyle}  
                   onPress={this._setModalVisible.bind(this)}>  
                   <Text style={styles.buttonText}>  
                     取消  
                   </Text>  
                 </TouchableHighlight>  
                 <View style={styles.verticalLine} />  
                 <TouchableHighlight underlayColor='transparent'  
                   style={styles.buttonStyle}  
                   onPress={this._setModalVisible.bind(this)}>  
                   <Text style={styles.buttonText}>  
                     确定  
                   </Text>  
                 </TouchableHighlight>  
               </View>  
             </View>  
           </View>  
        </Modal>  
       </View>
		);
	}
}



const DrawerNavigatorRoot = DrawerNavigator({
	Home: {
		screen: MyTestView,
	},
	DayDateView: {
		screen: DayDateView,
	},
	DataDownloadingView: {
		screen: DataDownloadingView,
	},
	DeviceDiagnosisView: {
		screen: DeviceDiagnosisView,
	},
	SystemConfigurationView: {
		screen: SystemConfigurationView,
	},
	NetworkSettingsView: {
		screen: NetworkSettingsView,
	},
	SatelliteStatusView: {
		screen: SatelliteStatusView,
	},
	AlarmSettingView: {
		screen: AlarmSettingView,
	},
	SystemUpgradeView: {
		screen: SystemUpgradeView,
	},
}, {
	// header: false,
	drawerPosition: 'left',
	drawerWidth: 200,
	// drawerBackgroundColor: 'transparent',
	opacity: 0.5,

	// contentOptions: {
	// 	style: {
	// 		backgroundColor: 'rgba(255,255,0,0.3)',
	// 		opacity: 0.5,
	// 	}
	// },

	// contentComponent: props => {
	// 	console.log('contentComponent');
	// 	console.log(props);
	// 	return (

	// 		<View style = {{flex: 1, backgroundColor:'rgba(255,0,0,0.5)',opacity:0.5}}>
	//                    <View style={{paddingVertical: 20, paddingHorizontal: 15, backgroundColor:'#000'}}>
	//                        <Text style={{color:'#FFF'}}>ser Name</Text>
	//                    </View>

	//                </View>

	// 	)
	// },
});

const StackNavigatorRoot = StackNavigator({
	Home: {
		screen: DrawerNavigatorRoot,
	},
	DayDateView: {
		screen: DayDateView,
	},
}, {
	// header: false,
	headerMode: 'card',
});



const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ECECF0',
	},
	// modal的样式  
	modalStyle: {
		// backgroundColor:'#ccc',  
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},
	// modal上子View的样式  
	subView: {
		marginLeft: 60,
		marginRight: 60,
		backgroundColor: '#fff',
		alignSelf: 'stretch',
		justifyContent: 'center',
		borderRadius: 10,
		borderWidth: 0.5,
		borderColor: '#ccc',
	},
	// 标题  
	titleText: {
		marginTop: 10,
		marginBottom: 5,
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	// 内容  
	contentText: {
		margin: 8,
		fontSize: 14,
		textAlign: 'center',
	},
	// 水平的分割线  
	horizontalLine: {
		marginTop: 5,
		height: 0.5,
		backgroundColor: '#ccc',
	},
	// 按钮  
	buttonView: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	buttonStyle: {
		flex: 1,
		height: 44,
		alignItems: 'center',
		justifyContent: 'center',
	},
	// 竖直的分割线  
	verticalLine: {
		width: 0.5,
		height: 44,
		backgroundColor: '#ccc',
	},
	buttonText: {
		fontSize: 16,
		color: '#3393F2',
		textAlign: 'center',
	},
});


export default App;