"use server";

import db from "@/shared/lib/db";
import {
  CreateCharacterDto,
  createCharacterSchema,
} from "../contracts/characters.dto";

export const createCharacter = async (data: CreateCharacterDto) => {
  createCharacterSchema.parse(data);

  return await db.character.create({
    data,
  });
};
