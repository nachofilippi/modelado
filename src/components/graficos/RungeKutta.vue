<template>
        <!-- // https://wikimedia.org/api/rest_v1/media/math/render/svg/e83e78cce0d440ff06da69da43da7ad3dd082b53 -->
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
  var valores = new Array();
export default {
  props: {
    parentData: Object
  },
  data () {
    return {
      chartData: [
        ['t', 'x'],
        ...this.rungeKutta(this.parentData.funcion,this.parentData.x0, this.parentData.y0, this.parentData.n,this.parentData.h).map(({ x, t }) => [x,t])
      ],
      chartOptions: {
        colors: ['gold'],
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
    rungeKutta(formula, t0, x0, n, h){
        const parser = math.parser();
        parser.eval(`f(x, t) = ${formula}`);  

        t0 = parseFloat(t0);
        h = parseFloat(h);
        x0 = parseFloat(x0);
        n = parseFloat(n);
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
  },
  // watch: { 
  //     	parentData: function(newVal, oldVal) { // watch it
  //         console.log('Prop changed: ', newVal, ' | was: ', oldVal)
  //       }
  //     }
};
</script>
<style scoped>

</style>
