<script lang="ts">
  import ProgressBar from "./lib/ProgressBar.svelte";
  import Dates from "./dates.json";

  import dayjs from "dayjs";
  import isBetween from "dayjs/plugin/isBetween";

  dayjs.extend(isBetween);
</script>

<main>
  <!-- Yes, this is ugly as hell -->
  {#each Object.entries(Dates) as [yearKey, yearValue]}
    {#each Object.entries(yearValue) as [semKey, semValue]}
      {#each Object.entries(semValue) as [periodKey, periodValue]}
        {#if dayjs().isBetween(dayjs(periodValue.startDate), dayjs(periodValue.endDate), "day", "[]")}
          <ProgressBar
            name={yearKey + " " + semKey + " " + periodKey}
            startDate={periodValue.startDate}
            endDate={periodValue.endDate}
          />
        {/if}
      {/each}
    {/each}
  {/each}
</main>

<footer>
  <div>Time is in Hong Kong Time.</div>
  <div>Rome was not built in a day. This website is.</div>
  <a
    href="https://github.com/WessellUrdata/polyu-progress-bar"
    target="_blank"
    rel="noreferrer">Source Code</a
  >
</footer>
