<script lang="ts">
	import { PRODUCTS, type Product } from '$lib/products';
	import { formatMass, formatMoney, formatMoneyShort } from '$lib/format';
	import Tutorial from '$lib/Tutorial.svelte';
	import { TUTORIAL } from '$lib/tutorial';
	import { onMount } from 'svelte';

	type SellingProduct = Product & { finish_sell_time: number };
	type OptionalSellingProduct = SellingProduct | undefined;

	let shelf: OptionalSellingProduct[] = [undefined, undefined, undefined, undefined];

	let tutorialStep = TUTORIAL.length;

	let startTime = Date.now();

	let time = 0;

	let balance = 1;
	let max_balance = balance;
	let balance_increase = 0;

	let emissions = 0;
	let emissions_change = 0;

	function addProduct(product: Product) {
		if (product.price > balance) {
			console.log('not enough money');
			return;
		}
		let new_product: Product & { finish_sell_time: number } = {
			...product,
			finish_sell_time: time + product.sell_duration
		};
		for (let i = 0; i < shelf.length; i++) {
			if (shelf[i] === undefined) {
				shelf[i] = new_product;
				balance -= product.price;
				emissions_change = product.co2_kg;
				emissions += product.co2_kg;
				return;
			}
		}

		console.log('no room on shelf');
	}

	function nextTutorialStep() {
		tutorialStep += 1;
		if (tutorialStep === TUTORIAL.length)
			document.cookie = 'tutorial=true; expires=Fri, 31 Dec 9999 23:59:59 GMT';
	}

	setInterval(() => {
		time = (Date.now() - startTime) / 1000;
		for (let i = 0; i < shelf.length; i++) {
			const item = shelf[i];
			if (item === undefined) continue;
			if (time > item.finish_sell_time) {
				balance += item.price * 1.25;
				if (max_balance == undefined) max_balance = balance;
				if (balance > max_balance) {
					balance_increase = balance - max_balance;
					max_balance = balance;
				}
				shelf[i] = undefined;
			}
		}
	}, 10);

	onMount(() => {
		tutorialStep = document.cookie.includes('tutorial=true') ? TUTORIAL.length : 0;
	});
</script>

<section
	class="flex items-center justify-center min-h-screen pattern-dots pattern-gray-200 pattern-bg-gray-100 pattern-size-4 opacity-100 sm:p-8"
