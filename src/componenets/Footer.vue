<template>
 <div>
  <footer> <p v-on:click="changeFooter">{{footer}}</p></footer>
  </div>
</template>

<script>

import { bus } from '../main';

export default {
props:{
  footer:{
    type:String
  }
},

  data () {
    return {
      footer : ''
    }
  },

  methods : {
    changeFooter:function(){
      //this.$emit('changeFooter','Copyright 2017 vue Ninjas');
     // this.footer = 'Copyright 2017 vue Ninjas'

    }
  },

  created(){
     bus.$on('changeTitle',(data) => {
         this.footer = data;
      })
  }
}
</script>

<style scoped>

footer
{
  background: #222;
  padding: 6px
}

p{
  color: lightgreen;
  text-align: center;
}
</style>
