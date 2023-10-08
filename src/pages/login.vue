<script lang="ts">
  export default{
    data(){
      return {
        text: 'login---'
      }
    },
    methods:{
      changeText(){
        console.log('22222');
        
        this.text = Math.random()
      }
    }
  }
</script>
<template>
  <div @click="changeText">点击</div>
  <div>{{text}}</div>
</template>
