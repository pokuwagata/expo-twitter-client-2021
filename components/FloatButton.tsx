import { Pressable, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Colors, { colors } from '../constants/Colors';
import { NavigationContainerRef } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import useColorScheme from '../hooks/useColorScheme';

type Props = {
  navigationRef: NavigationContainerRef<ReactNavigation.RootParamList> | null;
};

export function FloatButton({ navigationRef }: Props) {
  const colorScheme = useColorScheme();
  const [screenName, setScreenName] = useState<string | undefined>();
  useEffect(() => {
    navigationRef?.addListener('state', () => {
      setScreenName(navigationRef.getCurrentRoute()?.name);
    });
  }, [navigationRef]);

  if (screenName === 'TweetEdit') return null;

  return (
    <Pressable
      onPress={() => {
        navigationRef?.navigate('TweetEdit');
        // setTimesPressed((current) => current + 1);
      }}
      style={({ pressed }) => [
        pressed ? styles.pressed : styles.default,
        styles.button,
        { backgroundColor: Colors[colorScheme].floatButton.bgColor },
      ]}
    >
      <Entypo name="pencil" size={24} color={Colors[colorScheme].floatButton.color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  default: {
    right: 10,
    bottom: 70,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  pressed: {
    right: 12,
    bottom: 72,
    width: 47,
    height: 47,
    borderRadius: 23,
  },
});
