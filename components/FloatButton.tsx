import { Pressable, StyleSheet, Text } from 'react-native';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { NavigationContainerRef, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';

type Props = {
  navigationRef: NavigationContainerRef<ReactNavigation.RootParamList> | null;
};

export function FloatButton({ navigationRef }: Props) {
  const [key, setKey] = useState<string | undefined>();
  useEffect(() => {
    navigationRef?.addListener('state', () => {
      setKey(navigationRef.getCurrentRoute()?.name);
    });
  }, [navigationRef]);

  return (
    <Pressable
      onPress={() => {
        // setTimesPressed((current) => current + 1);
      }}
      style={({ pressed }) => [pressed ? styles.pressed : styles.default, styles.button]}
    >
      {key === 'Message' ? (
        <MaterialCommunityIcons name="pencil-box-outline" size={24} color={Colors.common.white} />
      ) : (
        <Entypo name="pencil" size={24} color={Colors.common.white} />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.common.twitter,
    shadowColor: Colors.common.black,
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
