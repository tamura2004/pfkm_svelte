<script>
  export let pc = null;
  export let klasses = [];

  let classes = [
    ["アルケミスト", () => true],
    ["バーバリアン", () => !pc.alignment.includes("秩序")],
    ["バード", () => true],
    ["ドルイド", () => pc.alignment.includes("中立")],
    ["ファイター", () => true],
    ["インクィジター", () => true],
    ["キネティスト", () => true],
    ["メイガス", () => true],
    ["モンク", () => pc.alignment.includes("秩序")],
    ["パラディン", () => pc.alignment === "秩序にして善"],
    ["レンジャー", () => true],
    ["ローグ", () => true],
    ["スレイヤー", () => true],
    ["ソーサラー", () => true],
    ["ウィザード", () => true],
  ];

  const select = (c) => () => (klasses = [...klasses, c]);
</script>

<div class="panel">
  {#each classes as [c, cond]}
    {#if cond()}
      <button class="btn btn-outline-dark" on:click={select(c)}>
        {c}
      </button>
    {/if}
  {/each}
</div>

<style>
  .panel {
    display: grid;
    grid-template-columns: repeat(3, 6em);
    grid-template-rows: repeat(20, 6em);
    grid-gap: 1em;
  }
</style>
