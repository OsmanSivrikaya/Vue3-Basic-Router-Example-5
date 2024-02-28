<template>
  <h1>Home</h1>
  <input type="text" v-model="message" placeholder="mesajı girin..."/>
  <input type="text" @keydown.enter="goRoute" placeholder="id girin..."/>
</template>
<script>
  export default {
    data(){
      return {
        message: ""
      }
    },
    methods:{
      goRoute(e){
        //this.$router.push(`/detail/${e.target.value}`)
        this.$router.push({
          name: "DetailPage",
          params : {
            id: e.target.value
          },
          query: {
            message: this.message
          }
        })
      }
    }
  }
</script>