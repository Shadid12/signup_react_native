import React from 'react';
import { StyleSheet, 
         Text, 
         View, 
         Image } 
from 'react-native';
import LogingForm from './components/LoginForm';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image 
            source={require('./img/box.png')}
          />
          <Text>Login to start</Text>
        </View>
        <View style={styles.form}>
          <LogingForm />
        </View>
      </View>
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
