import { CharactersList } from "@/features/characters/components/CharactersList";
import { fetchCharacters } from "@/features/characters/services/fetchCharacters";
import db from "@/shared/lib/db";

export default async function CharactersPage() {
  const records = await db.character.findMany();

  await db.character.create({
    data: {
      name: "Test 3",
      status: "alive",
    },
  });

  // const response = await fetchCharacters();
  // const characters = response.results;

  // return <CharactersList data={characters} />;

  return (
    <div>
      {records.map((elem) => (
        <div key={elem.id}>{elem.name}</div>
      ))}
    </div>
  );
}
