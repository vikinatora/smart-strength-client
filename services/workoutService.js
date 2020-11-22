import { BASEURI } from "../global/globalVariables";
import api from "./api";
import axios from "axios";

export default workoutService = {
  createWorkoutAndDiet: async (model) => {
    const endPoint = `${BASEURI}/api/trainings/create`;
    const workout = await api.get(model, endPoint, "Couldnt't create workout");
    // const workout = await axios.get(
    //   endPoint, 
    //   {
    //     data: model,
    //   }
    // );

    return workout;
  }

};
