<script>
  export let value = 10;
  export let cost = 0;
  export let remain = 25;

  const costs = [0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 2, 2, 3, 3, 4];
  const min = 7;
  const max = 18;

  function inc() {
    if (max <= value) return;
    if (remain < costs[value]) return;

    cost += costs[value];
    value += 1;
  }

  function dec() {
    if (value <= min) return;

    value -= 1;
    cost -= costs[value];
  }
</script>

<div class="group">
  <button class="btn" on:click={dec}>-</button>
  <span class="btn">{value}</span>
  <button class="btn" disabled={remain < costs[value]} on:click={inc}>+</button>
  <span class="btn">{cost}</span>
</div>

<style>
  .group {
    margin-bottom: 0.5em;
  }

  .btn {
    font-size: 1.5em;
    padding: 0.5em;
    width: 48px;
    height: 48px;
  }
</style>