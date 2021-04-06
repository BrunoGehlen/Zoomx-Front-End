import { 
  GETSTATEBYID, 
  GETSTATELIST 
} from "./actionsType";

export const getStateList = (list) => {
  return { type: GETSTATELIST, list }
}

export const getStateById = (DBState) => {
  return { type: GETSTATEBYID, DBState }
}
