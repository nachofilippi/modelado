<template>
<div style="margin:3em">
        <div class="row">
            <app-formulario v-on:recibirDatos="onChildClick"></app-formulario>
            <div class="container">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="col-xs-4 col-md-4 col-lg-4 col-sm-4 ">
                    <button class="btn btn-info btn-block" @click="showEuler">Euler</button>
                    <br>
                    <app-euler v-if="renderComponentEuler" v-model="dataSwitch" :parentData="myData"></app-euler>
                </div>
                <div class="col-xs-4 col-md-4 col-lg-4 col-sm-4 ">
                    <button class="btn btn-info btn-block" @click="showEulerMejorado">Euler Mejorado</button>
                    <br>
                    <app-euler-mejorado v-if="renderComponentEulerMejorado" :parentData="myData" v-model="dataSwitch"></app-euler-mejorado>
                </div>
                <div class="col-xs-4 col-md-4 col-lg-4 col-sm-4 ">
                    <button class="btn btn-info btn-block" @click="showRungeKutta">Runge Kutta</button>
                    <br>
                    <app-runge v-if="renderComponentRungeKutta" :parentData="myData" v-model="dataSwitch"></app-runge>
                </div>

            </div>
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
            renderComponentEuler: false,
            renderComponentEulerMejorado: false,
            renderComponentRungeKutta: false,
            myData:{
                f: '',
                x0:'',
                y0:'',
                n:'',
                h:'',
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
        showEuler(){
            console.log('data: ', this.myData);
            this.forceRerenderEuler();
        },
        showEulerMejorado(){
            console.log('data: ', this.myData);
            this.forceRerenderEulerMejorado();
        },
        showRungeKutta(){
            console.log('data: ', this.myData);
            this.forceRerenderRungeKutta();
        },
        forceRerenderEuler() {
            // Remove my-component from the DOM
            this.renderComponentEuler = false;
            
            this.$nextTick(() => {
                // Add the component back in
                this.renderComponentEuler = true;
            });
        },
        forceRerenderEulerMejorado() {
            // Remove my-component from the DOM
            this.renderComponentEulerMejorado = false;
            
            this.$nextTick(() => {
                // Add the component back in
                this.renderComponentEulerMejorado = true;
            });
        },
        forceRerenderRungeKutta() {
            // Remove my-component from the DOM
            this.renderComponentRungeKutta = false;
            
            this.$nextTick(() => {
                // Add the component back in
                this.renderComponentRungeKutta = true;
            });
        }

    }
    
}
</script>

<style>


</style>
