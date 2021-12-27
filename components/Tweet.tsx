import { StyleSheet, Image } from 'react-native';
import Colors, { colors } from '../constants/Colors';

import { Text, View } from './Themed';
import { Feather, AntDesign, Entypo } from '@expo/vector-icons';
import useColorScheme from '../hooks/useColorScheme';

type Props = {
  displayName: string;
  userName: string;
  time: number;
  text: string;
  imagePath?: string;
  messageCount: number;
  retweetCount: number;
  likeCount: number;
};
export default function Tweet({
  displayName,
  userName,
  time,
  text,
  imagePath,
  messageCount,
  retweetCount,
  likeCount,
}: Props) {
  const colorScheme = useColorScheme();
  const scheme = Colors[colorScheme];
  const iconColor = scheme.tweet.buttonIcon;

  return (
    <View style={[styles.container, { borderBottomColor: scheme.tweet.border }]}>
      <View style={styles.userIcon} />
      <View style={styles.tweet}>
        <View style={styles.header}>
          <View style={styles.userNames}>
            <Text numberOfLines={1} style={styles.displayName}>
              {displayName}
            </Text>
            <Text numberOfLines={1} style={styles.userName}>
              {userName}
            </Text>
            <Text style={styles.time}>{time}分</Text>
          </View>
          <View style={styles.right}>
            <Entypo
              name="dots-three-horizontal"
              size={20}
              color={colors.gray[400]}
              style={styles.dots}
            />
          </View>
        </View>
        <Text style={styles.text}>{text}</Text>
        {imagePath && <Image style={styles.image} source={{ uri: imagePath }} />}
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Feather name="message-circle" size={20} color={iconColor} />
            {messageCount > 0 && (
              <Text allowFontScaling={false} style={styles.buttonText}>
                {messageCount}
              </Text>
            )}
          </View>
          <View style={styles.button}>
            <AntDesign name="retweet" size={20} color={iconColor} />
            {retweetCount > 0 && (
              <Text allowFontScaling={false} style={styles.buttonText}>
                {retweetCount}
              </Text>
            )}
          </View>
          <View style={styles.button}>
            <AntDesign name="hearto" size={20} color={iconColor} />
            {likeCount > 0 && (
              <Text allowFontScaling={false} style={styles.buttonText}>
                {likeCount}
              </Text>
            )}
          </View>
          <View style={styles.button}>
            <Entypo name="share-alternative" size={20} color={iconColor} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  userIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 5,
    backgroundColor: colors.gray[600],
  },
  tweet: {
    flex: 1,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  userNames: {
    flexDirection: 'row',
    flexShrink: 1,
    alignItems: 'center',
  },
  displayName: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingRight: 5,
  },
  userName: {
    fontSize: 16,
    color: colors.gray[400],
    flexShrink: 1,
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flexBasis: 30,
    flexShrink: 0,
  },
  time: {
    fontSize: 16,
    color: colors.gray[400],
    paddingLeft: 5,
    flexShrink: 1,
  },
  dots: {
    paddingLeft: 10,
  },
  text: {
    fontSize: 18,
  },
  image: {
    maxWidth: '100%',
    height: 200,
    marginVertical: 10,
    borderRadius: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    flexBasis: 50,
  },
  buttonText: {
    paddingLeft: 10,
    color: colors.gray[500],
  },
});
