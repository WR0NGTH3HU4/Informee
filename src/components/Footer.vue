<template>
    <footer class="footer">
      <div class="fullfooter">
        <h1 id="felsoszoveg">Informee</h1>
        
        <div class="footer-content">
          <Logo />
        </div>
        <div class="footer-social">
          <ul>
            <li><a href="#"><Button text="Github"></Button></a></li>
            <li><a href="#"><Button text="SHÉR"></Button></a></li>
            <li><a href="#"><Button text="Discord"></Button></a></li>
          </ul>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  import { RouterLink } from 'vue-router';
  import { ref } from 'vue';
  import Logo from './Logo.vue';
  import Button from './Button.vue';
  
  interface Link {
    id: number;
    title: string;
    url: string;
  }
  
  const isLoggedIn = true;
  
  const loggedInContent = ref<Link[]>([
    { id: 0, title: "Posztok", url: "/Posztok" },
    { id: 1, title: "Saját posztok", url: "/SajatPosztok" }
  ]);
  
  const loggedOutContent = ref<Link[]>([
    { id: 0, title: "Kezdőlap", url: "/Kezdolap" },
    { id: 1, title: "Rólunk", url: "/Rolunk" }
  ]);
  </script>
  
  <style scoped>
  .footer {

    background-image: url(../assets/hatterfooter.svg);
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50%;
  }
  
  .footer-content ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .footer-content ul li {
    display: inline-block;
    margin-right: 20px;
  }
  
  .footer-social ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .footer-social ul li {
    display: inline-block;
    margin-right: 10px;
  }
  
  .footer-social ul li a {
    color: #fff;
    font-size: 20px;
    text-decoration: none;
  }
  
  .footer-social ul li a:hover {
    color: #ccc;
  }
  
  #felsoszoveg {
    color: #fff;
    font-size: xx-large;
  }
  </style>
  