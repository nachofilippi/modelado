<template>
<div style="margin:3em">
        <div class="row">
            <app-formulario v-on:recibirDatos="onChildClick"></app-formulario>
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="col-xs-4 col-md-4 col-lg-4 col-sm-4">
                    <app-euler v-model="dataSwitch"></app-euler>
                </div>
                <div class="col-xs-4 col-md-4 col-lg-4 col-sm-4">
                    <app-euler-mejorado v-model="dataSwitch"></app-euler-mejorado>
                </div>
                <div class="col-xs-4 col-md-4 col-lg-4 col-sm-4">
                    <app-runge v-model="dataSwitch"></app-runge>
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
            funcion: '',
            t0:'',
            x0:'',
            n:'',
            h:'',
            b:'',
            intervalo:''
        }
    },
    components: {
        appEuler: Euler,
        appRunge: RungeKutta,
        appEulerMejorado: EulerMejorado,
        appFormulario: Formulario,
    },
    methods:{
        onChildClick (funcion,t0,x0,n,h,b,intervalo) {
            this.funcion = funcion,
            this.t0 = t0,
            this.x0 = x0,
            this.n = n,
            this.h = h,
            this.b = b,
            this.intervalo = intervalo
        }
    }
    
}
</script>

<style>


</style>
