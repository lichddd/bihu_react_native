import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight
} from 'react-native';
class MainPart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  clickhandel = (e) => {
    // this.setState({hide:!this.state.hide});
    // this.setState(prevState => ({
    //   hide:!prevState.hide
    // }));
  }
  componentDidMount() {
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
  componentDidUpdate(prevProps) {
    let oldId = prevProps.themeid;
    let newId = this.props.themeid;
    if (newId !== oldId) {
      this.getdata();
    }

  }

  async getdata(id) {

    try {
      // let response = await fetch('https://news-at.zhihu.com/api/4/news/latest');
      console.log(this.props.themeid);
      this.props.addprogress();
      let response = this.props.themeid
        ? (await fetch('https://news-at.zhihu.com/api/4/theme/' + this.props.themeid))
        : (await fetch('https://news-at.zhihu.com/api/4/news/latest'));
      let data = await response.json();
      console.log(data);
      this.props.delprogress();
      this.setState({list: data.stories});
    } catch (e) {
      console.log("Oops, error", e);
      this.props.delprogress();
    }

  }

  render() {
    return (
      <ScrollView style={styles.mainpart}>
        {this.state.list.map((li) => {
          return <TouchableHighlight style={styles.touchblock} underlayColor="#eaeaea" key={li.id} onPress={(e) => {
            this.props.selectFunc(li.id)
          }}>
            <View style={styles.block}>
              {li.images
                ? <Image style={styles.img} source={{
                    uri: li.images[0]
                  }}></Image>
                : false}
              <Text style={styles.text}>{li.title}</Text>
            </View>
          </TouchableHighlight>;

        })
}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  mainpart: {
    flex: 1,
    // height: 10,
    // top:60,
    width: '100%',
    backgroundColor: '#efefef',
    padding: 10
  },
  touchblock: {
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#f4f4f4',
    overflow: 'hidden',
    padding:2
  }
  ,
  block: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 5
  },
  text: {
    flex: 1,
    fontSize: 24,
    textAlign: 'left',
    padding: 5,
    marginLeft:2
  }
});
export default MainPart;
