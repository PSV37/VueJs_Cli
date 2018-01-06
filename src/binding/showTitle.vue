<template>
 <div>
 	<div class="container">
 		<h2>All Blog Titles</h2>
 		<input type="text" v-model="search" placeholder="Search Title" class="col-md-12 form-control"><br><br>
		    <div v-for="blog in Filterbolg" class="single-blog">
		    	<h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
		    </div>
 	</div>
  </div>
</template>

<script>
 
 import searchBlog from '../mixin/searchBlog';

export default {
  data () {
    return {
       blogs:[],
       search:'',
    }
  },

  methods:{
  },

    created(){
   	  this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
          //console.log(data);
          this.blogs = data.body.slice(0,7);
   	  })
   },

  /* computed:{
   	 Filterbolg:function(){
   	 	return this.blogs.filter((blog) => {
   	 		return blog.title.match(this.search);
   	 	})
   	 }
   },*/

//We can declear component as locally
   filters:{
  /* 	'to-uppercase':function(value){
      return value.toUpperCase();
   	}*/
      toUppercase(value){
           return value.toUpperCase();
        }
    },

    directives:{
    	'rainbow':{
    		bind(el,binding,vnode){
    			el.style.color ='#' + Math.random().toString(16).slice(2,8);
    		}
    	}
    },

    mixins:[searchBlog]
}
</script>

<style scoped>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
