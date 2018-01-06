<template>
 <div>
    <!--  //<form-one><h1></h1></form-one> -->
    <keep-alive>
   <component v-bind:is="component"></component>
   </keep-alive>
   <button v-on:click="component ='form-one' " class="btn btn-primary" >Form One</button>
   <button v-on:click="component ='form-two' "  class="btn btn-info">Form two</button>
  </div>
</template>

<script>
 import formOne from './slots/formone.vue';
 import formTwo from './slots/formtwo.vue';

export default {
  components:{
    'form-one':formOne,
    'form-two':formTwo,
  },


  data () {
    return {
      component : 'form-two',
    }
  },
}
</script>

<style scoped>
.btn-primary
{
      margin-left: 17%;
    margin-top: 3%;
}

.btn-info
{
     
    margin-top: 3%;
}
</style>
