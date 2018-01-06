<template>
	<div class="container">
		<h1>{{blog.title}}</h1>
		<article>{{blog.content}}</article>
	</div>

</template>

<script type="text/javascript">
	
export default
{
   data(){
   	return{
   		id:this.$route.params.id,
   		blog:[]
   	}
   },

   created(){
   	this.$http.get('https://phpvp-f531a.firebaseio.com/posts/'+ this.id + '.json').then(function(data){
   		console.log(data);
   		return data.json();
   	//	this.blog = data.body;
   	}).then(function(data){
        this.blog = data.body;
   	})

   }
}
</script>