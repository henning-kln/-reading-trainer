import { error } from "@sveltejs/kit";
import { put } from "@vercel/blob";
import { env } from "$env/dynamic/private";
import { createWord } from "$lib/server/db.js";

export const actions = {
  upload: async ({ request }) => {
    const form = await request.formData();
    const name = form.get("word") as string;
    const file = form.get("file") as File;

    if(!name) {
        throw error(400, { message: "Kein Word angegeben." });
    }

    await createWord(name);

    return { uploaded: true };

    //const { url } = await put(file.name, file, { access: "public", token: env.BLOB_READ_WRITE_TOKEN });
    //return { uploaded: url };
  },
};
