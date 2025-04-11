//"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function deletePost(id) {
  const token = cookies().get("token")?.value;

  const res = await fetch(`https://blog-co8w.onrender.com/api/posts/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    credentials: "include",
  });

  if (res.ok) {
    redirect("/posts");
  }
}
