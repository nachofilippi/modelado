<template>
 <div>
    <GChart style="width:30em" type="LineChart" :data="chartData" :options="chartOptions"/>
 </div>
</template>
<script>
// https://mathjs.org/docs/expressions/syntax.html
import * as math from 'mathjs'


  var valores = new Array();
export default {

  props: {
    parentData: Object
  },
  data () {

    return {
      renderComponent: false,
      chartData: [
        ['y', 'f(x)'],
        // [100,200],
        // [50,20],
        // [3,-10]
        ...this.eulerComun(this.parentData.funcion,parseFloat(this.parentData.x0), parseFloat(this.parentData.y0), parseFloat(this.parentData.n),parseFloat(this.parentData.h)).map(({ y, x }) => [x, y]),
      ],
      chartOptions: {
        colors: ['red'],
        hAxis: {
           title: 'x',
        },
        vAxis: {
           title: 'y',
        },
        height: 500,
        width: 500,
      },
    }
  },methods:{
      eulerComun(formula, x0, y0, n, h){
      const parser = math.parser();
      parser.eval(`f(y, x) = ${formula}`)

      x0 = parseFloat(x0);
      y0 = parseFloat(y0);    
      n = parseFloat(n);
      h = parseFloat(h);

      let values = [{ x: x0, y: y0 }];

      // console.log(x0 + h, n * h + x0);
      for (let x = x0 + h, i = 0; x <= n * h + x0; x += h, i++) {
          const prev = values[i];
          values.push({
              // xn+1 = xn + h
              x,
              // yi+1 = yi =hf(xi,yi)
              y: prev.y + h * parser.eval(`f(${prev.y}, ${prev.x})`)
          })
      }
      return values;
    }, 
  } 
}
</script>