import { BASEURI } from "../global/globalVariables";
import axios from "axios";
import { trainingPlan } from "../global/еxampleTrainingProgram";
import { AsyncStorage } from "react-native";
export default workoutService = {
  createWorkout: async (model) => {
    try {
      console.log(model);
      const userId = await AsyncStorage.getItem("userId")
      const endPoint = `${BASEURI}/api/trainings/create?userId=${userId}&dietExperience=${model.dietExperience}&fitnessGoal=${model.fitnessGoal}&progressionRate=${model.progressionRate}&trainingDuration=${model.trainingDuration}&trainingExperience=${model.trainingExperience}&workoutPreference=${model.workoutPreference}&workoutsPerWeek=${model.workoutsPerWeek}`;
      const { data } = await axios.post(endPoint);
      return data;
    } catch (err) {
      return trainingPlan;
    }
  },
  getTodaysWorkout: async () => {
    console.log("Fetching today's workout");
    let userId = await AsyncStorage.getItem("userId")
    try {
      const endPoint = `${BASEURI}/api/trainings/get?userId=${userId}`;
      const { data } = await axios.get(endPoint);
      return data;
    } catch (err) {
      return null;
    }
  },
  saveWorkout: async (model) => {
    console.log("Saving workout");
    let userId = await AsyncStorage.getItem("userId")
    console.log(`uID: ${userId}`);
    console.log(`wState: ${JSON.stringify(model)}`);

    try {
      const endPoint = `${BASEURI}/api/trainings/save`;
      // const model = {
      //   "userId": userId,
      //   ...model
      // }
      const { data } = await axios.post(endPoint, model, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      return data;
    } catch (err) {
      return null;
    }
  }
};
