<script lang="ts">
  import dayjs from "dayjs";

  const { name, startDate, endDate } = $props();

  const totalTime = dayjs(endDate).diff(dayjs(startDate), "millisecond");

  let currentTime = $state(dayjs());
  const progress = $derived(
    (
      (dayjs(currentTime).diff(dayjs(startDate), "millisecond") / totalTime) *
      100
    ).toFixed(5)
  );

  $effect(() => {
    const interval = setInterval(() => {
      currentTime = dayjs();
    }, 200);

    return () => clearInterval(interval);
  });

  const progressColor = "rgb(160, 36, 55)";
  const progressBgColor = "gray";
</script>

<div class="progress-container">
  <div class="progress-label">{name}</div>

  <div
    class="progress-bar"
    style="background: linear-gradient(to right, {progressColor} 0%, {progressColor} {progress}%, {progressBgColor} {progress}%, {progressBgColor} 100%);"
    role="progressbar"
    aria-valuenow={parseFloat(progress)}
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <div class="progress-value">
      {progress}%
    </div>
  </div>
</div>
