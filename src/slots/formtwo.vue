<template>
   <div>
   	<formhelper>
	    <!-- Dynamic component -->
	      <div slot="form-header">
	         <h2>Please Fill Out Below Form Two</h2>
	         <p>New Form Fill</p>
	      </div>
	      <div slot="form-fields">
	           <input type="text" name="name" placeholder="Name" class="form-control">
	           <input type="email" name="email" placeholder="Email" class="form-control">
	      </div>
	      <div slot="form-controls">
	          <input type="submit" class="btn btn-primary" >
	      </div>
	     </formhelper>
 </div>
</template>


<script>
 
 import formhelper from '../slots/form.vue';

export default 
{
	 components:{
	   'formhelper': formhelper,
      },   
}
</script>