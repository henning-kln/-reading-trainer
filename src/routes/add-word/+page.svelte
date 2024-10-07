<script lang="ts">
    import { enhance } from '$app/forms';
    import { type ToastSettings, getToastStore } from '@skeletonlabs/skeleton';
    import { focusTrap } from '@skeletonlabs/skeleton';
    export let form;
    export let data;
    const toastStore = getToastStore();

    $: if (form) { toastStore.trigger({ message: 'Erfolgreich hinzugefügt', classes: 'variant-filled-success' }); }

</script>
  
<div class="flex flex-col items-center w-11/12 space-y-2 bg-surface-600 p-2 rounded-lg">
    <form
    use:enhance
    action="?/upload"
    method="POST"
    enctype="multipart/form-data"
    class="flex flex-col items-center w-full space-y-2 p-2"
    >
        <h1 class="text-xl">Neues Wort hinzufügen</h1>
        <label class="label w-full">
            <span>Wort</span>
            <input class="input" name="word" type="text" placeholder="" use:focusTrap={true}/>
        </label>
        <button class="btn variant-outline-primary hover:variant-filled-primary">Upload</button>
    
    </form>
    <table class="table max-h-full overflow-y-auto">
        <thead>
            <tr>
                <th>Wort</th>
                <th>Löschen</th>
            </tr>
        </thead>
        <tbody>
            {#each data.props.words as word}
                <tr>
                    <td>{word}</td>
                    <td>
                        <form action="?/delete" method="post">
                            <input type="text" name="word" value={word} class="hidden">
                            <button class="btn variant-outline-error hover:variant-filled-error">Löschen</button>
                        
                        </form>
                    </td>    
                </tr>
            {/each}
        </tbody>
    </table>
</div>