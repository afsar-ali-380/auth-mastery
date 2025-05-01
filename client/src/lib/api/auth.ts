import axios from "../axios";
import { SignUpSchemaType } from "@/utils/validationSchema";

export const login = async (data: { email: string; password: string }) => {
  const res = await axios.post("/auth/login", data);
  console.log(res.data.message);
  return res.data;
};

export const signup = async (data: SignUpSchemaType) => {
  const res = await axios.post("/auth/register", data);
  console.log(res);
  return res.data;
};
