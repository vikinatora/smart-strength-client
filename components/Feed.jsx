import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView, RefreshControl } from "react-native";
import Post from "./Post";
import { SCREEN_HEIGHT, STATUSBAR_HEIGHT } from "../global/globalVariables";
import feedService from "../services/feedService";
import MessageModal from "./MessageModal";
import Loader from "./Loader";

const Feed = (props) => {
  const [posts, setPosts] = useState([]);
  const [showFailedToFetchPosts, setShowFailedToFetchPosts] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, [])
  let _scrollView = null;
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    fetchPosts();
    setRefreshing(false);
  }

  const fetchPosts = async () => {
    try {
      setIsFetching(true);
      const posts = await feedService.getFeed();
      if (posts) {
        setPosts(posts);
      } else {
        setShowFailedToFetchPosts(true);
      }
      setIsFetching(false);
    } catch (err) {
      setShowFailedToFetchPosts(true);
      setIsFetching(false);

    }

  }


  return (
    <View style={styles.componentContainer}>
      {
        isFetching
          ? <Loader />
          : null
      }
      <ScrollView
        ref={(scrollView) => { _scrollView = scrollView; }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => onRefresh()}
          />
        }
      >
        {(posts || []).map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </ScrollView>
      {
        showFailedToFetchPosts ?
          <MessageModal
            message={"Couldn't fetch posts... 😞\nPlease try again in a few moments."}
            buttonText={"Okay"}
            setShowModal={setShowFailedToFetchPosts}
            showModal={showFailedToFetchPosts}
          />
          : null
      }
    </View>
  );
}
const styles = StyleSheet.create({
  componentContainer: {
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