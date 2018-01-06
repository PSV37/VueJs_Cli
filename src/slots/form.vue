<template>
	  <div>
	  	 <div class="row"> 
	  	 	 <div class="col-md-2">
	  	 	 </div>
	  	 	 <div class="col-md-6">
					<form>
						<div id="form-header">
							<slot name="form-header"></slot>
						</div>

						<div id="form-fields">
							<slot name="form-fields"></slot>
						</div>

						<div id="form-controls">
							<slot name="form-controls"></slot>
						</div>

						<div id="form">
						    <ul>
						    	<li><a href="#">link 1</a></li>
						    	<li><a href="#">link 1</a></li>
						    	<li><a href="#">link 1</a></li>
						    	<li><a href="#">link 1</a></li>
						    </ul>
					    </div>
					</form>	
				</div>
	  	 	 <div class="col-md-2">
	  	 	 </div>
	  	 </div>
	  </div>
</template>

<style type="text/css">
 #form-header{
 	background: darkgray;
 	text-align: center;
 }
 #form-header:hover{
 	color: red;
 }

 #form-fields
 {
 	text-align: center;
 }
#form-controls{
  margin-left: 39%;
  margin-top: 10px;
}

 #form{
 	text-align: center;
 	margin-left: 40%;
 }

 #form ul li 
 {
 	list-style-type: none;
 	float: left;
 	margin-bottom: 20%;
 }
</style>