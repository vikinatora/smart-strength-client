import { BASEURI } from "../global/globalVariables"
import axios from "axios";
import api from "./api";
import { diet } from "../global/еxampleTrainingProgram";

export default dietService = {
  createDiet: async (model) => {
    // string gender, int weight, int height, int fitnessGoal, int age, string progressionRate
    const endPoint = `${BASEURI}/api/diets/create?gender=${model.gender}&weight=${+model.weight}&height=${+model.height}&fitnessGoal=${+model.fitnessGoal}&age=${+model.age}&progressionRate=${model.progressionRate}`;
    try {
      const { data } = await axios.post(
        endPoint,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      return data;
    }
    catch (err) {
      console.log(err);
      return diet;
    }
  }
}