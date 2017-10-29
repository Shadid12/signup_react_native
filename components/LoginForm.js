import React, { Component } from 'react';
import { StyleSheet, 
         TextInput,
         Text, 
         View,
         TouchableOpacity 
        } 
from 'react-native'; 

export default class LoginForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: ''
		}
	}

	handleChange(e) {
    	this.setState({ username: e.target.value });
    }

	render() {
		return(
			<View style={styles.container}>
				<TextInput
				    placeholder="username"
					style={styles.input}
					onChange={ this.handleChange.bind(this) } 
				/>
				<TouchableOpacity style={styles.buttonContainer}>
					<Text style={styles.buttonText} onClick={this.props.loginHandler(this.state.username)}>Login</Text>
				</TouchableOpacity>  
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 20
	},

	input: {
		height: 40,
		backgroundColor: 'rgba(255,255,255,0.2)',
		marginBottom: 80
	},

	buttonContainer: {
		backgroundColor: '#856084',
		paddingVertical: 20
	},

	buttonText: {
		textAlign: 'center',
		color: '#FFF'
	}

})