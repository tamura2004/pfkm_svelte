<script>
  import { pet } from "./stores.js";
  const races = ["dog", "cat", "rat"];
</script>

{#each races as race}
  <button on:click={() => {
    console.log(race);
    $pet.race = race;
    if (race !== "rat") {
      $pet.color = "red";
    }
  }}>{race}</button>
{/each}
