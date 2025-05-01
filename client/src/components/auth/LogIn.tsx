"use client";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { logInSchema, LogInSchemaType } from "@/utils/validationSchema";
import Link from "next/link";
import { login } from "@/lib/api/auth";
import { useState } from "react";

export const LogInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInSchemaType>({ resolver: zodResolver(logInSchema) });

  const [userData, setUserData] = useState<any>("");

  const handleLogin = async (data: LogInSchemaType) => {
    console.log("validate data", data);
    try {
      const user = await login(data);
      setUserData(user);
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  console.log(userData);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b  from-blue-100 via-white to-purple-100 p-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
          Sign In
        </h2>
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
          <Input
            label="Email"
            type="email"
            id="email"
            register={register}
            error={errors.email}
            placeholder="Enter Your Email"
          />
          <Input
            label="Password"
            type="password"
            id="password"
            register={register}
            error={errors.password}
            placeholder="Enter Your Password"
          />
          <Button type="submit">Sign In</Button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          Doesn't have any account?{" "}
          <Link
            href="/sign-up"
            className="text-gray-700 font-bold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};
