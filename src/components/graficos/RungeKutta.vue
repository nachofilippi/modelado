<template>
<div class="jumbotron jumbotron-fluid">
    <h3 style="text-align:center">Runge-Kutta</h3>
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
        ['X', 'Y'],
        [1, 3],
        [12, -5],
        [-10, 20],
        [24, -3]
      ],
        chartOptions: {
            colors: ['gold']
      }
    }
  }
};
</script>
<style scoped>

</style>
