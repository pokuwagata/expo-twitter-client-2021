import { RootTabScreenProps } from '../types';
import { View, Text } from '../components/Themed';
import { Button, Pressable, TextInput } from 'react-native';
import { useState } from 'react';
import { colors } from '../constants/Colors';

export default function TweetEditScreen({ navigation }: RootTabScreenProps<any>) {
  const [value, onChangeText] = useState('');

  return (
    <View style={{ flex: 1, paddingHorizontal: 10 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 10,
        }}
      >
        <Pressable onPress={() => navigation.goBack()} style={{ marginRight: 15 }}>
          <Text style={{ color: colors.twitter, fontSize: 16 }}>キャンセル</Text>
        </Pressable>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Pressable onPress={() => navigation.goBack()} style={{ marginRight: 15 }}>
            <Text style={{ color: colors.twitter, fontSize: 16 }} allowFontScaling={false}>
              下書き
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: colors.twitter,
              borderRadius: 17,
              paddingHorizontal: 10,
              alignItems: 'center',
              justifyContent: 'center',
              height: 35,
            }}
          >
            <Text style={{ color: colors.white, fontSize: 16 }} allowFontScaling={false}>
              ツイートする
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            marginRight: 10,
            backgroundColor: colors.gray[600],
          }}
        />
        <TextInput
          multiline
          numberOfLines={4}
          onChangeText={(text) => onChangeText(text)}
          value={value}
          style={{ flex: 1, fontSize: 20 }}
          showSoftInputOnFocus
          placeholder="いまどうしてる？"
          placeholderTextColor={colors.gray[500]}
        />
      </View>
    </View>
  );
}
