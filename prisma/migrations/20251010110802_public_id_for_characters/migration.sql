/*
  Warnings:

  - A unique constraint covering the columns `[public_id]` on the table `characters` will be added. If there are existing duplicate values, this will fail.
  - The required column `public_id` was added to the `characters` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "characters" ADD COLUMN     "public_id" UUID NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "characters_public_id_key" ON "characters"("public_id");
