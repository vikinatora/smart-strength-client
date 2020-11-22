import { BASEURI } from "../global/globalVariables"

export default dietService = {
  createDiet: async (model) => {
    const endPoint = `${BASEURI}/api/diets/create`;
    const diet = await api.get(model, endPoint, "Couldnt't create workout");

    // const diet = await axios.get(
    //   endPoint, 
    //   {
    //     data: model,
    //   }
    // );
    
    return diet;
  }
}