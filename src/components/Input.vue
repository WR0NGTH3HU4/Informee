<template>
    <div>
      <h1>input mezők</h1>
      <br>
      <input type="text" name="" class="mezo" id="alap" placeholder="Placeholder" @focus="toggleActive(true)" @blur="toggleActive(false)">
      <br>
      <input type="text" name="" class="mezo" id="disabled" placeholder="Placeholder" disabled>
      <br>
      <input type="text" name="" class="mezo" id="aktiv" placeholder="Placeholder" @focus="toggleActive(true)" @blur="toggleActive(false)">
      <br>

      <h1>div mezők</h1>
      <br>
      <div class="mezo" id="alap"> 
        <div class="elrendezes">
          <input type="text" id="clear" placeholder="Placeholder"> 
          <span class="material-symbols-outlined" id ="cancel">cancel</span>
        </div>
      </div>
    <br>
    <div class="mezo" id="disabled"> 
        <div class="elrendezes">
          <input type="text" id="clear" placeholder="Placeholder" disabled> 
          <span class="material-symbols-outlined" id ="cancel">cancel</span>
        </div>
      </div>
    </div>

</template>
  
  <script setup lang="ts">
    let isActive = false;
  
    const toggleActive = (value: boolean) => {
      isActive = value;
      console.log('Input mező:', isActive);
    };
    
    if(isActive){

    }
    else{
  
    }

  </script>
  
  <style scoped>
    .mezo {
      width: 50%;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 7px;
      box-sizing: border-box;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    }
    input[type="text"]:disabled {
      background: #E5E5E5;
    }
    ::placeholder {
      color: #D4D4D4;
    }
    input[type="text"]:disabled::placeholder {
      color: #A3A3A3;
    }
    input:focus {
      outline: none !important;
      border-color: #FB923C;
      /*box-shadow: 0 4px 6px -1px rgba(94, 78, 58, 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);*/
    }

    #clear{
      border: none;
      width: 100%;
    }
    .elrendezes{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .material-symbols-outlined{
      font-size: 110%;
    }

    #disabled{
      background: #E5E5E5;
      
    }
  </style>
  