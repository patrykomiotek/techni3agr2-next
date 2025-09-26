import { Character } from "../contracts/characters.dto";

type Props = {
  data: Character[];
};

export const CharactersList = ({ data }: Props) => {
  return (
    <div>
      {data.map((elem) => (
        <div key={elem.id}>{elem.name}</div>
      ))}
    </div>
  );
};
