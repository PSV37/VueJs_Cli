<template>
 <div>
   <header>
     <h2 v-on:click="changeTitle">{{title}}</h2>
   </header>
  </div>
</template>

<script>

import { bus } from '../main';

export default {
  props:{
    title:{
      type:String
    }
  },

  data () {
    return {
      title:'',
    }
  },
  methods:{
    changeTitle:function(){
      //this.$emit('changeTitle','New App Header');
      this.title = 'Change New Data';
      bus.$emit('changeTitle','Change New Data');
    }
  }
}
</script>

<style scoped>
header
{
  background: lightgreen;
  padding: 10px;
}
h2
{
  color: #222;
  text-align: center;
}
</style>
