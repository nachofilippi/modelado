<template>
<!-- https://wikimedia.org/api/rest_v1/media/math/render/svg/e83e78cce0d440ff06da69da43da7ad3dd082b53s -->

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
import * as math from 'mathjs';

export default {
  data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['x', 't'],
        ...this.rungeKutta(this.parentData.funcion,parseInt(this.parentData.x0), parseInt(this.parentData.y0), parseInt(this.parentData.n),parseInt(this.parentData.h)).map(({ x, t }) => [x, t]),
      ],
        chartOptions: {
            colors: ['gold']
      }
    }
  },
  methods:{
    rungeKutta (f, t0, x0, n, h){
      const parser = math.parser();
      parser.eval(`f(x, t) = ${f}`);

      t0 = parseFloat(t0);
      x0 = parseFloat(x0);    
      n = parseFloat(n);
      h = parseFloat(h);

      let values = [{ t: t0, x: x0 }];
      for (let t = t0 + h, i = 0; t <= n * h + t0; t += h, i++) {
          const prev = values[i];

          let ks = [parser.eval(`f(${prev.x}, ${prev.t})`)]
          for (let k = 0; k < 3; k++)
              ks.push(parser.eval(`f(${prev.x + (k === 2 ? 1 : 0.5) * ks[k] * h}, 
                  ${prev.t + (k === 2 ? 1 : 0.5) * h})`));

          values.push({
              t,
              x: prev.x + 1 / 6 * h * (ks.shift() + ks.pop() + ks.reduce((prev, curr) => prev + 2 * curr, 0))
          })
      }
      return values;
    }
  }
  
};
</script>
<style scoped>

</style>
