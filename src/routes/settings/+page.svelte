<script lang="ts">
    import { enhance } from '$app/forms';
    import { type ToastSettings, getToastStore } from '@skeletonlabs/skeleton';
    import { focusTrap } from '@skeletonlabs/skeleton';
    import type { PageServerData } from './$types.js';
    export let form;
    export let data : PageServerData;
    const toastStore = getToastStore();

    $: if (form) { toastStore.trigger({ message: 'Erfolgreich gespeichert', classes: 'variant-filled-success' }); }

</script>

<form
use:enhance
action="?/settings"
method="POST"
enctype="multipart/form-data"
class="flex flex-col  items-center w-5/12 space-y-2 bg-surface-600 p-2 rounded-lg"
>
    <h1 class="text-xl">Einstellungen</h1>
    <div class="flex input-group input-group-divider grid-cols-[auto_1fr]">
        <input type="text" name="ghost-rate" class="w-full" bind:value={data.props.ghost_rate} use:focusTrap={true}/>
        <div>%</div>
    </div>
    <button class="btn variant-outline-primary hover:variant-filled-primary">speichern</button>

</form>