import { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Text, View } from '../../shared/Themed';
import { RootTabScreenProps } from '../../types';
import tw from 'twrnc';

export default function ProfileScreen({ navigation }: RootTabScreenProps<'Profile'>) {
  const [user, setUser] = useState();

  const handleLogin = (event: any) => {
    event.preventDefault();
    // redirect to reddit authorization page
    alert('Login pressed');
  };

  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text style={styles.title}>Profile</Text>
      {user ? (
        <Text>You are logged in!</Text>
      ) : (
        <View style={tw`text-center`}>
          <Text style={tw`mb-4`}>Login to view your profile.</Text>

          <Pressable style={tw`bg-indigo-800 text-white rounded-md p-4 text-center`} onPress={handleLogin}>
            <Text style={tw`text-center text-white`}>Login with Reddit</Text>
          </Pressable>
        </View>
      )}
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
