"use server";

import db from "@/shared/lib/db";
import { CreateCharacterDto } from "../contracts/characters.dto";

export const createCharacter = async (data: CreateCharacterDto) => {
  return await db.character.create({
    data,
  });
};
