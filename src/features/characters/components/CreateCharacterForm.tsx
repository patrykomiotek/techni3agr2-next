"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateCharacterDto,
  createCharacterSchema,
} from "../contracts/characters.dto";
import { useRouter } from "next/navigation";
import { createCharacter } from "../services/createCharacter";

export const CreateCharacterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCharacterDto>({
    resolver: zodResolver(createCharacterSchema),
  });
  const { push } = useRouter();

  const handleSendForm: SubmitHandler<CreateCharacterDto> = async (data) => {
    console.log({ data });
    // save to the db
    await createCharacter(data);
    push("/characters");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleSendForm)} className="space-y-2">
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" className="outline ml-2" {...register("name")} />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <input id="status" className="outline ml-2" {...register("status")} />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div className="mt-2">
          <button className="outline p-2 rounded-md" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
