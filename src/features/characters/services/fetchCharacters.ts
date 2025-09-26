import { ApiListResponse } from "@/shared/contracts/apiResponse";
import { Character } from "../contracts/characters.dto";

export const fetchCharacters = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = (await response.json()) as ApiListResponse<Character>;

  return data;
};
