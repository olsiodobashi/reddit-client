import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import { get } from 'superagent';
import SubmissionItem from '../components/Subreddit/SubmissionItem';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const result = await get('https://reddit.com/r/all.json');
        setSubmissions(result.body.data.children);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSubmissions();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Home</Text>

      {submissions.length ? submissions.map((item: any, i: number) => <SubmissionItem nav={navigation} submission={item.data} key={i} />) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
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
