import { View, Text } from '../components/Themed';
import { Pressable, TextInput } from 'react-native';
import { useState } from 'react';
import { colors } from '../constants/Colors';
import Typography from '../constants/Typography';
import { spacing } from '../constants/Spacing';
import { RootStackProps } from '../types';

export default function TweetEditScreen({ navigation }: RootStackProps<'TweetEdit'>) {
  const [value, onChangeText] = useState('');

  return (
    <View style={{ flex: 1, paddingHorizontal: spacing[2] }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: spacing[2],
        }}
      >
        <Pressable onPress={() => navigation.goBack()} style={{ marginRight: spacing[3] }}>
          <Text style={{ color: colors.twitter[500], fontSize: Typography.fontSizes.md }}>
            キャンセル
          </Text>
        </Pressable>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Pressable onPress={() => navigation.goBack()} style={{ marginRight: spacing[3] }}>
            <Text
              style={{ color: colors.twitter[500], fontSize: Typography.fontSizes.md }}
              allowFontScaling={false}
            >
              下書き
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: colors.twitter[500],
              borderRadius: 17,
              paddingHorizontal: spacing[2],
              alignItems: 'center',
              justifyContent: 'center',
              height: 35,
            }}
          >
            <Text
              style={{ color: colors.white, fontSize: Typography.fontSizes.md }}
              allowFontScaling={false}
            >
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
            marginRight: spacing[2],
            backgroundColor: colors.gray[600],
          }}
        />
        <TextInput
          multiline
          numberOfLines={4}
          onChangeText={(text) => onChangeText(text)}
          value={value}
          style={{ flex: 1, fontSize: Typography.fontSizes.lg }}
          autoFocus
          showSoftInputOnFocus
          placeholder="いまどうしてる？"
          placeholderTextColor={colors.gray[500]}
        />
      </View>
    </View>
  );
}
