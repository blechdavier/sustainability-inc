<script>
	import { formatMoney, formatMass } from '$lib/format';
	export let data;
</script>

<!--
  This component uses @tailwindcss/forms and @tailwindcss/typography

  yarn add @tailwindcss/forms @tailwindcss/typography
  npm install @tailwindcss/forms @tailwindcss/typography

  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]

  @layer components {
    .no-spinner {
      -moz-appearance: textfield;
    }

    .no-spinner::-webkit-outer-spin-button,
    .no-spinner::-webkit-inner-spin-button {
      margin: 0;
      -webkit-appearance: none;
    }
  }
-->

<section
	class="flex items-center justify-center min-h-screen pattern-dots pattern-gray-200 pattern-bg-gray-100 pattern-size-4 opacity-100 sm:p-8"
>
	<div class="relative mx-auto max-w-screen-xl p-8 bg-white rounded-2xl shadow-xl">
		<div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
			<img alt="Les Paul" src={data.image} class="aspect-square w-full rounded-xl object-cover" />

			<div class="sticky top-0 space-y-4">
				<div class="flex justify-between items-center">
					<h1 class="text-xl font-bold sm:text-2xl">{data.name}</h1>
					<div class="text-right">
						<p class="text-lg font-bold">${formatMoney(data.price)}</p>
						<p class="text-lg font-bold">{formatMass(data.co2_kg)} CO<sub>2</sub>e</p>
					</div>
				</div>

				<div>
					<p class="prose max-w-none">
						{data.initialParagraph}
					</p>
				</div>
				<div>
					<p class="text-sm font-bold">Quantity</p>
					<p class="prose max-w-none">{data.quantity}</p>
				</div>
				<div>
					<p class="text-sm font-bold">Emissions</p>
					<p class="prose max-w-none">
						{data.emissions}
					</p>
				</div>
				<div>
					<p class="text-sm font-bold">Other Concerns</p>
					<p class="prose max-w-none">
						{data.otherConcerns}
					</p>
				</div>
				<div>
					<p class="text-sm font-bold">Sources</p>
					<ul class="prose max-w-none text-xs text-blue-400">
						{#each data.sources as source}
							<li>
								<a class="" href={source}>
									{source}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
