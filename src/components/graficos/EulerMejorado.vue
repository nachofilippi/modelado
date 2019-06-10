<template>
<div class="jumbotron jumbotron-fluid">
    <h3 style="text-align:center">Euler Mejorado</h3>
     <GChart type="LineChart" :data="chartData" :options="chartOptions" />
</div>  
</template>
<script>
import * as math from 'mathjs';

  var valores = new Array();
export default {
  props: {
    parentData: Object
  },
  data () {

    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['t', 'x'],
        ...this.eulerMejorado(this.parentData.funcion,this.parentData.x0, this.parentData.y0, this.parentData.n,this.parentData.h).map(({ x, t }) => [x,t])
      ],
      chartOptions: {
        colors: ['blue'],
        hAxis: {
            title: 't',
        },
        vAxis: {
            title: 'x',
        }
      },
    }   
  },
  methods:{

    eulerMejorado (formula, t0, x0, n, h) {

      const parser = math.parser();
      parser.eval(`f(x, t) = ${formula}`)
      
        t0 = parseFloat(t0);
        h = parseFloat(h);
        x0 = parseFloat(x0);
        n = parseFloat(n);

      let values = [{ t: t0, x: x0 }];
      for (let t = t0 + h, i = 0; t <= n * h + t0; t += h, i++) {
          const prev = values[i];
          const predictor = prev.x + h * parser.eval(`f(${prev.x}, ${prev.t})`);
          const corrector = prev.x + h * 0.5 * (parser.eval(`f(${prev.x}, ${prev.t})`)
              + parser.eval(`f(${predictor}, ${t})`));
          values.push({
              t,
              x: corrector
          })
      }
      return values;

    }
  },
  watch: { 
      	parentData: function(newVal, oldVal) { // watch it
          console.log('Prop changed: ', newVal, ' | was: ', oldVal)
        }
      }
};
</script>

