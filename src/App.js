import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  ActivityIndicator
} from 'react-native';
import TopPart from './views/TopPart';
import ListView from './views/ListView';
import MainPart from './views/MainPart';
import ContextPart from './views/ContextPart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showlist: false,
      list: [],
      themeid: "",
      onStartShouldSetResponderCapture: (e) => false,
      selectid: null,
      progress:0
    };
  }
  addprogress = () => {
    this.setState(previousState => {
        return { progress: previousState.progress+1 };
      })
    // this.setState({progress:this.state.progress+1});
  }
  delprogress = () => {
    this.setState(previousState => {
        return { progress: previousState.progress-1 };
      })
    // this.setState({progress:this.state.progress-1});
  }
  clickhandel = (e) => {
    if (this.state.selectid) {
      this.setState({selectid: null});
    } else {
      this.showlist(e);
    }

  }
  showlist = (e) => {
    // e.nativeEvent.stopImmediatePropagation();
    this.setState({showlist: true});
    this.setState({
      onStartShouldSetResponderCapture: (e) => true
    });
  }
  hidelist = (e) => {
    this.setState({showlist: false});
    this.setState({
      onStartShouldSetResponderCapture: (e) => false
    });
  }
  selectFunc = (id) => {
    this.setState({selectid: id});
  }
  componentDidMount() {
    // Alert.alert('Alert Title', 'alertMessage',);
    // document.addEventListener("click",(e)=>{this.setState({showlist:false});console.log(this.state)});
  }
  changeTheme = (id) => {
    this.setState({themeid: id});
  }

  render() {
    return (
      <View style={styles.container} onResponderStart={this.hidelist} onStartShouldSetResponder={this.state.onStartShouldSetResponderCapture}>
        <View style={{
          height: 20
        }}></View>
        <View style={styles.containerC}>
          <TopPart logoClick={this.clickhandel}></TopPart>

          <View style={styles.containerCC} onResponderStart={this.hidelist} onStartShouldSetResponderCapture={this.state.onStartShouldSetResponderCapture}>
            <MainPart addprogress={this.addprogress} delprogress={this.delprogress} hidelist={this.hidelist} selectFunc={this.selectFunc} themeid={this.state.themeid}></MainPart>
            {this.state.selectid
              ? <ContextPart addprogress={this.addprogress} delprogress={this.delprogress} id={this.state.selectid}></ContextPart>
              : false}
          </View>

          <ListView addprogress={this.addprogress} delprogress={this.delprogress} show={this.state.showlist} hidelist={this.hidelist} changeTheme={this.changeTheme}></ListView>

        </View>
        <ActivityIndicator
        animating={this.state.progress>0}
        style={styles.progress}
        size="large"/>
      </View>

    // <div className="App">
    //
    //   <TopPart logoClick={this.showlist}></TopPart>
    //   {/* <MainPart></MainPart> */}
    //   {this.props.children}
    //   <ListView show={this.state.showlist} themeid={this.state.themeid} themeClick={(id)=>{this.setState({themeid:id});this.getdata(id);}}></ListView>
    // </div>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  containerC: {
    flex: 1,
    width: "100%"
  },
  containerCC: {
    flex: 1,
    width: "100%"
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
  ,
  progress:{
    height:200,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    position:'absolute'
  }
});
export default App;
