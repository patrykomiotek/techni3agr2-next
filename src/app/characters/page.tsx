type CharacterStatus = "Alive" | "Dead";

interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
}

interface ApiListResponse<T extends Character> {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
  };
  results: T[];
}

export default async function CharactersPage() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = (await response.json()) as ApiListResponse<Character>;

  return (
    <div>
      {data.results.map((elem) => (
        <div key={elem.id}>{elem.name}</div>
      ))}
    </div>
  );
}
