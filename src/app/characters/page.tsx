import { CharactersList } from "@/features/characters/components/CharactersList";
import { fetchCharacters } from "@/features/characters/services/fetchCharacters";

export default async function CharactersPage() {
  const data = await fetchCharacters();

  return <CharactersList data={data.results} />;
}
