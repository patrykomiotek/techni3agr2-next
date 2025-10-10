import db from "@/shared/lib/db";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ publicId: string }>;
};

export default async function CharacterDetails({ params }: Props) {
  const { publicId } = await params;

  // try {
  const character = await db.character.findUniqueOrThrow({
    where: {
      publicId: publicId,
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
