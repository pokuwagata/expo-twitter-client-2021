import { View } from './Themed';
import { Button } from 'react-native';

export default function MenuScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.navigate('Notifications')} title="Go to notifications" />
    </View>
  );
}
