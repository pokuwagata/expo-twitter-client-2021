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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import { FloatButton } from '../components/FloatButton';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Colors, { colors } from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/HomeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import Menu from '../components/Menu';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const navigationRef = useNavigationContainerRef();

  return (
    <>
      <NavigationContainer
        linking={LinkingConfiguration}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        ref={navigationRef}
      >
        <RootNavigator />
      </NavigationContainer>
      <FloatButton navigationRef={navigationRef} />
    </>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

function RootNavigator() {
  const scheme = Colors[useColorScheme()];

  return (
    <Drawer.Navigator
      initialRouteName="Root"
      drawerContent={(props) => <Menu {...props} />}
      screenOptions={{ drawerStyle: { backgroundColor: scheme.background } }}
    >
      <Drawer.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      {/* <Drawer.Screen name="Menu" component={MenuScreen} /> */}
      {/* <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group> */}
    </Drawer.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <>
      <BottomTab.Navigator
        initialRouteName="Home"
        screenOptions={({ navigation }) => ({
          tabBarActiveTintColor: Colors[colorScheme].tint,
          tabBarShowLabel: false,
          headerStyle: {
            borderBottomColor: Colors[colorScheme].headerBottom,
            borderBottomWidth: 1,
          },
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <MaterialIcons
                name="account-circle"
                size={25}
                color={Colors[colorScheme].headerIcon}
                style={{ marginLeft: 10 }}
              />
            </Pressable>
          ),
          headerTitle: () => (
            <FontAwesome name="twitter" size={25} color={Colors[colorScheme].headerIcon} />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="star"
                size={25}
                color={Colors[colorScheme].headerIcon}
                style={{ marginRight: 10 }}
              />
            </Pressable>
          ),
        })}
      >
        <BottomTab.Screen
          name="Home"
          component={TabOneScreen}
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
