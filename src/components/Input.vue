<script setup lang="ts">
</script>

<template>
    <input type="text" name="" class="mezo" id="alap" placeholder="Placeholder">
    <br>
    <input type="text" name="" class="mezo" id="disabled" placeholder="Placeholder" disabled>
    <br>
    <input type="text" name="" class="mezo" id="aktiv" placeholder="Placeholder">
</template>

<style>

   input{
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 7px;
    box-sizing: border-box;
    box-shadow: 4px 4px 8px  rgba(0, 0, 0, 0.24);
    
   }
   input[type="text"]:disabled {
    background: #E5E5E5;
    
   }
   ::placeholder {
    color: #D4D4D4;
   }   
   input[type="text"]:disabled::placeholder{
       color: #A3A3A3;
   }

   input:focus{
       outline: none !important;
       border-color: #FB923C;
   }
</style>