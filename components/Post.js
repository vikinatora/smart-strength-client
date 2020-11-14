import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Comment from "./Comment";
import CommentInput from './CommentInput';
import moment from 'moment';
import { FontAwesome5 } from '@expo/vector-icons'; 

export default Post = (props) => {
  const [post, setPost] = useState({
    content: "Very proud of my new PR!",
    created: "2020/11/07",
    achievment: "benched 100kg for 5 reps",
    likes: "5",
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
  const [showComments, setShowComments] = useState(false);
  

  const giveLike = () => {

  }
  
  const showHideComments = () => {
    showComments ? setShowComments(false) : setShowComments(true);
  }

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
            <Text style={styles.mainText}>
              {post.achievment}
              </Text>
          </Text>
          <Text style={[styles.text, styles.created]}>{moment(post.created).fromNow()}</Text>
          <Text style={styles.contentText}>
            {post.content}
          </Text>
          <Text style={[styles.text, styles.likeText]}>
            <Text> {post.likes} respects </Text> <Text>{comments.length} {comments.length > 1 ? "comments" : "comment"}</Text>
          </Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.likeButton}>
              <Text style={styles.button}>
                <FontAwesome5 size={18} name="dumbbell" color="white" /> Respect
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.likeButton} onPress={() => showHideComments()}>
              <Text style={styles.button}>
                <FontAwesome5 size={18} name="comment" color="white" /> Comment
              </Text>
            </TouchableOpacity>
          </View>
          {
            showComments
            ? <View>
                <CommentInput submitComment={props.submitComment}/>
                <View style={styles.commentsContainer}>
                    {comments.map((comment, index) => <Comment key={index} comment={comment}/> )}
                  </View>
              </View>
            : null
          }
          </View>
        </View>
      </View>
  );

}

const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5
  },
  postInfoContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  postWrapper: {
    borderRadius: 10,
  },
  likeButton: {
    backgroundColor: "#3b5998",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginRight: 10,
    width: "50%",
  },
  likeText: {
    paddingRight: 50
  },
  commentsText: {
    justifyContent: "flex-end"
  },  
  button: {
    fontSize: 18,
    color: "white",
    fontFamily: 'OpenSans_400Regular',
    textAlign: "center"
  },
  container: {
    flexDirection: 'row',
    marginHorizontal: 15
  },
  commentsContainer: {
    flexDirection: 'row',
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
    marginVertical: 5
  },
  name: {
    fontWeight: 'bold',
  },
  created: {
    color: '#BBB',
    fontSize: 13,

  },
});