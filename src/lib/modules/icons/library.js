import { readable, writable } from "svelte/store"

export const libReady = writable(false)
export const library = writable({})

// This can be a map for titles shown upon hover. For example;
export const strings = readable({
  // still: 'Still Image',
  // up: 'Level up',
  // video: 'Video'
})