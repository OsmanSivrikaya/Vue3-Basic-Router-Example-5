<template>
  <h1>Detail</h1>
  <p>
     {{$route.query.message}}   
  </p>
  <p>{{$route.params.id}}</p>
  <button @click="goBack">Geri Dön</button>
</template>
<script>
  export default {
    created(){
      console.log(this.$route)
    },
    methods:{
      goBack(){
        this.$router.push("/");
      }
    }
  }
</script>