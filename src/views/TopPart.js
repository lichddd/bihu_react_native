import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

class TopPart extends Component {
  // constructor(props){
  //   // super(props);
  // }




  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.h2} onPress={this.props.logoClick} >逼乎日报</Text>
          <Text style={styles.h6}>-向世人展示你的装逼奇技淫巧</Text>

        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    backgroundColor: '#222',
    padding:7.5,
    height: 40,
    width:380,
    top:0,
  },
  h2: {
    fontSize: 24,
    textAlign: 'left',
    color: '#ffffff',
  },
  h6: {
    fontSize: 10,
    textAlign: 'left',
    color: '#ffffff',

  },
});
export default TopPart;
