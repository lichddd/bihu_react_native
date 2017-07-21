import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

class ContextPart extends Component {
  constructor(props){
    super(props);
    this.state={body:""};
  }
  clickhandel=(e)=>{
    // this.setState({hide:!this.state.hide});
    // this.setState(prevState => ({
    //   hide:!prevState.hide
    // }));
  }
  componentDidMount(){

    this.setState({body:""});
    this.getdata();
    //
    // try {
    //   let response = await fetch('music163/api/playlist/catalogue');
    //   let data = await response.json();
    //   console.log(data);
    // } catch(e) {
    //   console.log("Oops, error", e);
    // }

  }
  componentWillReceiveProps(){
    // this.setState({body:null});
    // this.getdata();
  }
  async getdata(id){

    // try {
    //   fetch('music163/api/playlist/catalogue').then(response=>response.json()).then(data=>console.log(data));
    //
    // } catch(e) {
    //   console.log("Oops, error", e);
    // }

    try {
      this.props.addprogress();
      let response = await fetch(`https://news-at.zhihu.com/api/4/news/${this.props.id}`);
      let data = await response.json();
      console.log(data);
      this.props.delprogress();
      this.setState({body:data.body});
    } catch(e) {
      console.log("Oops, error", e);
      this.props.delprogress();
    }

  }

  render() {
    return (
      <View style={styles.webview}>
        <WebView source={{html:this.state.body+`<style>img{max-width:100%}</style>`}}>

        </WebView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  webview: {
    position: 'absolute',
    backgroundColor: '#222',
    height: '100%',
    width: '100%',
  },

});
export default ContextPart;
