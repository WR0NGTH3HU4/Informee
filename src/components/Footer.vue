<template>
    <footer class="footer">
      <div class="fullfooter">
        <h1 id="felsoszoveg">Informee</h1>
        
        <div class="footer-content">
          <div class="bal">
            <h1>Bögrék</h1>
            <p>Pólók, pulcsik, bögrék, genyók.</p>
            <p>Iratkozz fel! Pólók, pulcsik, bögrék, genyók.</p>
            <p>Iratkozz fel! Pólók, pulcsik, bögrék, genyók.</p>
            <p>Iratkozz fel! Pólók, pulcsik, bögrék, genyók.</p>
          </div>
          <div class="mid">
            <h1>Genyók</h1>
            <p>Pólók, pulcsik, bögrék, genyók.</p>
            <p>Iratkozz fel! Pólók, pulcsik, bögrék, genyók.</p>
            <p>Iratkozz fel! Pólók, pulcsik, bögrék, genyók.</p>
            <p>Iratkozz fel! Pólók, pulcsik, bögrék, genyók.</p>
          </div>
          <div class="jobb">
            <h1>Pólók, pulcsik, bögrék, genyók. Iratkozz fel!</h1>
          </div>
        </div>
        <div class="footer-social">
          <ul>
            <li><a href="https://github.com/WR0NGTH3HU4/Informee/tree/P2-63"><linkButton class="GithubLink" text="Github"></linkButton></a></li>
            <li><a href="#"><linkButton class="linkButton" text="SHÉR"></linkButton></a></li>
            <li><a href="https://discord.com/"><linkButton class="DiscordButton" text="Discord"></linkButton></a></li>
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
  import linkButton from './linkButton.vue'
  
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
    color: #FAFAFA;
    font-size: 20px;
    text-decoration: none;
  }
  
  #felsoszoveg {
    color: #FAFAFA;
    font-size: xx-large;
  }
  .footer-content {
  color: #FAFAFA;
  display: flex;
  flex-direction: row; /* Soron belüli elrendezés */
  justify-content: space-between; /* Egyenletes elosztás */
}

.bal, .mid, .jobb {
  flex: 1; /* Egyenlő részre osztja az elrendezést */
  margin-right: 10%; /* Opcionális: térköz a div-ek között */
}
  </style>
  