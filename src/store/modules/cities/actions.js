import { 
  GETCITYLIST, 
  GETCITYBYID 
} from "./actionsType";

export const getCityList = (list) => {
  return { type: GETCITYLIST, list };

};

export const getCityById = (city) => {
  return { type: GETCITYBYID, city };

};
