<template>
 <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>

    <app-ninja v-bind:ninjas="ninjas"></app-ninja>
    

    <app-footer v-bind:footer="footer" v-on:changeFooter="updateFooter($event)"></app-footer>
   

  </div>
</template>

<script>
import Header from './componenets/Header.vue';
import Footer from './componenets/Footer.vue';
import Ninja from './componenets/Ninaja.vue';

export default {
   components:{
  'app-header':Header,
  'app-footer':Footer,
  'app-ninja':Ninja
 },

  data () {
    return {
    ninjas : [
      {name:'sapna',speciality:'very good',show:false},
      {name:'seema',speciality:'cleaver',show:false},
      {name:'balaji',speciality:'talented',show:false},
      {name:'shilpa',speciality:'looking good',show:false},
      {name:'Shalu',speciality:'looking good',show:false},
      {name:'Vinayak',speciality:'looking good',show:false},
      ],
      title:'App Ninja Header',
      footer : 'App Ninja Footer',
    }
  },

  methods : {
       updateTitle:function(changeTitle){
          this.title = changeTitle;
       },

       updateFooter:function(changeFooter){
        this.footer = changeFooter;
       }
  }
}
</script>

<style scoped>

</style>
