import { useEffect, useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import tw from 'twrnc';

const SubmissionScreen = ({ navigation }: any) => {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`mb-4`}>Login to view your profile.</Text>
    </View>
  );
};

export default SubmissionScreen;
