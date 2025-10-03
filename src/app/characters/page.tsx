import { CharactersList } from "@/features/characters/components/CharactersList";
import { fetchCharacters } from "@/features/characters/services/fetchCharacters";
import db from "@/shared/lib/db";
import Link from "next/link";

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
      <div>
        <Link href="/characters/create" className="text-blue-500">
          Create character
        </Link>
      </div>
      <div>
        {records.map((elem) => (
          <div key={elem.id} className="mb-4">
            <div>Name: {elem.name}</div>
            <div>Status: {elem.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
