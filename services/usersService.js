import { BASEURI } from "../global/globalVariables";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";
export default usersService = {
  createUser: async (model) => {
    try {
      console.log("Sending API request:");
      console.log(model);
      const endPoint = `${BASEURI}/api/users/create?fullName=${model.fullName}&fbToken=${model.fbToken}`;
      const { data } = await axios.post(endPoint);
      console.log(data);
      return data;
    } catch (err) {
      console.log(`Error in users service: ${err.message}`)
      return false;
    }

  },
  getIdFromFbToken: async () => {
    try {
      let fbToken = await AsyncStorage.getItem("fb_token")
      const endPoint = `${BASEURI}/api/users/getIdfbToken=${fbToken}`;
      const { data } = await axios.get(endPoint);
      console.log(data);
      return data;
    } catch (err) {
      console.log(`Error in users service: ${err.message}`)
      return false;
    }
  }
};
