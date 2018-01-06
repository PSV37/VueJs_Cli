<template>
 <div class="container">
     <nav>
        <ul class="pull-left">
          <li><router-link to="/" exact> Blog </router-link></li>
          <li><router-link to="/blog" exact> Create New Blog </router-link></li>
        </ul>
     </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav{
    background: #444;
    padding: 14px 0;
    margin-bottom: 40px;
    height: 50px;
    margin-top: 15px;
}
.router-link-active{
    background: #eee;
    color: #444;
}
</style>
