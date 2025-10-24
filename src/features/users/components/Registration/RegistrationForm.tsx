"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { CreateUserDto, createUserSchema } from "./contracts";
import { authClient } from "@/shared/lib/auth-client";

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserDto>({
    resolver: zodResolver(createUserSchema),
  });

  const handleUserSignUp: SubmitHandler<CreateUserDto> = async (formData) => {
    const { data, error } = await authClient.signUp.email({
      name: formData.name, // required
      email: formData.email, // required
      password: formData.password, // required
      image: "https://example.com/image.png",
      callbackURL: "https://example.com/callback",
    });
  };

  return (
    <form onSubmit={handleSubmit(handleUserSignUp)} className="space-y-2">
      <div className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          {...register("name")}
          className="outline rounded-sm p-1 outline-slate-700 focus:outline-white"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          {...register("email")}
          className="outline rounded-sm p-1 outline-slate-700 focus:outline-white"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...register("password")}
          className="outline rounded-sm p-1 outline-slate-700 focus:outline-white"
        />
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="w-full outline outline-slate-700 px-4 py-2 rounded-sm hover:bg-slate-700 bg-slate-900"
        >
          Register
        </button>
      </div>
    </form>
  );
};
