import { RootStackProps } from '../types';
import { View } from '../components/Themed';
import { Text } from 'react-native';

export default function ImageViewScreen({ navigation }: RootStackProps<'ImageView'>) {
  return (
    <View>
      <Text>test</Text>
    </View>
  );
}
