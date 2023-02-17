<script>
	import Text from "$lib/atoms/text.svelte"
	import Image from "$lib/atoms/image.svelte"
	import Link from "$lib/atoms/link.svelte"

	export let slice
	export let title
	export let text
	export let items

	if(slice) {
		title = slice.primary.title_team_with_image_and_short_paragraph
		text = slice.primary.text_team_with_image_and_short_paragraph
		items = slice.items
	}
</script>

<div class="border-t border-text">
	<div class="py-24 md:py-32 lg:py-40">
		<div class="mx-auto grid max-w-7xl grid-cols-1 gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
			<div class="mx-auto max-w-2xl lg:mx-0">
				<Text plain field={title} classes="text-3xl font-bold tracking-tight sm:text-4xl" />
				<Text plain field={text} classes="mt-6 text-lg leading-8" />
			</div>

			<!-- svelte-ignore a11y-no-redundant-roles -->
			<ul role="list" class="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2">
				{#each items as item}
					<li>
						<Image src={item.image_team_with_image_and_short_paragraph} classes="object-cover aspect-[3/2] w-full" />
						<Text plain field={item.name_team_with_image_and_short_paragraph} classes="mt-6 text-lg font-semibold leading-8" />
						<Text plain field={item.position_team_with_image_and_short_paragraph} classes="text-base leading-7" />
						<Text plain field={item.text_team_with_image_and_short_paragraph} classes="mt-4 text-base leading-7" />

						<ul role="list" class="mt-6 flex gap-x-6">
							{#if item.link_website_team_with_image_and_short_paragraph.url}
								<li>
									<Link document={item.link_website_team_with_image_and_short_paragraph} classes="text-gray-400 hover:text-gray-500">
										<span class="sr-only">Website</span>
										<i class="fa-solid fa-link"></i>
									</Link>
								</li>
							{/if}

							{#if item.link_instagram_team_with_image_and_short_paragraph.url}
								<li>
									<Link document={item.link_instagram_team_with_image_and_short_paragraph} classes="text-gray-400 hover:text-gray-500">
										<span class="sr-only">Instagram</span>
										<i class="fa-brands fa-instagram"></i>
									</Link>
								</li>
							{/if}

							{#if item.link_twitter_team_with_image_and_short_paragraph.url}
								<li>
									<Link document={item.link_twitter_team_with_image_and_short_paragraph} classes="text-gray-400 hover:text-gray-500">
										<span class="sr-only">Twitter</span>
										<i class="fa-brands fa-twitter"></i>
									</Link>
								</li>
							{/if}

							{#if item.link_twitter_team_with_image_and_short_paragraph.url}
								<li>
									<Link document={item.link_linkedin_team_with_image_and_short_paragraph} classes="text-gray-400 hover:text-gray-500">
										<span class="sr-only">LinkedIn</span>
										<i class="fa-brands fa-linkedin"></i>
									</Link>
								</li>
							{/if}
						</ul>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>