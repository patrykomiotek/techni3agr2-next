import { CharactersList } from "@/features/characters/components/CharactersList";
import { RemoveCharacterButton } from "@/features/characters/components/RemoveCharacterButton";
import { fetchCharacters } from "@/features/characters/services/fetchCharacters";
import db from "@/shared/lib/db";
import Link from "next/link";

export default async function CharactersPage() {
  const records = await db.character.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  // await db.character.create({
  //   data: {
  //     name: "Test 3",
  //     status: "alive",
  //   },
  // });

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
            <div>
              <Link
                href={`/characters/${elem.publicId}`}
                className="text-blue-600"
              >
                {elem.name}
              </Link>
            </div>
            <div>Status: {elem.status}</div>
            <div>
              <RemoveCharacterButton publicId={elem.publicId} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
