<script>
    let isOpen = false;
</script>

<nav class="bg-base fixed w-full z-10 top-0 shadow-lg">
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div class="pl-4 flex items-center">
            <a class="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                Lese Trainer
            </a>
        </div>
        <div class="block lg:hidden pr-4">
            <button 
                class="flex items-center p-1 text-white hover:text-gray-200 focus:outline-none focus:shadow-outline"
                on:click={() => isOpen = !isOpen}
            >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                    <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                </svg>
            </button>
        </div>
        <div class={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'} lg:block mt-2 lg:mt-0 bg-blue-500 lg:bg-transparent text-white p-4 lg:p-0 z-20`}>
            <ul class="list-reset lg:flex justify-end flex-1 items-center">
                <li class="mr-3">
                    <a class="inline-block py-2 px-4 text-white no-underline hover:text-gray-200 hover:text-underline" href="/">Training</a>
                </li>
                <li class="mr-3">
                    <a class="inline-block py-2 px-4 text-white no-underline hover:text-gray-200 hover:text-underline" href="/add-word">Worte Hinzufügen</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<main class="mt-16 bg-white w-full">
    <!-- Your main content goes here -->
    <slot />
</main>