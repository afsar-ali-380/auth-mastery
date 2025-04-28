"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, SignUpSchemaType } from "@/utils/validationSchema";

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
    <div>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="w-[500px] mx-auto my-20 flex flex-col gap-5 border rounded-xl p-8"
      >
        <input
          type="text"
          {...register("firstName")}
          placeholder="Enter Your First Name"
          className="border-2 border-blue-600/90 rounded py-2 px-2 text-sm focus:outline-none"
        />
        {errors.firstName && (
          <p className="text-red-500 text-xs">{errors.firstName.message}</p>
        )}
        <input
          type="text"
          {...register("lastName")}
          placeholder="Enter Your Last Name"
          className="border-2  border-blue-600/90 rounded py-2 px-2 text-sm focus:outline-none"
        />
        {errors.lastName && (
          <p className="text-red-500 text-xs">{errors.lastName.message}</p>
        )}
        <input
          type="email"
          {...register("email")}
          placeholder="example@gmail.com"
          className="border-2  border-blue-600/90 rounded py-2 px-2 text-sm focus:outline-none"
        />
        {errors.email && (
          <p className="text-red-500 text-xs">{errors.email.message}</p>
        )}
        <input
          type="password"
          {...register("password")}
          placeholder="Create Your Password"
          className="border-2  border-blue-600/90 rounded py-2 px-2 text-sm focus:outline-none"
        />
        {errors.password && (
          <p className="text-red-500 text-xs">{errors.password.message}</p>
        )}
        <input
          type="password"
          {...register("confirmPassword")}
          placeholder="Confirm Your Password"
          className="border-2  border-blue-600/90 rounded py-2 px-2 text-sm focus:outline-none"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-xs">
            {errors.confirmPassword.message}
          </p>
        )}
        <button
          type="submit"
          className="bg-blue-600 rounded-lg py-2 text-white cursor-pointer"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};
