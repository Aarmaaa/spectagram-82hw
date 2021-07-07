import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import ProfileScreen from '../screens/Profile';

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    return(
        <DrawerNavigator>
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="ProflieScreen" component={ProfileScreen} />
        </DrawerNavigator>
    )
}

export default DrawerNavigator;