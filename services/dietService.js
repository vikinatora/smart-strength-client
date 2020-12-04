import { BASEURI } from "../global/globalVariables"
import axios from "axios";
import api from "./api";
import { diet } from "../global/еxampleTrainingProgram";

export default dietService = {
  createDiet: async (model) => {
    const endPoint = `${BASEURI}/api/diets/create`;
    try {
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
    }
    catch (err) {
      console.log(err);
      return diet;
    }
  }
}