import showBlog from './binding/showBlog.vue';
import addblog from './binding/addBlog.vue';
import singleBlog from './binding/singleBlog.vue';


export default[
  {path:'/',component:showBlog},
  {path :'/blog',component:addblog}, 
  {path :'/blog/:id',component:singleBlog} 
]

