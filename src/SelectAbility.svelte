<script>
  import { pet } from "./stores.js";

  const costs = [
    -99, -99, -99, -99, -99, -99, -99, -4, -2, -1, 0, 1, 2, 3, 5, 7, 10, 13, 16,
  ];

  $: $pet.total = $pet.score.reduce((a, v) => (costs[v] ? a + costs[v] : a), 0);
  $: $pet.point = 25 - $pet.total;
</script>

{#each $pet.score as score, i}
  <button
    class="minus"
    on:click={() => ($pet.score[i] -= 1)}
    disabled={score === 7}>-</button
  >
  <button class="label">{score}</button>
  <button
    class="plus"
    on:click={() => ($pet.score[i] += 1)}
    disabled={score === 18 || $pet.point <= 0}>+</button
  >
{/each}

<style>
  .minus {
    grid-column: 1;
    text-align: center;
  }

  .plus {
    grid-column: span 1;
    text-align: center;
  }

  .label {
    grid-column: span 1;
    text-align: center;
  }
</style>
