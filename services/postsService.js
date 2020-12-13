import { BASEURI } from "../global/globalVariables";
import axios from "axios";
export default postsService = {
  createPost: async (model) => {
    try {
      console.log("Sending API request:");
      console.log(model);
      const endPoint = `${BASEURI}/api/posts/create?userId=${model.userId}&content=${model.content}&achievement=${model.achievement}`;
      const result = await axios.post(endPoint);
      return result.data;
    } catch (err) {
      console.log(`Error in create post service: ${err.message}`)
      return false;
    }

  }
};
