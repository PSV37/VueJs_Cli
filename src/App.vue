<template>
 <div>
   <!--  <add-blog></add-blog> -->
 <!--   <show-blog></show-blog>
 <show-title></show-title> -->
  <app-nav></app-nav>
  <router-view></router-view>
  </div>
</template>

<script>
 import addblog from './binding/addBlog.vue';
 import showBlog from './binding/showBlog.vue';
 import showTitle from './binding/showTitle.vue';
 import navebar from './binding/navbar.vue';

export default {
  components:{
    'add-blog':addblog,
    'show-blog': showBlog,
    'show-title':showTitle,
    'app-nav':navebar
  },

  data () {
    return {
    
    }
  },
}
</script>

<style scoped>

</style>
