import { z } from "zod";

export type CharacterStatus = "Alive" | "Dead";

export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
}

export const createCharacterSchema = z.object({
  name: z.string().nonempty(),
  status: z.string().nonempty(),
});

export type CreateCharacterDto = z.infer<typeof createCharacterSchema>;
