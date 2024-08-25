import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body);

  const client = await serverSupabaseClient(event);
  const { data, error } = await client.from("jokes").insert(body);

  if (error) {
    console.log(error, data);
    throw createError(error);
  }

  return { msg: "success" };
});
