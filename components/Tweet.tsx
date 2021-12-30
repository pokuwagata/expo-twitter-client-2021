import { StyleSheet, Image, TouchableOpacity, Pressable, Animated } from 'react-native';
import Colors, { colors } from '../constants/Colors';
import Typography from '../constants/Typography';

import { Text, View } from './Themed';
import { Feather, AntDesign, Entypo } from '@expo/vector-icons';
import useColorScheme from '../hooks/useColorScheme';
import { spacing } from '../constants/Spacing';
import { useRef, useState } from 'react';
import Layout from '../constants/Layout';

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

  const [imageShown, setImageShown] = useState(false);
  const animatedImageXY = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const animatedImageScaleXY = useRef(new Animated.ValueXY({ x: 1, y: 1 })).current;
  const imageRef = useRef<any>();

  const showImage = () => {
    setImageShown(true);
    const screenHeight = Layout.window.height;
    const screenWidth = Layout.window.width;

    imageRef.current.measureInWindow((x, y, width, height) => {
      Animated.parallel([
        Animated.timing(animatedImageXY, {
          toValue: {
            x: screenWidth / 2 - width / 2 - x,
            y: screenHeight / 2 - height / 2 - y,
          },
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(animatedImageScaleXY, {
          toValue: { x: screenWidth / width, y: 1.5 },
          duration: 0.5,
          useNativeDriver: false,
        }),
      ]).start();
    });
  };

  return (
    <View
      style={[
        styles.container,
        { borderBottomColor: scheme.tweet.border, zIndex: imageShown ? 5 : undefined },
      ]}
    >
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
        {imagePath && (
          <Pressable onPress={showImage} style={{ zIndex: imageShown ? 5 : undefined }}>
            <Animated.Image
              ref={imageRef}
              style={[
                styles.image,
                {
                  transform: [
                    { translateX: animatedImageXY.x },
                    { translateY: animatedImageXY.y },
                    { scaleX: animatedImageScaleXY.x },
                    { scaleY: animatedImageScaleXY.y },
                  ],
                },
              ]}
              source={{ uri: imagePath }}
            />
          </Pressable>
        )}
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
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
    borderBottomWidth: 1,
  },
  userIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: spacing[1],
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
    fontSize: Typography.fontSizes.md,
    fontWeight: 'bold',
    paddingRight: spacing[1],
  },
  userName: {
    fontSize: Typography.fontSizes.md,
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
    fontSize: Typography.fontSizes.md,
    color: colors.gray[400],
    paddingLeft: spacing[1],
    flexShrink: 1,
  },
  dots: {
    paddingLeft: spacing[2],
  },
  text: {
    fontSize: Typography.fontSizes.lg,
  },
  image: {
    maxWidth: '100%',
    height: 200,
    marginVertical: spacing[2],
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
    paddingLeft: spacing[2],
    color: colors.gray[500],
  },
});
