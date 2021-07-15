import React from 'react';
import { StyleSheet } from 'react-native';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from "react-native-ionicons";
import { RFValue } from 'react-native-responsive-fontsize';

import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';

const Tab = createMaterialBottomTabNavigator()

const BottomTab = () => {
    return(
        <Tab.Navigator
        labeled={false}
        barStyle={styles.bottomTabStyle}
        activeTintColor={"tomato"}
        inactiveTintColor={"gray"}
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                var iconName;
                if(route.name === 'Feed'){
                    iconName = focused ? 'book' : 'book-outline';
                }
                else if(route.name === "CreatePost"){
                    iconName = focused ? 'create' : 'create-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} style={styles.icons} />
            }
        })}

        >
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="CreatePost" component={CreatePost} />
      
        </Tab.Navigator>
    )
}

export default BottomTab;

const styles = StyleSheet.create({
    bottomTabStyle:{
      backgroundColor:"#010347",
      height:"8%",
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      position:"absolute",
      overflow:'hidden'
    },
    icons:{
      width:RFValue(30),
      height:RFValue(30),
    }
  })