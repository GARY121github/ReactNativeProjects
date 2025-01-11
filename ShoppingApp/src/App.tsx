import React from 'react'
import '../gesture-handler';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import Home from './screen/Home';
import Details from './screen/Details';
import Page1 from './screen/Page1';
import Page2 from './screen/Page2';
import PageX from './screen/PageX';
import PageY from './screen/PageY';

export type RootStackPramList = {
  Home: undefined;
  Details: { product: Product }
}

export type RootTabPramList = {
  Page1: undefined;
  Page2: { product: Product }
}

export type RootDrawerParamList = {
  PageX: undefined;
  PageY: { product: Product }
}

const Stack = createNativeStackNavigator<RootStackPramList>();
const Tab = createBottomTabNavigator<RootTabPramList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={
            {
              title: 'Trending Products'
            }
          }
        />
        <Stack.Screen
          name='Details'
          component={Details}
          options={
            {
              title: 'Product Details'
            }
          }
        />
      </Stack.Navigator> */}
      {/* <Tab.Navigator initialRouteName='Page1'>
        <Tab.Screen
        name='Page1'
        component={Page1}
        options={
          {
            title : 'Page 1'
          }
        }
        />
        <Tab.Screen
        name='Page2'
        component={Page2}
        options={
          {
            title : 'Page 2'
          }
        }
         />
      </Tab.Navigator> */}
      <Drawer.Navigator initialRouteName='PageX'>
        <Drawer.Screen
          name='PageX'
          component={PageX}
          options={
            {
              title: 'Page X'
            }
          }
        />
        <Drawer.Screen
        name='PageY'
        component={PageY}
        options={
          {
            title: 'Page Y'
          }
        }
         />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}