import type { PrismicDocument } from "@prismicio/types"

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			setup: PrismicDocument,
			projectsIndex: PrismicDocument,
			projects: PrismicDocument[],
			home: PrismicDocument,
			pages: PrismicDocument[]
		}
		// interface Platform {}
	}
}

export {};
