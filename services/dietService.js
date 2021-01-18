import { BASEURI } from "../global/globalVariables"
import axios from "axios";
import { diet } from "../global/еxampleTrainingProgram";
import { AsyncStorage } from "react-native";

export default dietService = {
  createDiet: async (model) => {
    // string gender, int weight, int height, int fitnessGoal, int age, string progressionRate
    const userId = await AsyncStorage.getItem("userId");
    const endPoint = `${BASEURI}/api/diets/create?userId=${userId}&gender=${model.gender}&weight=${+model.weight}&height=${+model.height}&fitnessGoal=${+model.fitnessGoal}&age=${+model.age}&progressionRate=${model.progressionRate}`;
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