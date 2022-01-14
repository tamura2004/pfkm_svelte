import { writable } from "svelte/store";

export let pet = writable({
  race: null,
  color: null,
  score: [10,10,10,10,10,10],
  total: 0,
  point: 25,
});
