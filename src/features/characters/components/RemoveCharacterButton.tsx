"use client";

import { Character } from "@prisma/client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { Button } from "@/shared/components/Button";
import { removeCharacter } from "../services/removeCharacter";

type Props = {
  publicId: Character["publicId"];
};

export const RemoveCharacterButton = ({ publicId }: Props) => {
  const { refresh } = useRouter();

  const handleClick = async () => {
    await removeCharacter(publicId);
    toast.success("Character removed");
    refresh();
  };

  return <Button onClick={handleClick}>Remove</Button>;
};
