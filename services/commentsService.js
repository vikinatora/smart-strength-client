import { BASEURI } from "../global/globalVariables";
import axios from "axios";
export default commentsService = {
  add: async (postId, userId, content) => {
    try {
      // submitting
      const endPoint = `${BASEURI}/api/comments/add?postId=${postId}&userId=${userId}&content=${content}`;
      const result = await axios.post(endPoint);
      return result.data;
    } catch (err) {
      return false
    }
  },
  likeComment: async (commentId, userId) => {
    console.log("submitting");
    console.log(commentId);
    console.log(userId);
    try {
      const endPoint = `${BASEURI}/api/comments/like?userId=${userId}&commentId=${commentId}`;
      const result = await axios.post(endPoint);
      return result.data;
    } catch (err) {
      console.log(`Error in create post service: ${err.message}`)
      return false;
    }
  },
  unlikeComment: async (commentId, userId) => {
    try {
      const endPoint = `${BASEURI}/api/comments/unlike?userId=${userId}&commentId=${commentId}`;
      const result = await axios.post(endPoint);
      return result.data;
    } catch (err) {
      console.log(`Error in create post service: ${err.message}`)
      return false;
    }
  },

};
