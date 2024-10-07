import { getTimer } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {
        props: {
            time: await getTimer()
        }
    };
}) satisfies PageServerLoad;