import { BASEURI } from "../global/globalVariables";
import api from "./api";
import axios from "axios";

export default workoutService = {
  createWorkout: async (model) => {
    return new Promise((resolve, reject) => {
      const endPoint = `${BASEURI}/api/trainings/create`;
      axios.post(
        endPoint, 
        {
          model
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      ).then(response => {
        resolve(response.data)
      })
      .catch(error => {
          console.error('error', error);
          reject(error)
      });
    })
  }
};
