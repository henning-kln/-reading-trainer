<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">

	export let data 

	let words :(string|null)[]= [];
	let started = false;
	let interval: string | number | NodeJS.Timeout | undefined;
	let ghost = false;
	const startTraining = ()=>{
		started = true;
		interval = setInterval(async () => {
			const res = await fetch("/api/random-word")
			const text = await res.text();
			ghost = text === "GHOST";
			if(!ghost){
				words = [text].flatMap(word => syllabify(word) || []);
			}
				
		}, data.props.time*1000);
	}

	const stopTraining = ()=>{
		clearInterval(interval);
		started = false;
	}
	const syllableRegex = /[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi;

	function syllabify(words: string) {
		return words.match(syllableRegex);
	}

	
	


</script>
{#if started}
	<div class="flex justify-end w-full">
		<button class="btn variant-outline-error hover:variant-filled-error " on:click={stopTraining}>Stopp</button>
	</div>
	<img src="" alt="">
	<hr class="w-11/12">
	<div class="flex flex-col items-center justify-center min-h-96 h-full">
		{#if ghost}
			<img src="/ghost.png" alt="ghost" class="w-1/2">
			<h2 class="text-4xl">Huuuuiiiii</h2>
		{:else}
			<h2 class="text-4xl silben">
				{#each words as word}
					<span>{word}</span>
				{/each}
			</h2>
		{/if}
	</div>
{:else}
	<div class="flex items-center justify-center min-h-96 h-full w-full flex-col space-y-2">
		<div class="text-2xl ">Möchtest du jetzt starten?</div>
		<button class="btn variant-outline-primary hover:variant-filled-primary " on:click={startTraining}>Starten</button>
	</div>
	
{/if}

<style>
	.silben :nth-child(odd){
		color: red;
	}
	.silben :nth-child(even){
		color: blue;
	}
	.silben {
		@apply bg-white
	}
</style>