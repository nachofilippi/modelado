<template>
<div class="jumbotron jumbotron-fluid">
    <h3 style="text-align:center">Euler Mejorado</h3>
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
        [1, 10],
        [3, -5],
        [-10, 16],
        [40, -3]
      ],
      chartOptions: {
        colors: ['blue']
      }
    }   
  }
};
</script>
<style scoped>

</style>
