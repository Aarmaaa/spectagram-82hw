import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView, Platform, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import PostCard from './PostCard'; 

export default class FeedScreen extends React.Component {

  keyExtractor=() => {

  }

  renderItem = () => {
    <PostCard
    
    />
  }

  render(){
        return (
          <View style={styles.container} >
            <SafeAreaView style={styles.safeArea} />
            <View style={styles.appTitleContainer} >
              <View style={styles.appIcon} >
                <Image
                source={require("../assets/logo.png")}
                style={styles.icon}
                />
              </View>
              <View style={styles.appTitle} >
                <Text style={styles.appTitleText} >Spectagram</Text>
              </View>
            </View>
            <View style={styles.cardContainer} >
              <FlatList
              keyExtractor={this.keyExtractor}
              data={posts}
              renderItem={this.renderItem}
              />
            </View>
          </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  safeArea:{
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35)
  },
  appTitleContainer:{
    flex:0.07,
    flexDirection:'row',
  },
  appIcon:{
    flex:0.2,
    justifyContent:'center',
    alignItems:'center',
  },
  icon:{
    width:'100%',
    height:"100%",
    resizeMode:"contain"
  },
  appTitle:{
    flex:0.8,
    justifyContent:'center'
  },
  appTitleText:{
    color:'white',
    fontSize: RFValue(28),
  },
  cardContainer:{
    flex: 0.85
  }

});
