<script>
  export let value;
  export let items;

const select = item => () => value = item;
</script>

<div class="panel">
  {#each items as item}
    <button on:click={select(item)} class="btn btn-outline-dark"
      >{item}</button
    >
  {/each}
</div>

<style>
  .panel {
    display: grid;
    grid-template-columns: repeat(3, 6em);
    grid-template-rows: repeat(10, 6em);
    grid-gap: 1em;
  }
</style>
