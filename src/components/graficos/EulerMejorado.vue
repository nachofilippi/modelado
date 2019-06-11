<template>
<!-- https://www.youtube.com/watch?v=rv8OyDOP64g -->

<div >
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
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['y', 'x'],
        ...this.eulerMejorado(this.parentData.funcion,parseFloat(this.parentData.x0), parseFloat(this.parentData.y0), parseFloat(this.parentData.n),parseFloat(this.parentData.h)).map(({ x, y }) => [x, y]),

      ],
      chartOptions: {
        colors: ['green'],
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
    eulerMejorado (formula, x0, y0, n, h){
      const parser = math.parser();
      parser.eval(`f(y, x) = ${formula}`)

      x0 = parseFloat(x0);
      y0 = parseFloat(y0);    
      n = parseFloat(n);
      h = parseFloat(h);


      let values = [{ x: x0, y: y0 }];
      // xn+1 = xn +h
      for (let x = x0 + h, i = 0; x <= n * h + x0; x += h, i++) {
          const prev = values[i];
          // u(n+1)= yn + h (fxn,fyn)
          const pred = prev.y + h * parser.eval(`f(${prev.y}, ${prev.x})`);
          // yn+1 = yn + h/2 (m1 + m2)    m1= f(xn,yn)   m2= (fxn+1, fyn+1)
          const corr = prev.y + h * 0.5 * (parser.eval(`f(${prev.y}, ${prev.x})`) + parser.eval(`f(${pred}, ${x})`));
          values.push({
              x,
              y: corr
          })
      }
      return values;
    }
  }
};
</script>

