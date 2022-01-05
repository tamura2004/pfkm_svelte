<script>
  import Panel from "./Panel.svelte"

  export let alignment = null;

  let items = [
    "秩序にして善",
    "中立にして善",
    "混沌にして善",
    "秩序にして中立",
    "真なる中立",
    "混沌にして中立",
    "秩序にして悪",
    "中立にして悪",
    "混沌にして悪",
  ];
</script>

<Panel {items} bind:value={alignment}/>
