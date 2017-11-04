import React, { Component } from 'react';
import { Text, 
		 StyleSheet, 
		 View,
		 Alert } 
	from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import axios from 'axios';

export default class BarcodeScaner extends Component {

	constructor(props){
		super(props);
		this.state = {
    		hasCameraPermission: null,
  		}
	}

	async componentWillMount() {
    	const { status } = await Permissions.askAsync(Permissions.CAMERA);
    	this.setState({hasCameraPermission: status === 'granted'});
    }

	render() {
		const { hasCameraPermission } = this.state;
		if (hasCameraPermission === null) {
      		return <Text>Requesting for camera permission</Text>;
    	} else if (hasCameraPermission === false) {
    		return <Text>No access to camera</Text>;
    	} else {
    		return (
    			<View style={{ flex: 1 }}>
		          <BarCodeScanner
		            onBarCodeRead={this._handleBarCodeRead}
		            style={StyleSheet.absoluteFill}
		          />
        		</View>
    		)
    	}
	}

	_handleBarCodeRead = ({ type, data }) => {
    	// alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    	console.log(data);
    	var ro4 = data.split('R04~');
    	var address = ro4[1].split('|')[0];
    	var ro7 = data.split('R07~')[1];
    	var postal = ro7.split('|')[0];
    	var ro6 = data.split('R06~')[1];
    	var city = ro6.split('|')[0];
    	var so2  = data.split('S02~')[1];
    	var pin = so2.split('|')[0];
    	Alert.alert(
		  `Barcode Scanned`,
		  `Address: ${address} Postal Code: ${postal} City: ${city} Pin: ${pin}`,
		  [
		    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
		    {text: 'Send', onPress: () => {
		    	axios.post('http://shadid12.herokuapp.com/item', {
		    		username: this.props.name,
		    		address:  address,
		    		postal:  postal,
		    		city: city,
		    		pin: pin
 		    	}).then((res) => {
 		    		console.log(res);
 		    	})
		    }},
		  ],
		  { cancelable: false }
		)
    }
}