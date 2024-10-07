import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getGhostRate, getTimer, setGhostRate, setTimer } from '$lib/server/db';

export const load: PageServerLoad = async ({ request, locals }) => {
    return {
        props: {
            ghost_rate: await getGhostRate(),
            timer: await getTimer(),
        },
    }
}


export const actions = {
    settings: async ({ request, locals }) => {
        const form = await request.formData();
        const ghost_rate = form.get('ghost-rate') as string;
        const timer = form.get('timer') as string;

        const ghostRateNumber = Number(ghost_rate);
        if (!isNaN(ghostRateNumber) && ghostRateNumber >= 0 && ghostRateNumber <= 100) {
            await setGhostRate(ghostRateNumber);
        } else {
            throw error(400, 'Invalid ghost rate. It must be a number between 0 and 100.');
        }

        const timerNumber = Number(timer);
        if (!isNaN(timerNumber) && timerNumber >= 0) {
            await setTimer(timerNumber);
        } else {
            throw error(400, 'Invalid timer. It must be a number greater than 0.');
        }

        return { settings: true };
    },
  };