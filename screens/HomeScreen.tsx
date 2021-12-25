import { StyleSheet, Image } from 'react-native';
import Colors from '../constants/Colors';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { Feather, AntDesign, Entypo } from '@expo/vector-icons';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <View style={styles.userIcon} />
      <View style={styles.tweet}>
        <View style={styles.header}>
          <View style={styles.userNames}>
            <Text style={styles.userName}>食楽園〜幸福に空腹を満たす</Text>
            <Text style={styles.time}>28分</Text>
          </View>
          <Entypo name="dots-three-horizontal" size={20} color={Colors.common.gray3} />
        </View>
        <Text style={styles.text}>ポークスペアリブ</Text>
        <Image
          style={styles.image}
          source={{ uri: 'https://pbs.twimg.com/media/Ej-sbTJVcAIh0_n?format=jpg&name=large' }}
        />
        {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Feather name="message-circle" size={20} color="black" />
          </View>
          <View style={styles.button}>
            <AntDesign name="retweet" size={20} color="black" />
            <Text style={styles.buttonText}>21</Text>
          </View>
          <View style={styles.button}>
            <AntDesign name="hearto" size={20} color="black" />
            <Text style={styles.buttonText}>118</Text>
          </View>
          <View style={styles.button}>
            <Entypo name="share-alternative" size={20} color="black" />
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
  },
  userIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.common.gray2,
    marginRight: 5,
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
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingRight: 5,
  },
  time: {
    fontSize: 16,
    color: Colors.common.gray3,
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
  },
});
