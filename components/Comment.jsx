import React from "react";

import {StyleSheet, View, Text, Image } from "react-native";
import moment from 'moment';

export default Comment = (props) => {
  let comment = props.comment;
  return (
    <>
      <View style={styles.avatarContainer}>
        {comment.user.avatar && <Image
          resizeMode='contain'
          style={styles.avatar}
          source={{ uri: comment.user.avatar }}
        />}
      </View>
      <View style={styles.contentContainer}>
      <Text>
        <Text style={[styles.text, styles.name]}>{comment.user.name}</Text>
        {' '}
        <Text style={styles.text}>{comment.content}</Text>
      </Text>
      <Text style={[styles.text, styles.created]}>{
        moment(comment.created).fromNow()
      }</Text>
      </View>
    </>

  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatarContainer: {
    alignItems: 'center',
    marginLeft: 5,
    paddingTop: 10,
    width: 40,
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
    width: 26,
    height: 26,
  },
  text: {
    color: '#000',
    fontFamily: 'OpenSans_400Regular',
    fontSize: 15,
  },
  name: {
    fontWeight: 'bold',
  },
  created: {
    color: '#BBB',
  },

})
