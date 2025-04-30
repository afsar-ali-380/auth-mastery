"use client";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, SignUpSchemaType } from "@/utils/validationSchema";
import Link from "next/link";

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(signUpSchema) });

  const submitForm = (data: SignUpSchemaType) => {
    console.log("Validated Data", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 via-white to-purple-100 p-4">
      <div className="w-full max-w-md  bg-white shadow-2xl rounded-2xl p-8">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
          Create Account
        </h2>
        <form onSubmit={handleSubmit(submitForm)} className="space-y-5">
          <Input
            label="First Name"
            type="text"
            id="firstName"
            register={register}
            error={errors.firstName}
            placeholder="Enter Your First Name"
          />
          <Input
            label="Last Name"
            type="text"
            id="lastName"
            register={register}
            error={errors.lastName}
            placeholder="Enter Your Last Name"
          />
          <Input
            label="Email"
            type="email"
            id="email"
            register={register}
            error={errors.email}
            placeholder="example@gmail.com"
          />
          <Input
            label="Password"
            type="password"
            id="password"
            register={register}
            error={errors.password}
            placeholder="Create Your Password"
          />
          <Input
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            register={register}
            error={errors.confirmPassword}
            placeholder="Confirm Your Password"
          />
          <Button type="submit">Sign Up</Button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?
          <Link
            href="/log-in"
            className="ml-1 text-gray-700 font-bold hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};
