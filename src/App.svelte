<script>
  import Alignment from "./Alignment.svelte";
  import Classes from "./Classes.svelte";

  let pc = {
    alignment: null,
    klasses: [],
  };
</script>

<main>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <table class="table table-striped">
          <tbody>
            <tr>
              <th>属性</th>
              <td>{pc.alignment}</td>
            </tr>
            {#each pc.klasses as klass, i}
              <tr>
                <th>lv{i + 1}</th>
                <td>{klass}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
      <div class="col-6">
        {#if !pc.alignment}
          <p>アラインメントを選択してください</p>
          <Alignment bind:alignment={pc.alignment} />
        {:else}
          <p on:click={() => (pc.alignment = null)}>
            アラインメント：{pc.alignment}
          </p>
          <Classes {pc} bind:klasses={pc.klasses} />
        {/if}
      </div>
    </div>
  </div>
</main>

<style>
</style>
