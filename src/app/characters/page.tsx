import { CharactersList } from "@/features/characters/components/CharactersList";
import { fetchCharacters } from "@/features/characters/services/fetchCharacters";

export default async function CharactersPage() {
  const response = await fetchCharacters();
  const characters = response.results;

  return <CharactersList data={characters} />;
}
