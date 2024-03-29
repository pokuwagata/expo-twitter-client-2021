import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';
import Colors, { colors } from '../constants/Colors';
import { Entypo, MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons';
import useColorScheme from '../hooks/useColorScheme';
import Typography from '../constants/Typography';
import { spacing } from '../constants/Spacing';

export default function MenuScreen({ navigation }: any) {
  const scheme = Colors[useColorScheme()];
  const itemIconStyle = [styles.itemIcon, { color: scheme.drawer.icon }];

  return (
    <>
      <View
        style={{
          marginVertical: spacing[4],
          paddingHorizontal: spacing[2],
          justifyContent: 'space-between',
          flex: 1,
          backgroundColor: scheme.background,
        }}
      >
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                marginRight: spacing[1],
                backgroundColor: colors.gray[600],
              }}
            />
            <View
              style={{
                flexDirection: 'row',
              }}
            >
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  marginRight: spacing[3],
                  backgroundColor: colors.gray[600],
                }}
              />
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  borderColor: colors.twitter[500],
                  borderWidth: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Entypo name="dots-three-horizontal" size={20} color={colors.twitter[500]} />
              </View>
            </View>
          </View>
          <View style={{ marginVertical: spacing[2] }}>
            <Text style={{ fontWeight: 'bold', fontSize: Typography.fontSizes.lg }}>泉鏡花</Text>
            <Text style={{ color: scheme.drawer.grayText }}>@izumi_kyoka</Text>
          </View>
          <View style={{ flexDirection: 'row', marginBottom: spacing[6] }}>
            <View style={{ flexDirection: 'row', marginRight: spacing[2] }}>
              <Text style={styles.followCount}>44</Text>
              <Text style={[styles.followLabel, { color: scheme.drawer.grayText }]}>フォロー</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.followCount}>101</Text>
              <Text style={[styles.followLabel, { color: scheme.drawer.grayText }]}>
                フォロワー
              </Text>
            </View>
          </View>
          <View style={styles.item}>
            <MaterialCommunityIcons name="account" style={itemIconStyle} />
            <Text style={styles.itemIconLabel}>プロフィール</Text>
          </View>
          <View style={styles.item}>
            <AntDesign name="filetext1" style={itemIconStyle} />
            <Text style={styles.itemIconLabel}>リスト</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Entypo name="light-bulb" style={styles.bottomIcon} />
          <Ionicons name="ios-qr-code-outline" style={styles.bottomIcon} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  followCount: {
    marginRight: spacing[1],
    fontSize: Typography.fontSizes.sm,
    fontWeight: 'bold',
  },
  followLabel: {
    fontSize: Typography.fontSizes.sm,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing[4],
  },
  itemIcon: {
    fontSize: 30,
    marginRight: spacing[2],
    color: colors.gray[400],
  },
  itemIconLabel: {
    fontSize: Typography.fontSizes.lg,
  },
  bottomIcon: {
    fontSize: 30,
    color: colors.twitter[500],
  },
});
