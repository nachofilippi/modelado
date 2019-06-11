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
        ...this.rungeKutta(this.parentData.funcion,parseFloat(this.parentData.x0), parseFloat(this.parentData.y0), parseFloat(this.parentData.n),parseFloat(this.parentData.h)).map(({ y, x }) => [x, y]),
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
      
      // values = (x,y)
      let values = [{ x: x0, y: y0 }];
      for (let x = x0 + h, i = 0; x <= n * h + x0; x += h, i++) {
          // (xi,yi)
          const prev = values[i];
          // k = (fxi,fyi)
          let k = [parser.eval(`f(${prev.y}, ${prev.x})`)]
          // k0 hasta k3, recorre las 4 k
          for (let j = 0; j < 3; j++){
              // kj = f(xi + h/2,yi + kjh/2)  si j=1 o j=2
              // kj = f(xi + h,yi + kjh) si j=3
              k.push(parser.eval(`f(${prev.y + (j === 2 ? 1 : 0.5) * k[j] * h}, 
                  ${prev.x + (j === 2 ? 1 : 0.5) * h})`));
          }
          values.push({
              // x = xi +h
              x,
              // yn+1 = yn + (1/6)h [k1+ 2k2 + 2k3 +k4]
              y: prev.y + 1 / 6 * h * (k.shift() + k.pop() + k.reduce((prev, curr) => prev + 2 * curr, 0))
          })
      }
      return values;
    }
  }
  
};
</script>
<style scoped>

</style>
