import React, {useEffect, useState} from "react";
import {StyleSheet, View, Text, Image, ScrollView, RefreshControl } from "react-native";
import Post from "./Post";
import {SCREEN_HEIGHT, STATUSBAR_HEIGHT} from "../global/globalVariables";

const Feed = (props) => {
  let _scrollView = null;
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }

  const submitComment = async (comment) => {
    _scrollView.scrollTo({ y: 0 });
    try {
      // Make API call
      // const response = await put('comments', {
      //   user_id: user._id,
      //   content: comment,
      // });
    }
    catch (error) {
      alert(error);
    }
  };

  return (
    <View style={styles.componentContainer}>
    <ScrollView
      ref={(scrollView) => {_scrollView = scrollView; }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => onRefresh()}
        />
      }
    >
        <Post submitComment={submitComment}/>
    </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  componentContainer:{
    marginTop: SCREEN_HEIGHT / 12,
  },
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
export default Feed;