/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  FontAwesome,
  MaterialIcons,
  Entypo,
  AntDesign,
  Feather,
  SimpleLineIcons,
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import { FloatButton } from '../components/FloatButton';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, DrawerNavigatorParamList, RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import Menu from '../components/Menu';
import TweetEditScreen from '../screens/TweetEditScreen';
import { View } from '../components/Themed';
import { spacing } from '../constants/Spacing';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const navigationRef = useNavigationContainerRef();

  return (
    <>
      <NavigationContainer
        linking={LinkingConfiguration}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        ref={navigationRef}
      >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Drawer" component={DrawerNavigator} />
          <Stack.Screen
            name="TweetEdit"
            component={TweetEditScreen}
            options={{
              ...TransitionPresets.ModalSlideFromBottomIOS,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <FloatButton navigationRef={navigationRef} />
    </>
  );
}

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<DrawerNavigatorParamList>();

function DrawerNavigator() {
  const scheme = Colors[useColorScheme()];

  return (
    <Drawer.Navigator
      initialRouteName="Root"
      drawerContent={(props) => <Menu {...props} />}
      screenOptions={{ drawerStyle: { backgroundColor: scheme.background } }}
    >
      <Drawer.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <>
      <BottomTab.Navigator
        initialRouteName="Home"
        screenOptions={({ navigation }) => ({
          tabBarActiveTintColor: Colors[colorScheme].tint,
          tabBarShowLabel: false,
          headerShown: true,
          headerStyle: {
            borderBottomColor: Colors[colorScheme].headerBottom,
            borderBottomWidth: 1,
          },
          header: () => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Pressable onPress={() => navigation.openDrawer()}>
                <MaterialIcons
                  name="account-circle"
                  size={25}
                  color={Colors[colorScheme].headerIcon}
                  style={{ marginLeft: spacing[2] }}
                />
              </Pressable>
              <FontAwesome name="twitter" size={25} color={Colors[colorScheme].headerIcon} />
              <Pressable
                // onPress={() => navigation.navigate('Modal')}
                style={({ pressed }) => ({
                  opacity: pressed ? 0.5 : 1,
                })}
              >
                <FontAwesome
                  name="star"
                  size={25}
                  color={Colors[colorScheme].headerIcon}
                  style={{ marginRight: spacing[2] }}
                />
              </Pressable>
            </View>
          ),
        })}
      >
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={() => ({
            title: 'home',
            tabBarIcon: ({ focused }) => (
              <Entypo
                name="home"
                size={25}
                color={
                  focused ? Colors[colorScheme].tabIconSelected : Colors[colorScheme].tabIconDefault
                }
              />
            ),
          })}
        />
        <BottomTab.Screen
          name="Search"
          component={TabTwoScreen}
          options={{
            title: 'search',
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="search1"
                size={25}
                color={
                  focused ? Colors[colorScheme].tabIconSelected : Colors[colorScheme].tabIconDefault
                }
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Notice"
          component={TabTwoScreen}
          options={{
            title: 'notice',
            tabBarIcon: ({ focused }) => (
              <Feather
                name="bell"
                size={25}
                color={
                  focused ? Colors[colorScheme].tabIconSelected : Colors[colorScheme].tabIconDefault
                }
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Message"
          key="Message"
          component={TabTwoScreen}
          options={{
            title: 'message',
            tabBarIcon: ({ focused }) => (
              <SimpleLineIcons
                name="envelope-letter"
                size={25}
                color={
                  focused ? Colors[colorScheme].tabIconSelected : Colors[colorScheme].tabIconDefault
                }
              />
            ),
          }}
        />
      </BottomTab.Navigator>
    </>
  );
}
