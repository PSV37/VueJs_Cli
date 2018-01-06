<template>
   <div>
   	<formhelper>
	    <!-- Dynamic component -->
	      <div slot="form-header">
	         <div>
	         	<h2>Please Fill Out Below Form One</h2>
	            <p>New Form Fill- </p>
	         </div>
	      </div>
	      <div slot="form-fields">
	           <input type="text" name="name" placeholder="Name" class="form-control">
	           <textarea class="form-control" placeholder="Write Somthing To here"></textarea>
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

