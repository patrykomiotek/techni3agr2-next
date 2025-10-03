import db from "@/shared/lib/db";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CharacterDetails({ params }: Props) {
  const { id } = await params;

  // try {
  const character = await db.character.findUniqueOrThrow({
    where: {
      id: parseInt(id, 10),
    },
  });
  // } catch {
  //   notFound();
  // }

  return (
    <div>
      <h1>Character details</h1>
      <pre>{JSON.stringify(character, null, 2)}</pre>
    </div>
  );
}
