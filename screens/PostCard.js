import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Ionicons from "react-native-ionicons";
import { RFValue } from 'react-native-responsive-fontsize';


export default class PostCard extends React.Component {
  render(){
        return (
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={styles.authorContainer}>
                    <View style={styles.authorImageContainer} >
                        <Image
                        source={require("../assets/profile_img.png")}
                        style={styles.profileImage}
                        />
                    </View>
                    <View style={styles.authorNameContainer}>
                        <Text style={styles.authorTextContainer} > {this.props.post.author} </Text>
                    </View>
                </View>
                <Image
                source={require('../assets/post.jpeg')}
                style={styles.postImage}
                />
                <View style={styles.captionContainer} >
                    <Text style={styles.captionText} > {this.props.post.caption} </Text>
                </View>
                <View style={styles.actionContainer} >
                    <View style={styles.likeButton} >
                        <Ionicons name="heart" size={RFValue(30)} color="white" />
                        <Text style={styles.likeText} >14k</Text>
                    </View>
                </View>
            </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
