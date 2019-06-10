<template>
  <div class="jumbotron jumbotron-fluid">
    <h3 style="text-align:center">Euler</h3>
    <GChart type="LineChart" :data="chartData" :options="chartOptions" />

  </div>
</template>
<script>
import * as math from 'mathjs'

export default {
  
  props: {
    parentData: Object
  },
  data () {
    return {
      valores : [],
      chartData: [
        ['x', 't'],
        // [100,200],
        // [50,20],
        // [3,-10]
        ...this.eulerComun(this.parentData.funcion,parseInt(this.parentData.x0), parseInt(this.parentData.y0), parseInt(this.parentData.n),parseInt(this.parentData.h)).map(({ x, t }) => [x, t]),
      ],
      chartOptions: {
        colors: ['red'],
      },
      
    }
  },methods:{
    eulerComun(formula, t0, x0, n, h){
    const parser = math.parser();
    parser.eval(`f(x, t) = ${formula}`)

    t0 = parseFloat(t0);
    x0 = parseFloat(x0);    
    n = parseFloat(n);
    h = parseFloat(h);

    let values = [{ t: t0, x: x0 }];
        console.log(t0 + h, n * h + t0);
    for (let t = t0 + h, i = 0; t <= n * h + t0; t += h, i++) {
        const prev = values[i];
        values.push({
            t,
            x: prev.x + h * parser.eval(`f(${prev.x}, ${prev.t})`)
        })
    }
    return values;
},
    submit(){
      this.valores = this.eulerComun(this.parentData.funcion,this.parentData.x0, this.parentData.y0, this.parentData.n,this.parentData.h);
      console.log('valores: ', this.eulerComun(this.parentData.funcion,parseInt(this.parentData.x0), parseInt(this.parentData.y0), parseInt(this.parentData.n),parseInt(this.parentData.h)));
      window.location.reload();
    }
  }
};
</script>
<style scoped>

</style>
