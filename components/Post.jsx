import React, { useEffect, useState } from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import moment from "moment";
import { FontAwesome5 } from "@expo/vector-icons";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
import postsService from "../services/postsService";
import { AsyncStorage } from "react-native";
import commentsService from "../services/commentsService";

export default Post = (props) => {
  let defaultAvatar = "https://www.ruf.rice.edu/~power/franco.jpg";
  const [showComments, setShowComments] = useState(false);
  const [likes, setLikes] = useState(props.post.likes);
  const [comments, setComments] = useState(props.post.comments);
  const [isLiked, setIsLiked] = useState(false);
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    const init = async () => {
      const userId = await AsyncStorage.getItem("userId");
      if (props.post.likes.indexOf(userId) >= 0) {
        setIsLiked(true);
      }
    }
    init()
  }, [])

  const likePost = async () => {
    const userId = await AsyncStorage.getItem("userId");
    let newLikes = JSON.parse(JSON.stringify(likes));
    newLikes.push(userId);
    setLikes(newLikes);
    setIsLiked(true);
    const success = await postsService.likePost(props.post.id, userId)
    if (!success) {
      newLikes = newLikes.filter(id => id != userId);
      setLikes(newLikes);
      setIsLiked(false);
    }
  }

  const unlikePost = async () => {
    const userId = await AsyncStorage.getItem("userId");
    let newLikes = JSON.parse(JSON.stringify(likes));
    newLikes = newLikes.filter(id => id != userId);
    setLikes(newLikes);
    setIsLiked(false);
    const success = await postsService.unlikePost(props.post.id, userId)
    if (!success) {
      newLikes.push(userId);
      setLikes(newLikes);
      setIsLiked(true);
    }

  }

  const submitComment = async () => {
    console.log("submitting");
    console.log(commentText);
    const userId = await AsyncStorage.getItem("userId");
    const newComment = await commentsService.add(props.post.id, userId, commentText);
    if (newComment) {
      setComments([...comments, newComment]);
    }
  }
  const showHideComments = () => {
    showComments ? setShowComments(false) : setShowComments(true);
  }

  return (
    <View style={styles.postWrapper}>
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          {defaultAvatar && <Image
            resizeMode='contain'
            style={styles.avatar}
            source={{ uri: props.post.author.avatar || defaultAvatar }}
          />}
        </View>
        <View style={styles.contentContainer}>
          <Text>
            <Text style={[styles.mainText, styles.name]}>{props.post.author.name}</Text>
            {' '}
            <Text style={styles.mainText}>
              {props.post.achievement}
            </Text>
          </Text>
          <Text style={[styles.text, styles.created]}>{moment(props.post.created || "").fromNow()}</Text>
          <Text style={styles.contentText}>
            {props.post.content}
          </Text>
          <Text style={[styles.text, styles.likeText]}>
            <Text> {likes.length} respects </Text> <Text>{comments.length} {comments.length > 1 ? "comments" : "comment"}</Text>
          </Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.likeButton}
              onPress={() => {
                !isLiked ? likePost() : unlikePost()
              }}
            >
              <Text style={styles.button}>
                <FontAwesome5 size={18} name="dumbbell" color="white" /> {isLiked ? "Unrespect" : "Respect"}
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
                {comments.map((comment, index) =>
                  <Comment defaultAvatar={defaultAvatar} key={index} comment={comment} />
                )}
                <CommentInput commentText={commentText} setCommentText={setCommentText} submitComment={submitComment} />
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
    width: "100%"
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