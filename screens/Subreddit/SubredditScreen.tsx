import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native';
import { RootTabScreenProps } from '../../types';
import tw from 'twrnc';

import { get } from 'superagent';
import SubmissionItem from './SubmissionItem';
import { SafeAreaView } from 'react-native-safe-area-context';
import { API } from '../../constants/Config';

const SubredditScreen = ({ navigation }: RootTabScreenProps<'Subreddit'>) => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const result = await get(`${API}/r/all`);
        setSubmissions(result.body);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSubmissions();
  }, []);

  return (
    <SafeAreaView>
      <View style={tw`px-2`}>
        <Text>Subreddit</Text>
      </View>
      <ScrollView style={tw`px-2`}>
        {submissions.length ? submissions.map((item: any, i: number) => <SubmissionItem nav={navigation} submission={item} key={i} />) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SubredditScreen;
