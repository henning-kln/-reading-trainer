<script lang="ts">
    import { enhance } from '$app/forms';
    export let form;
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
        <input class="input" type="text" placeholder="" />
    </label>
    <input class="input" name="file" required type="file" />
    <button class="btn variant-outline-primary hover:variant-filled-primary">Upload</button>

    {#if form}
        <p>uploaded {form.uploaded}</p>
    {/if}
</form>