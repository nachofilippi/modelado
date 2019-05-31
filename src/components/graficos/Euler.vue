<template>
<div class="jumbotron jumbotron-fluid">
    <h3 style="text-align:center">Euler</h3>
     <GChart
    type="LineChart"
    :data="chartData"
    :options="chartOptions"
    />
</div>  
</template>
<script>
export default {
  data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['x', 't'],
        [1, 1000],
        [3, 1170],
        [10, 660],
        [20, 1030]
      ],
      chartOptions: {
        colors: ['red'],
      }
    }
  }
};
</script>
<style scoped>

</style>
