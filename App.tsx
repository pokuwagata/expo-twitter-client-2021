import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import Colors from './constants/Colors';
import { View } from './components/Themed';
import { spacing } from './constants/Spacing';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors[colorScheme].background }}>
          <View style={{ marginBottom: spacing[3] }}>
            <StatusBar />
          </View>
          <Navigation colorScheme={colorScheme} />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}
