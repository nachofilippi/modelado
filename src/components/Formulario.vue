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
                                    <input type="text" id="funcion" class="form-control" placeholder="f(x,y)"
                                        :value="userData.funcion" @input="userData.funcion = $event.target.value">
                                </div>
                                <div class="form-group col-lg-4 col-md-4 col-sm-4">
                                    <label for="x0">x0</label>
                                    <input type="number" id="x0" class="form-control" v-model="userData.x0">
                                </div>
                                <div class="form-group col-lg-4 col-md-4 col-sm-4">
                                    <label for="y0">y0 </label>
                                    <input type="number" id="y0" class="form-control" v-model="userData.y0">
                                </div>
                                <div class="form-group col-lg-4 col-md-4 col-sm-4">
                                    <label for="n">n <span style="color:red">*</span></label>
                                    <input type="number" id="n" class="form-control" v-model="userData.n">
                                </div>
                                <div class="form-group col-lg-4 col-md-4 col-sm-4">
                                    <label for="h">h <span style="color:red">*</span></label>
                                    <input type="number" id="h" class="form-control" v-model="userData.h">
                                </div>
                                <div class="form-group col-lg-4 col-md-3 col-sm-4">
                                    <button style="margin-top:1.8em" class="btn btn-primary btn-block" @click.prevent="emitToParent">INICIAR
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import Switch from './Switch.vue';

export default {
    data() {
            return {
                userData:{
                    funcion: '',
                    x0: 0,
                    y0: 0,
                    n: 0,
                    h: 0,
                    b:0,
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
                console.log(this.userData);
              this.$emit('recibirDatos', this.userData)
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
