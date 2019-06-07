<template>
<div style="margin:3em">
        <div class="row">
            <app-formulario v-on:recibirDatos="onChildClick"></app-formulario>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="col-xs-4 col-md-4 col-lg-4 col-sm-4">
                    <app-euler v-model="dataSwitch" :parentData="myData"></app-euler>
                </div>
                <div class="col-xs-4 col-md-4 col-lg-4 col-sm-4">
                    <app-euler-mejorado v-model="dataSwitch"></app-euler-mejorado>
                </div>
                <div class="col-xs-4 col-md-4 col-lg-4 col-sm-4">
                    <app-runge v-model="dataSwitch"></app-runge>
                </div>
                <button @click="showData">DAT</button>
            </div>
        </div>
    
</div>
</template>
<script>
import Euler from './components/graficos/Euler.vue';
import EulerMejorado from './components/graficos/EulerMejorado.vue';    
import RungeKutta from './components/graficos/RungeKutta.vue';
import Formulario from './components/Formulario.vue';

export default {
    data(){
        return {
            myData:{
                f: '',
                x0:'',
                y0:'',
                n:'',
                h:'',
                b:'',
                intervalo:''
            }
            // posts: [
            //     { id: 1, f: '' },
            //     { id: 2, x0: '' },
            //     { id: 3, y0: '' },
            //     { id: 4, n: '' },
            //     { id: 5, h: '' },
            //     { id: 6, b: '' },
            //     { id: 7, intervalo: '' },
            // ]
        }
    },
    components: {
        appEuler: Euler,
        appRunge: RungeKutta,
        appEulerMejorado: EulerMejorado,
        appFormulario: Formulario,
    },
    methods: {
        onChildClick(myData) {
            console.log(myData);
            this.myData = myData;
        },
        showData(){
            console.log('data: ', this.myData);
            
        }

    }
    
}
</script>

<style>


</style>
