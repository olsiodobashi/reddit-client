import React from 'react';
import { Pressable, Text, View } from 'react-native';
import tw from 'twrnc';

const SubmissionItem = ({ submission, nav }: any) => {
  return (
    <Pressable onPress={() => nav.push('Submission', { id: submission.id })}>
      <View style={tw`mb-2 p-2 rounded-md shadow-md bg-zinc-800`}>
        <Text style={tw`text-white text-xs mb-2`}>
          u/{submission.author} &bull; r/{submission.subreddit}{' '}
        </Text>
        <Text style={tw`text-white`}>{submission?.title}</Text>
      </View>
    </Pressable>
  );
};

export default SubmissionItem;
