import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Animated
} from 'react-native';

class TopPart extends Component {
  constructor(props){
    super(props);
    this.state={list:[{id:"",name:"首页"}],left:0};
  }
  clickhandel=(e)=>{
    // this.setState({left:-200});
    // this.setState(prevState => ({
    //   hide:!prevState.hide
    // }));

    this.props.hidelist(e);
  }
  componentDidMount(){
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
  async getdata(){


    try {
      this.props.addprogress();
      let response = await fetch('https://news-at.zhihu.com/api/4/themes');
      let data = await response.json();
      console.log(data);
      this.props.delprogress();
      this.setState({list:[{id:"",name:"首页"},...data.subscribed,...data.others]});
    } catch(e) {
      console.log("Oops, error", e);
      this.props.delprogress();
    }

  }

  render() {
    return (
        <View style={[styles.links,{left:this.props.show?0:-200}]} className={this.props.show?'list-view show':'list-view'}>
          {
            this.state.list.map((li)=>{
              return <Text onPress={(e)=>{this.clickhandel(e);this.props.changeTheme(li.id)}} style={styles.link} key={li.id}>{li.name}</Text>
            })

          }
        </View>
    );
  }
}
const styles = StyleSheet.create({
  links: {
    position: 'absolute',
    backgroundColor: '#222',
    height: '100%',
    width: 200,
    padding:10,
    paddingTop:50,
  },
  link: {
    fontSize: 24,
    textAlign: 'left',
    color: '#ffffff',
    marginBottom:10,
  },

});
export default TopPart;
