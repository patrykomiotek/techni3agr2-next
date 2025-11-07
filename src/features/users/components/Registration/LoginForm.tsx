"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { LoginUserDto, loginUserSchema } from "./contracts";
import { authClient } from "@/shared/lib/auth-client";
import { Input } from "@/shared/components/Input";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserDto>({
    resolver: zodResolver(loginUserSchema),
  });

  const handleUserSignUp: SubmitHandler<LoginUserDto> = async (formData) => {
    const { data, error } = await authClient.signIn.email({
      email: formData.email, // required
      password: formData.password, // required
      // rememberMe: true,
      callbackURL: "/",
    });
  };

  return (
    <form onSubmit={handleSubmit(handleUserSignUp)} className="space-y-2">
      <Input label="E-mail" type="email" {...register("email")} />
      <Input label="Password" type="password" {...register("password")} />
      {/* <div className="flex flex-col">
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          {...register("email")}
          className="outline rounded-sm p-1 outline-slate-700 focus:outline-white"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div className="flex flex-col">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...register("password")}
          className="outline rounded-sm p-1 outline-slate-700 focus:outline-white"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div> */}
      <div className="mt-4">
        <button
          type="submit"
          className="w-full outline outline-slate-700 px-4 py-2 rounded-sm hover:bg-slate-700 bg-slate-900"
        >
          Login
        </button>
      </div>
    </form>
  );
};
