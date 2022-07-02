import { StyleSheet } from 'react-native';

import EditScreenInfo from '../shared/EditScreenInfo';
import { Text, View } from '../shared/Themed';
import { RootTabScreenProps } from '../types';

export default function SubmitScreen({ navigation }: RootTabScreenProps<'Submit'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Submit</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
