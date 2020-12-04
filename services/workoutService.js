import { BASEURI } from "../global/globalVariables";
import api from "./api";
import axios from "axios";
import { trainingPlan } from "../global/еxampleTrainingProgram";
export default workoutService = {
  createWorkout: async (model) => {
    try {
      let newModel = JSON.stringify(model);
      console.log(model);
      const endPoint = `${BASEURI}/api/trainings/create`;
      const { data } = await axios.post(
        endPoint,
        {
          model,
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      return data;
    } catch (err) {
      return trainingPlan;
    }

  }
};
