<script lang="ts">
	import { TUTORIAL } from '$lib/tutorial';
	export let side: 'left' | 'right' = 'left';
	export let index: number;
	export let tutorialStep: number;

	let title: string = TUTORIAL[index].title;
	let description: string = TUTORIAL[index].description;
</script>

{#if tutorialStep === index}
	<div
		class="absolute w-64 flex z-10"
		class:flex-row-reverse={side === 'left'}
		class:-left-64={side === 'left'}
		class:-right-64={side === 'right'}
	>
		<div
			class="inline-block bg-white w-4 h-4 rotate-45 flex-none border border-gray-200"
			class:-mr-2={side === 'right'}
			class:-ml-2={side === 'left'}
			class:border-t-0={side === 'right'}
			class:border-r-0={side === 'right'}
			class:border-b-0={side === 'left'}
			class:border-l-0={side === 'left'}
		/>
		<div class="bg-white rounded-lg border border-gray-200 shadow-lg p-4 -mt-4">
			<p class="font-medium text-gray-900">{title}</p>

			<p class="text-sm text-gray-500 mt-2 mb-1">
				{description}
			</p>
		</div>
	</div>
{/if}
