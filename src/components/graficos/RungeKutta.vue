<template>
<!-- https://wikimedia.org/api/rest_v1/media/math/render/svg/e83e78cce0d440ff06da69da43da7ad3dd082b53s -->
<div>
     <GChart
    type="LineChart"
    :data="chartData"
    :options="chartOptions"   
    />
</div>  
</template>
<script>
// https://mathjs.org/docs/expressions/syntax.html
import * as math from 'mathjs';

export default {
  props: {
    parentData: Object
  },
  data () {
    return {
      chartData: [
        ['y', 'x'],
        ...this.rungeKutta(this.parentData.funcion,parseInt(this.parentData.x0), parseInt(this.parentData.y0), parseInt(this.parentData.n),parseInt(this.parentData.h)).map(({ y, x }) => [x, y]),
      ],
        chartOptions: {
            colors: ['orange'],
            hAxis: {
           title: 'x',
           },
          vAxis: {
           title: 'y',
          },
        height: 500,
        width: 500, 
      }
    }
  },
  methods:{
    rungeKutta (formula, x0, y0, n, h){
      const parser = math.parser();
      parser.eval(`f(y, x) = ${formula}`);

      x0 = parseFloat(x0);
      y0 = parseFloat(y0);    
      n = parseFloat(n);
      h = parseFloat(h);

      let values = [{ x: x0, y: y0 }];
      for (let x = x0 + h, i = 0; x <= n * h + x0; x += h, i++) {
          const prev = values[i];

          let ks = [parser.eval(`f(${prev.y}, ${prev.x})`)]
          for (let k = 0; k < 3; k++)
              ks.push(parser.eval(`f(${prev.y + (k === 2 ? 1 : 0.5) * ks[k] * h}, 
                  ${prev.x + (k === 2 ? 1 : 0.5) * h})`));

          values.push({
              x,
              y: prev.y + 1 / 6 * h * (ks.shift() + ks.pop() + ks.reduce((prev, curr) => prev + 2 * curr, 0))
          })
      }
      return values;
    }
  }
  
};
</script>
<style scoped>

</style>
