import React, { useState } from 'react';
import { RefreshControl, Image, View, Text, StyleSheet } from 'react-native';
import Comment from "./Comment";
import CommentInput from './CommentInput';
import moment from 'moment';

export default Post = (props) => {
  const [post, setPost] = useState({
    content: "Very proud of my new PR!",
    created: "2020/11/07",
    achievment: "benched 100kg for 5 reps",
    user: {
      name: "Viktor Todorov",
      avatar: "https://www.ruf.rice.edu/~power/franco.jpg"
    }
  })
  const [comments, setComments] = useState([{
    content: "Good work brazzer and don't stop lifting.",
    created: "2020/11/08",
    user: {
      name: "Vasil Hadjiev",
      avatar: "https://i1.sndcdn.com/avatars-000715800235-f5z5kc-t500x500.jpg"
    }
  }]);

  return (
    <View style={styles.postWrapper}>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          {post.user.avatar && <Image
            resizeMode='contain'
            style={styles.avatar}
            source={{ uri: post.user.avatar }}
          />}

        </View>
        <View style={styles.contentContainer}>
          <Text>
            <Text style={[styles.mainText, styles.name]}>{post.user.name}</Text>
            {' '}
            <Text style={styles.mainText}>{post.achievment}</Text>
          </Text>
          <Text style={styles.contentText}>{post.content}</Text>
          <Text style={[styles.text, styles.created]}>{
              moment(post.created).fromNow()
            }</Text>
        </View>
      </View>
      <View style={styles.container}>
        {comments.map((comment, index) => <Comment key={index} comment={comment}/> )}
      </View>
      <CommentInput submitComment={props.submitComment}/>
    </View>
  );

}

const styles = StyleSheet.create({
  postWrapper: {
    // backgroundColor: "rgb(46, 137,255)",
    borderRadius: 10,
  },
  container: {
    flexDirection: 'row',
    marginHorizontal: 25
  },
  avatarContainer: {
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 24,
    paddingTop: 10,
    width: 10,
  },
  contentContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#EEE',
    padding: 5,
  },
  avatar: {
    borderWidth: 1,
    borderColor: '#EEE',
    borderRadius: 13,
    width: 40,
    height: 40,
  },
  text: {
    color: '#000',
    fontFamily: 'OpenSans_400Regular',
    fontSize: 15,
  },
  mainText: {
    color: '#000',
    fontFamily: 'OpenSans_400Regular',
    fontSize: 17,
  },
  contentText: {
    color: '#000',
    fontFamily: 'OpenSans_400Regular',
    fontSize: 17,
    marginTop: 5
  },
  name: {
    fontWeight: 'bold',
  },
  created: {
    color: '#BBB',
  },
});