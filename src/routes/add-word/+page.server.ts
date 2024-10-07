import { error } from "@sveltejs/kit";
import { createWord, deleteWord, getAllWords } from "$lib/server/db.js";
import { deleteCache } from "$lib/server/cache.js";

export const load = async () => {
  return {
    props: {
      words: await getAllWords(),
    }
  };
}


export const actions = {
  upload: async ({ request }) => {
    const form = await request.formData();
    const name = form.get("word") as string;
    const file = form.get("file") as File;

    if(!name) {
        throw error(400, { message: "Kein Word angegeben." });
    }

    await createWord(name);
    deleteCache("words");

    return { uploaded: true };

    //const { url } = await put(file.name, file, { access: "public", token: env.BLOB_READ_WRITE_TOKEN });
    //return { uploaded: url };
  },
  delete: async ({ request }) => {
    const form = await request.formData();
    const name = form.get("word") as string;

    if(!name) {
        throw error(400, { message: "Kein Word angegeben." });
    }

    await deleteWord(name);
    deleteCache("words");

    return { deleted: true };
  }
};
