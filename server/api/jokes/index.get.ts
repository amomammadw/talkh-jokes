import { serverSupabaseClient } from "#supabase/server";
import { IJokeItem } from "~/types/jokes.type";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  const { data, error } = await client.from("jokes").select("*");

  if (error) {
    throw createError({ status: 500, message: "FUCK" });
  }

  return data as IJokeItem[];
});
