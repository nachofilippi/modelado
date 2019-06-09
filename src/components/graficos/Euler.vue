<template>
  <div class="jumbotron jumbotron-fluid">
    <h3 style="text-align:center">Euler</h3>
    <GChart type="LineChart" :data="chartData" :options="chartOptions" />
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 Flex">
        <button class="btn btn-primary" @click.prevent="submit">INICIAR</button>
      </div>
    </div>
    <h3></h3>
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
        [100,200],
        [50,20],
        [3,-10]
        // ...myData.map(({ x, y }) => [x, y])
      ],
      chartOptions: {
        colors: ['red'],
      },
      
    }
  },methods:{
    eulerComun(formula, t0, x0, n, h){
       const parser = math.parser();
    parser.eval(`f(x, t) = ${formula}`)

    
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
    }
  }
};
</script>
<style scoped>

</style>
