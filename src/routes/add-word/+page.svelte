<script lang="ts">
    import { enhance } from '$app/forms';
    import { type ToastSettings, getToastStore } from '@skeletonlabs/skeleton';
    import { focusTrap } from '@skeletonlabs/skeleton';
    export let form;
    const toastStore = getToastStore();

    $: if (form) { toastStore.trigger({ message: 'Erfolgreich hinzugefügt', classes: 'variant-filled-success' }); }

</script>
  

<form
use:enhance
action="?/upload"
method="POST"
enctype="multipart/form-data"
class="flex flex-col  items-center w-5/12 space-y-2 bg-surface-600 p-2 rounded-lg"
>
    <h1 class="text-xl">Neues Wort hinzufügen</h1>
    <label class="label w-full">
        <span>Wort</span>
        <input class="input" name="word" type="text" placeholder="" use:focusTrap={true}/>
    </label>
    <button class="btn variant-outline-primary hover:variant-filled-primary">Upload</button>

</form>