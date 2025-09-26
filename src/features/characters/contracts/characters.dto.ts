export type CharacterStatus = "Alive" | "Dead";

export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
}
