import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import tw from 'twrnc';
import { RootTabScreenProps } from '../types';

import { get } from 'superagent';
import SubmissionItem from './Subreddit/SubmissionItem';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const result = await get('http://localhost:5001/reddit-client-2acf6/us-central1/api/all');
        setSubmissions(result.body.data.children);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSubmissions();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        {submissions.length ? submissions.map((item: any, i: number) => <SubmissionItem nav={navigation} submission={item.data} key={i} />) : null}
      </ScrollView>
    </SafeAreaView>
  );
}
