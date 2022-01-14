<script>
  import { pet } from "./stores.js";
  const colors = {
    rat: ["red", "yellow", "green"],
  };
</script>

{#each colors[$pet.race] as color}
  <button class="double" on:click={() => ($pet.color = color)}>{color}</button>
{/each}

<style>
  .double {
    grid-column: span 2;
  }
</style>
