"use server";

import { cookies } from "next/headers";

export async function VerifyCookie() {
  const cookieStore = await cookies();
  const theme = cookieStore.has("miau");
  return theme;
}

export async function CreateCookie() {
  const cookieStore = await cookies();
  const timeDuration = 7 * 24 * 60 * 60;
  cookieStore.set("miau", "miau", { path: "/", maxAge: timeDuration });
}


export async function DeleteCookie() {
    const cookieStore = await cookies();
    cookieStore.delete("miau");
  }
  