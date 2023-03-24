import Reacr from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from './screen/DrawerScreens/HomeScreen';
import SettingScreen from './screen/DrawerScreens/SettingScreen';
import NavigationDrawerHeader from './screen/NavigationDrawerHeader';
import CustomSidebarMenu from './screen/CustomSidebarMenu';

//Import Screens

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const DrawerNavigationRoutes =(props) =>{
    return(
        <Drawer.Navigator
        drawerContentOptions={{
            activeTintColor: '#cee1f2',
            color: '#cee1f2',
            itemStyle: {marginVertical: 5, color: 'white'},
            labelStyle: {
              color: '#d8d8d8',
            },
          }}
          screenOptions={{headerShown: false}}
          drawerContent={CustomSidebarMenu}
          initialRouteName="homeScreen"
          >

<Drawer.Screen
        name="homeScreen"
        options={{drawerLabel: 'Home Screen'}}
        component={homeScreenStack}
      />
      
      <Drawer.Screen
        name="settingScreenStack"
        options={{drawerLabel: 'Setting Screen'}}
        component={settingScreenStack}
      />

        </Drawer.Navigator>
    )

}

const homeScreenStack = ({navigation}) => {
    return (
      <Stack.Navigator 
      initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Home', //Set Header Title
            headerLeft: () => (
              <NavigationDrawerHeader navigationProps={navigation} />
            ),
            headerStyle: {
              backgroundColor: '#307ecc', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    );
  };
  
  const settingScreenStack = ({navigation}) => {
    return (
      <Stack.Navigator
        initialRouteName="SettingScreen"
        screenOptions={{
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}>
        <Stack.Screen
          name="SettingScreen"
          component={SettingScreen}
          options={{
            title: 'Settings', //Set Header Title
          }}
        />
      </Stack.Navigator>
    );
  };

export default DrawerNavigationRoutes;