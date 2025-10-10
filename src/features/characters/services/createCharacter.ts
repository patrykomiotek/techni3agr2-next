"use server";

import db from "@/shared/lib/db";
import {
  CreateCharacterDto,
  createCharacterSchema,
} from "../contracts/characters.dto";

export const createCharacter = async (data: CreateCharacterDto) => {
  // 1. parse -> throw new Error
  // createCharacterSchema.parse(data);

  const validationResult = createCharacterSchema.safeParse(data);

  if (!validationResult.success) {
    // error
  } else {
    return await db.character.create({
      data,
    });
  }
};
