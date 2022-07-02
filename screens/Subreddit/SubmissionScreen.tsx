import { useEffect, useState } from 'react';
import { Text, View } from '../../shared/Themed';
import tw from 'twrnc';
import { get } from 'superagent';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Pressable, ScrollView } from 'react-native';
import { Screen } from '../../navigation/screen.enum';
import ItemImage from '../Media/ItemImage';

const SubmissionScreen = ({ navigation, route }: any) => {
  const [submissionId, setSubmissionId] = useState(route.params.id);
  const [submission, setSubmission] = useState<any>();

  useEffect(() => {
    const getSubmission = async () => {
      const result = await get(`https://reddit.com/comments/${submissionId}.json`);
      if (result.body) {
        setSubmission(result.body[0].data.children[0].data);
      }
    };

    getSubmission();
  }, [submissionId]);

  if (!submission) {
    return (
      <SafeAreaView>
        <View style={tw`flex items-center`}>
          <Text>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView style={tw`dark:bg-zinc-900 px-2`}>
        {submission.preview ? <ItemImage preview={submission.preview} /> : null}
        <Button title="< Back" onPress={() => navigation.navigate(Screen.HOME)}></Button>
        <Text style={tw`mb-4`}>Active submission: {submissionId}</Text>
        <Text style={tw`text-lg dark:text-white`}>{submission?.title}</Text>
        <Text>{submission?.description}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SubmissionScreen;
