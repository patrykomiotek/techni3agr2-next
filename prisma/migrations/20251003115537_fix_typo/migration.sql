/*
  Warnings:

  - You are about to drop the `character` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."character";

-- CreateTable
CREATE TABLE "characters" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "characters_pkey" PRIMARY KEY ("id")
);
