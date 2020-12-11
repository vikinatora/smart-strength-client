import { BASEURI } from "../global/globalVariables";
import api from "./api";
import axios from "axios";
import { trainingPlan } from "../global/еxampleTrainingProgram";
export default usersService = {
  createUser: async (model) => {
    try {
      console.log(model);
      const endPoint = `${BASEURI}/api/users/create?fullName=${model.fullName}&fbToken=${model.fbToken}`;
      const result = await axios.post(endPoint);
      return result;
    } catch (err) {
      return false
    }

  }
};
