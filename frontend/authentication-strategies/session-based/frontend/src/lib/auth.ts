"use server";
import { FormStateT } from "@/types/FormState";
import { createSession } from "./session";
import { redirect } from "next/navigation";
import { UserModel } from "@/schemas/user.schema";
import { connectToDb } from "./connect-db";

export async function signup(state: FormStateT, formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  await connectToDb();
  const user = await UserModel.create({
    name,
    email,
    password,
  });
  if (!user)
    return {
      error: "unsuccess",
    };
  await createSession(user._id);
  redirect("/home");
}
export async function logout() {}
export async function login() {}