>
	<div class="max-w-4xl h-min bg-white p-4 sm:rounded-2xl sm:shadow-xl">
		<div class="flex justify-between items-center space-x-4">
			<div class="p-2 relative">
				<Tutorial side="right" index={0} {tutorialStep} />
				<h1 class="text-4xl font-bold text-center">Sustainability Inc.</h1>
				<p class="bottom-0 text-gray-400 font-semibold">by Xavier Bradford</p>
			</div>
		</div>

		<div class="flex flex-col sm:flex-row">
			<div class="flex-shrink-0 sm:w-1/3 p-2 space-y-2">
				<h2 class="text-2xl font-medium text-gray-900 mb-4">Stats</h2>
				<div class="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6 relative">
					<Tutorial side="right" index={3} {tutorialStep} />
					{#if balance_increase === 0}
						<div class="inline-flex gap-2 self-end rounded bg-gray-100 p-1 text-gray-400">
							<p class="text-xs font-semibold w-16 text-center tracking-widest">---</p>
						</div>
					{:else}
						<div class="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
								/>
							</svg>

							<span class="text-xs font-medium">
								+{formatMoneyShort(balance_increase)}
							</span>
						</div>
					{/if}

					<div>
						<strong class="block text-sm font-medium text-gray-500"> Balance </strong>

						<p>
							<span class="text-2xl font-medium text-gray-900">${formatMoney(balance)} </span>

							{#if max_balance !== undefined}
								<span class="text-xs text-gray-500">
									max ${formatMoney(max_balance)}
								</span>
							{/if}
						</p>
					</div>
				</div>

				<div class="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6">
					{#if emissions_change === 0}
						<div class="inline-flex gap-2 self-end rounded bg-gray-100 p-1 text-gray-400">
							<p class="text-xs font-semibold w-16 text-center tracking-widest">---</p>
						</div>
					{:else if emissions_change < 0}
						<div class="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
								/>
							</svg>

							<span class="text-xs font-medium"> -{formatMass(Math.abs(emissions_change))} </span>
						</div>
					{:else}
						<div class="inline-flex gap-2 self-end rounded bg-red-100 p-1 text-red-600">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
								/>
							</svg>

							<span class="text-xs font-medium">
								+{formatMass(emissions_change)}
							</span>
						</div>
					{/if}

					<div>
						<strong class="block text-sm font-medium text-gray-500"> Total Emissions </strong>

						<p>
							<span class="text-2xl font-medium text-gray-900"> {formatMass(emissions)} </span>

							<span class="text-xs text-gray-500"> from {formatMass(emissions)} </span>
						</p>
					</div>
				</div>

				<div class="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6 relative">
					<Tutorial side="right" index={4} {tutorialStep} />
					<div>
						<strong class="block text-sm font-medium text-gray-500 mt-10"> Overall Score </strong>

						<p class="text-2xl font-medium text-gray-900">
							{((Math.log(max_balance) - emissions / 10) * 1000).toLocaleString(undefined, {
								maximumFractionDigits: 0
							})} points
						</p>
					</div>
				</div>
				<div class="relative">
					<Tutorial side="right" index={2} {tutorialStep} />
					<h2 class="text-2xl font-medium text-gray-900 my-4">Currently Selling</h2>
					<div class="grid auto-rows-fr grid-cols-4 sm:grid-cols-1 gap-2 h-32 sm:h-[669px]">
						{#each shelf as item}
							{#if item !== undefined && item.finish_sell_time > time}
								<div
									class="relative rounded bg-cover bg-center bg-no-repeat overflow-hidden"
									style="background-image: url({item.image})"
								>
									<div class="absolute inset-0 bg-black/40" />
									<!-- <div
										class="absolute top-1 left-[2%] bg-white/90 h-1"
										style="right: {96 -
											(item.sell_duration + time - item.finish_sell_time) *
												(96 / item.sell_duration)}%"
									/> -->
									<div
										class="absolute bottom-1 left-[2%] bg-white h-1 rounded-full"
										style="right: {96 -
											(item.sell_duration + time - item.finish_sell_time) *
												(96 / item.sell_duration)}%"
									/>
									<div class="relative flex items-start justify-between p-4 sm:p-6">
										<div class="pt-12 text-white drop-shadow-xl">
											<h3 class="text-xl font-bold sm:text-2xl">{item.name}</h3>

											<p class="text-sm">
												For ${(item.price * 1.25).toLocaleString(undefined, {
													minimumFractionDigits: 2,
													maximumFractionDigits: 2
												})}
											</p>
										</div>

										<!-- <div
											class="w-8 h-8 rounded-full"
											style="background-image: conic-gradient(#fff0 {(item.sell_duration +
												time -
												item.finish_sell_time) *
												(360 / item.sell_duration) -
												3}deg, #fffb {(item.sell_duration + time - item.finish_sell_time) *
												(360 / item.sell_duration) +
												3}deg);"
										/> -->
									</div>
									<div
										class="absolute inset-0 bg-gray-100 transition-all bg-opacity-0"
										class:bg-opacity-100={time > item.finish_sell_time - 0.1}
									/>
								</div>
							{:else}
								<div class="bg-gray-100 rounded flex items-center justify-center p-1">
									<p class="font-semibold text-gray-400 text-center text-xs w-24">
										Click on a product to sell it
									</p>
								</div>
							{/if}
						{/each}
					</div>
				</div>
			</div>
			<div class="p-2 relative">
				<Tutorial side="left" index={1} {tutorialStep} />
				<h2 class="text-2xl font-medium text-gray-900 mb-4">Buy Products</h2>
				<div class="grid gap-2 grid-cols-2 lg:grid-cols-3 sm:max-h-[64rem] sm:overflow-auto">
					{#each PRODUCTS as product}
						<button
							class="block group transition-all duration-300"
							disabled={balance < product.price}
							on:click={() => addProduct(product)}
						>
							<img src={product.image} alt="" class="object-cover w-full rounded aspect-square" />

							<div class="mt-3">
								<div class="text-left font-medium mb-1">
									<div class="flex items-center justify-between">
										<h3 class="text-gray-900">{product.name}</h3>
										<p class="font-normal">
											${product.price.toLocaleString()}
										</p>
									</div>
									<div class="flex items-center justify-between text-xs text-gray-500">
										<a class="text-right font-normal underline" href="/products/{product.name}"
											>about {product.name}</a
										>
										<p>
											{formatMass(product.co2_kg)} CO<sub>2</sub>
										</p>
									</div>
								</div>
							</div>
						</button>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<div
		class="absolute inset-0 bg-black/40"
		class:hidden={tutorialStep === TUTORIAL.length}
		on:click={() => nextTutorialStep()}
		on:keypress={() => nextTutorialStep()}
	/>
</section>
