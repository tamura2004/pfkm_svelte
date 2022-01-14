<script>
  import { pet } from "./stores.js";
  import SelectRace from "./SelectRace.svelte";
  import SelectColor from "./SelectColor.svelte";
  import SelectAbility from "./SelectAbility.svelte";

  let progress = SelectRace;

  $: if ($pet.race === null) {
    progress = SelectRace;
  } else if ($pet.color === null) {
    progress = SelectColor;
  } else {
    progress = SelectAbility;
  }
</script>

<main>
  <h1 class="ub">pet</h1>
  <div class="head ub">race</div>
  <div class="cell ub">{$pet.race}</div>
  <div class="head ub">color</div>
  <div class="cell ub">{$pet.color}</div>
  <div class="head ub">total</div>
  <div class="cell ub">{$pet.total}</div>
  <div class="head ub">point</div>
  <div class="cell ub">{$pet.point}</div>
  <div class="head ub">score</div>
  <div class="cell ub">{$pet.score}</div>

  <svelte:component this={progress}/>
</main>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    font-size: 24px;
    vertical-align: bottom;
  }

  main {
    display: grid;
    grid-template-columns: repeat(6, 48px);
    grid-template-rows: repeat(12, 48px);
    gap: 0.5em;
  }

  .head {
    grid-column: 1 / 3;
    font-weight: 600;
  }

  .cell {
    grid-column: 3 / 7;
  }

  h1 {
    grid-column: 1 / 7;
  }

  .ub {
    border-bottom: 1px solid black;
  }
</style>
