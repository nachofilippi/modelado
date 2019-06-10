<template>
  <div class="jumbotron jumbotron-fluid">
    <h3 style="text-align:center">Euler</h3>
    <div ref="reload">
      <GChart type="LineChart" :data="chartData" :options="chartOptions" />

    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 Flex">
        <button class="btn btn-primary" @click.prevent="submit">INICIAR</button>
      </div>
    </div>
    <h3></h3>
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
      renderComponent: false,
      chartData: [
        ['t', 'x'],
        ...this.eulerComun(this.parentData.funcion,this.parentData.x0, this.parentData.y0, this.parentData.n,this.parentData.h).map(({ x, t }) => [x,t])
      ],
      chartOptions: {
        colors: ['red'],
        hAxis: {
            title: 't',
        },
        vAxis: {
            title: 'x',
        }
      },
      
    }
  },methods:{
    eulerComun(formula, t0, x0, n, h){
       const parser = math.parser();
      parser.eval(`f(x, t) = ${formula}`);
      
      t0 = parseFloat(t0);
      h = parseFloat(h);
      x0 = parseFloat(x0);
      n = parseFloat(n);
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
      var that = this;
      valores = this.eulerComun(this.parentData.funcion,this.parentData.x0, this.parentData.y0, this.parentData.n,this.parentData.h);
      console.log('valores: ', valores);
      that.$forceUpdate()
  }

  },
  // watch: { 
  //     	parentData: function(newVal, oldVal) { // watch it
  //         console.log('Prop changed: ', newVal, ' | was: ', oldVal)
  //       }
  //     }
};
</script>

