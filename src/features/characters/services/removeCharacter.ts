"use server";

import { Character } from "@prisma/client";
import db from "@/shared/lib/db";

export const removeCharacter = async (publicId: Character["publicId"]) => {
  return await db.character.delete({
    where: {
      publicId,
    },
  });
};
