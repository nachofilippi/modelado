<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3>Datos</h3>
                            <div class="panel-body">

                                <div class="form-group col-lg-4 col-md-4 col-sm-4">
                                    <label for="funcion">Funcion <span style="color:red">*</span></label>
                                    <input type="text" id="funcion" class="form-control" placeholder="f(x,t)"
                                        :value="userData.funcion" @input="userData.funcion = $event.target.value">
                                </div>
                                <div class="form-group col-lg-4 col-md-4 col-sm-4">
                                    <label for="t0">t0 <span style="color:red">*</span></label>
                                    <input type="number" id="t0" class="form-control" v-model="userData.t0">
                                </div>
                                <div class="form-group col-lg-4 col-md-4 col-sm-4">
                                    <label for="x0">x0 <span style="color:red">*</span></label>
                                    <input type="number" id="x0" class="form-control" v-model="userData.x0">
                                </div>
                                <div class="form-group col-lg-3 col-md-3 col-sm-3">
                                    <label for="n">n <span style="color:red">*</span></label>
                                    <input type="number" id="n" class="form-control" v-model="userData.n">
                                </div>
                                <div class="form-group col-lg-3 col-md-3 col-sm-3">
                                    <label for="h">h</label>
                                    <input type="number" id="h" class="form-control" v-model="userData.h">
                                </div>
                                <div class="form-group col-lg-3 col-md-3 col-sm-3">
                                    <label for="b">b</label>
                                    <input type="number" id="b" class="form-control" v-model="userData.b">
                                </div>
                                <div class="form-group col-lg-3 col-md-3 col-sm-3">
                                    <label for="intervalo">Intervalo(ms)</label>
                                    <input type="number" id="intervalo" class="form-control"
                                        v-model="userData.intervalo">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 Flex">
                    <button class="btn btn-primary" @click.prevent="emitToParent">INICIAR
                    </button>
                    <app-switch v-model="dataSwitch"></app-switch>
                </div>
            </div>
        </form>
        <hr>
        <div class="row justify-content-md-center" v-if="dataSwitch">
            <div class="col-md-auto">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Ingresados</h4>
                    </div>
                    <div class="panel-body">
                        <p>Funcion: {{ userData.funcion }} </p>
                        <p>t0: {{ userData.t0 }} </p>
                        <p>x0: {{ userData.x0 }}</p>
                        <p>n: {{ userData.n }}</p>
                        <p>h: {{ userData.h }}</p>
                        <p>b: {{ userData.b }}</p>
                        <p>Intervalo (ms): {{ userData.intervalo }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Switch from './Switch.vue';

export default {
    data() {
            return {
                userData:{
                    funcion: '',
                    t0: 0,
                    x0: 0,
                    n: 0,
                    h: 0,
                    b:0,
                    intervalo: 0,
                },
                dataSwitch: true,
                isSubmitted: false,

            }
        },
        components:{
            appSwitch: Switch,
        },
        methods: {
            // submitted() {
            //     this.isSubmitted = true;
            // },
            emitToParent (event) {
              this.$emit('recibirDatos', this.userData.funcion, this.userData.t0, this.userData.x0, this.userData.n, this.userData.h, this.userData.b, this.userData.intervalo)
            },
        }
}
</script>
<style>
.Flex{
    display: flex !important;
    justify-content: space-between
}
</style>
