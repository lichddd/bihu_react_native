import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class TopPart extends Component {
  constructor(props){
    super(props);
  }


  componentDidMount(){

    // document.addEventListener("click",(e)=>{this.setState({showlist:false});console.log(this.state)});
  }

  render() {
    return (
        <Text style={styles.welcome}>
          Welcome to React Native!11111
        </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
export default TopPart;
