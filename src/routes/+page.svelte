<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">


	let started = false;
</script>
{#if started}
	<div class="flex justify-end w-full">
		<button class="btn variant-outline-error hover:variant-filled-error text-black" on:click={()=>started=false}>Stopp</button>
	</div>
	<img src="" alt="">
	<hr class="w-11/12">
	<div class="flex flex-col items-center justify-center">
		
	</div>
{:else}
	<div class="flex items-center justify-center h-full w-full flex-col space-y-2">
		<div class="text-2xl text-black">Möchtest du jetzt starten?</div>
		<button class="btn variant-outline-primary hover:variant-filled-primary text-black" on:click={()=>started=true}>Starten</button>
	</div>
	
{/if}

