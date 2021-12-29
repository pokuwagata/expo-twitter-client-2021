/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { DrawerScreenProps } from '@react-navigation/drawer';

export type RootStackParamList = {
  Drawer: undefined;
  TweetEdit: undefined;
  NotFound: undefined;
};

export type RootStackProps<Screen extends keyof RootStackParamList> = StackScreenProps<
  RootStackParamList,
  Screen
>;

export type DrawerNavigatorParamList = {
  Root: BottomTabScreenProps<BottomTabParamList>;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Notice: undefined;
  Message: undefined;
};

export type DrawerNavigatorScreenProps = CompositeScreenProps<
  DrawerScreenProps<DrawerNavigatorParamList, 'Root'>,
  StackScreenProps<RootStackParamList>
>;

export type BottomTabScreenCustomProps<Screen extends keyof BottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabParamList, Screen>,
    DrawerNavigatorScreenProps
  >;
