import React from 'react';
import { StyleSheet, 
         Text, 
         View, 
         Image,
         KeyboardAvoidingView } 
from 'react-native';
import LogingForm from './components/LoginForm';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }

    this.loginHandler = this.loginHandler.bind(this);
  }

  loginHandler(e) {
    // console.log(e);
    // this.setState({ username: e });
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logo}>
          <Image 
            source={require('./img/box.png')}
          />
          <Text>The Username is: {this.state.username}</Text>
        </View>
        <View style={styles.form}>
          <LogingForm loginHandler = {this.loginHandler} />
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
