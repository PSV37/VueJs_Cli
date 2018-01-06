<template>
	<div id="add-blog">
		<h3>Add New Blog</h3>
		<form v-if="!submitted">
			<label>Blog Title:</label>
			  <input type="text" name="Name" v-model.lazy="blog.title" placeholder="Blog Title">
			<label>Blog Content:</label>
			  <textarea placeholder="Blog Content" v-model.lazy="blog.content"></textarea>

			<div id="checkboxes">
				<label>HTML</label>
				<input type="checkbox" value="html" v-model="blog.categories"> 
				<label>CSS</label>
				<input type="checkbox" value="css" v-model="blog.categories"> 
				<label>JAVA</label>
				<input type="checkbox" value="java" v-model="blog.categories"> 
				<label>PHP</label>
				<input type="checkbox" value="php" v-model="blog.categories"> 
			</div>
			
			 <div id="selectbox">
			 	<select v-model="blog.author">
			 		<option value="">Select Authers</option>
			 		<option v-for="author in authors">{{author}}</option>
			 	</select>
			 </div><br>

			 <button v-on:click.prevent="addblog" class="btn btn-primary">Add Blog</button>
		</form>
		<div v-if="submitted">
           <h3>Thanks For Adding Your Post</h3>
		</div>

		<div id="preview">
			<h3>Preview Blog</h3>
			<p class="para">Blog Title:<b><i>{{ blog.title }}</i></b>
			<p><h4>Blog Content:</h4> </p>
			<p><b><i>{{ blog.content }}</i></b></p>
			<p><h4>Blog Category :</h4> </p>
			<ul>
				<li v-for="catogry in blog.categories">{{catogry}}</li>
			</ul>
			<p style="font-size:20px">Author : <b><i>{{blog.author}}</i></b></p>
		</div>
	</div>
</template>

<script type="text/javascript">
	
export default
{
	data(){
		return{
         blog:{
         	 title : '',
             content :'',
             categories:[],
             author :''
         },
         authors : ['The html vender','The Vue Vender','The Php vender','The java Vender'],
         submitted :false
		}
	},

	methods:{
		addblog :function(){
          this.$http.post('https://phpvp-f531a.firebaseio.com/posts.json',this.blog).then(function(data){
          	 console.log(data);
          	this.submitted = true
          })
		}
	}
}	
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}

.para
{
	font-size: 20px;
}

#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}
</style>