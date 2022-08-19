import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';
import PostsScreen from './screens/mainScreen/PostsScreen';
import ProfileScreen from './screens/mainScreen/ProfileScreen';
import CreateScreen from './screens/mainScreen/CreateScreen';

//icons
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';




const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
    if(!isAuth){
      return (
      <AuthStack.Navigator>
      <AuthStack.Screen
        options={{
          headerShown: false
        }} 
        name='Login'
        component={LoginScreen}/>
      <AuthStack.Screen 
        options={{
        headerShown: false
        }}
        name='Register'
        component={RegisterScreen}/>
      </AuthStack.Navigator> 
      )
    }
    return(
      <MainTab.Navigator tabBarOptions={{showLabel: true}}>
      <MainTab.Screen 
        options={{
          tabBarIcon:({focused, size, color}) => {
           return <MaterialCommunityIcons name="postage-stamp" size={size} color={color} />
          }
        }}
        name='Posts'
        component={PostsScreen}
      />
      <MainTab.Screen 
        options={{
          tabBarIcon:({focused, size, color}) => {
            return <AntDesign name="pluscircleo" size={size} color={color} />
          }
        }}
        name='Create'
        component={CreateScreen}
      />
      <MainTab.Screen
        options={{
          tabBarIcon:({focused, size, color}) => {
            return <AntDesign name="profile" size={size} color={color} />
          }
        }} 
        name='Profile'
        component={ProfileScreen}
      />
    </MainTab.Navigator>
    )
  
  }
  