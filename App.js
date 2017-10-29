import React from 'react';
import { StyleSheet, 
         Text,
         TextInput,
         View, 
         Image,
         TouchableOpacity,
         KeyboardAvoidingView } 
from 'react-native';
import LogingForm from './components/LoginForm';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  }

  handleChange(e) {
      this.setState({ username: e.target.value });
  }

  handleLoging(e) {
    e.preventDefault();
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logo}>
          <Image 
            source={require('./img/box.png')}
          />
          <Text>Username is {this.state.username}</Text>
        </View>
        <View style={styles.form}>
          <View style={stylesForm.container}>
            <TextInput
                placeholder="username"
              style={stylesForm.input}
              onChange={ this.handleChange.bind(this) } 
            />
            <TouchableOpacity style={stylesForm.buttonContainer}>
              <Text style={stylesForm.buttonText} onClick={this.handleLoging.bind(this)}>Login</Text>
            </TouchableOpacity>  
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C1CAD6'
  },
  logo: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  form: {

  }
});

const stylesForm = StyleSheet.create({
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
