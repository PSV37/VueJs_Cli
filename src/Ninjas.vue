<template>
 <div>
    <h2>{{title}}</h2>
    <ul>
      <li v-for="ninja in ninjas1">{{ninja}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Ninja App',
      ninjas1 : ['sapna','seema','balaji','shilpa']
    }
  },

  methods : {
    greeting:function(){
      return 'return form Ninjas function';
    }
  }
}
</script>

<style scoped>
h2{
  color:red;
}
</style>
