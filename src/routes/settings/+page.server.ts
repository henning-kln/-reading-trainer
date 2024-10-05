import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ request, locals }) => {
    return {
        props: {
            ghost_rate: locals['ghost-rate'] || 0,
        },
    }
}


export const actions = {
    settings: async ({ request, locals }) => {
        const form = await request.formData();
        const ghost_rate = form.get('ghost-rate') as string;

        if (isNaN(Number(ghost_rate)) && Number(ghost_rate) < 0 && Number(ghost_rate) > 100) {
            throw error(400, { message: 'Invalid ghost rate' });
        }
        locals['ghost-rate'] = Number(ghost_rate);

        return { settings: true };
    },
  };