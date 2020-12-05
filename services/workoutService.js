import { BASEURI } from "../global/globalVariables";
import api from "./api";
import axios from "axios";
import { trainingPlan } from "../global/еxampleTrainingProgram";
export default workoutService = {
  createWorkout: async (model) => {
    try {
      let newModel = JSON.stringify(model);
      console.log(model);
      const endPoint = `${BASEURI}/api/trainings/create?dietExperience=${model.dietExperience}&fitnessGoal=${model.fitnessGoal}&progressionRate=${model.progressionRate}&trainingDuration=${model.trainingDuration}&trainingExperience=${model.trainingExperience}&workoutPreference=${model.workoutPreference}&workoutsPerWeek=${model.workoutsPerWeek}`;
      const { data } = await axios.post(
        endPoint,
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
