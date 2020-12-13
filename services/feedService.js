import { BASEURI } from "../global/globalVariables";
import axios from "axios";
export default feedService = {
  getFeed: async () => {
    try {
      console.log();
      const endPoint = `${BASEURI}/api/posts/get`;
      const result = await axios.get(endPoint);
      return result.data;
    } catch (err) {
      return false
    }
  }
};
