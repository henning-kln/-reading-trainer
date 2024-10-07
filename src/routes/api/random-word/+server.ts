import { getAllWords, getGhostRate } from '$lib/server/db';
import { randomInt } from 'crypto';
import type { RequestHandler } from './$types';
import { getCache, setCache } from '$lib/server/cache';

export const GET: RequestHandler = async () => {

    //check if their is a ghost
    const ghost = await getGhostRate();

    
    if(randomInt(0, 100) < ghost){
        return new Response('GHOST', {status: 200});
    }

    // Get a random word
    const words = await getAllWords();
    let word = '';
    do{
        const wordID = randomInt(0, words.length);
        word = words[wordID];
    }while(getCache('lastWord') == word);
    setCache('lastWord', word);
    return new Response(word, {status: 200});
};