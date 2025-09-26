import { ApiListResponse } from "@/shared/contracts/apiResponse";
import { Character } from "../contracts/characters.dto";
import { api } from "@/shared/api";

// export const fetchCharacters = async () => {
//   const response = await fetch("https://rickandmortyapi.com/api/character");
//   const data = (await response.json()) as ApiListResponse<Character>;

//   return data;
// };

export const fetchCharacters = async () => {
  // const response = await axios.get<ApiListResponse<Character>>(
  //   `${BASE_API_URL}/character`
  // );
  const response = await api.get<ApiListResponse<Character>>("/character");

  return response.data;
};

// export const createCharacter = async () => {
//   // const response = await axios.get<ApiListResponse<Character>>(
//   //   `${BASE_API_URL}/character`
//   // );
//   const response = await api.post("/character", {

//   });

//   return response.data;
// };
