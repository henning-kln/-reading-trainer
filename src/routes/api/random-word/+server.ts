import { getAllWords } from '$lib/server/db';
import { randomInt } from 'crypto';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({locals}) => {

    //check if their is a ghost
    const ghost = locals['ghost-rate'] 
    
    if(randomInt(0, 100) < ghost){
        return new Response('GHOST', {status: 200});
    }

    // Get a random word
    const words = await getAllWords();
    const wordID = randomInt(0, words.length);
    const word = words[wordID];

    return new Response(word, {status: 200});
};