<template>
    <footer class="footer">
      <div class="fullfooter">
        <h1 id="felsoszoveg">Informee</h1>
        
        <div class="footer-content">
          <div class="bal">
            <h1 class = "masodik-sor">Bögrék</h1>
            <p>Pólók, pulcsik, bögrék, genyók.</p>
            <p>Iratkozz fel! Pólók, pulcsik, bögrék, genyók.</p>
            <p>Iratkozz fel! Pólók, pulcsik, bögrék, genyók.</p>
            <p>Iratkozz fel! Pólók, pulcsik, bögrék, genyók.</p>
          </div>
          <div class="mid">
            <h1 class = "masodik-sor">Genyók</h1>
            <p>Pólók, pulcsik, bögrék, genyók.</p>
            <p>Iratkozz fel! Pólók, pulcsik, bögrék, genyók.</p>
            <p>Iratkozz fel! Pólók, pulcsik, bögrék, genyók.</p>
            <p>Iratkozz fel! Pólók, pulcsik, bögrék, genyók.</p>
          </div>
          <div class="jobb">
            <h1  class = "masodik-sor">Pólók, pulcsik, bögrék, genyók. Iratkozz fel!</h1>
          </div>
        </div>
        
        <div class="footer-social">
          <ul>
            
            <li><a href="https://discord.com/"><linkButton class="DiscordButton" text="Discord"></linkButton></a></li>
            <li><a href="#"><linkButton class="ShareButton" text="SHÉR"></linkButton></a></li>
            <li><a href="https://github.com/WR0NGTH3HU4/Informee/tree/P2-63"><linkButton class="GithubLink" text="Github"></linkButton></a></li>
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
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50%;
  }

  .footer-content {
    color: #FAFAFA;
    display: flex;
    flex-direction: row;
    margin-bottom: 2%;
    width: calc(100% - 40px);
    text-align: center;
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
    padding: 20px;
    align-items: flex-end;
    display: flex;
    flex-direction: row-reverse;
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
    margin-top: 5%;
    margin-bottom: 5%;
  }
  .footer-content {
  color: #FAFAFA;
  display: flex;
  flex-direction: row;
  margin-bottom: 2%;
}
.bal {
  flex: 1; 
  margin-right: auto; /* Az automatikus margin eltolja a bal oszlopot a footer bal szélére */
}

.mid {
  flex: 1;
  margin-left: auto; /* Az automatikus margin eltolja a mid oszlopot a footer közepére */
  margin-right: auto; /* Az automatikus margin eltolja a mid oszlopot a footer közepére */
}

.jobb {
  flex: 1; 
  margin-left: auto; /* Az automatikus margin eltolja a jobb oszlopot a footer jobb szélére */
}

.masodik-sor{
  font-size: x-large;
  text-align: center;
}

.footer-social {
    background-color: #171717;
    margin-bottom: 15px;
    width: 100%; /* Töltse ki a lábléc teljes szélességét */
}

  </style>
  