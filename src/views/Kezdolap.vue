<template>
    <div>
      <div class="hullamocskak">
        <img src="../assets/vilagos.svg" alt="">
        <img src="../assets/sotet.svg" alt="">
      </div>
      <navbar></navbar>
      <div>
        <h2>Kezdolap</h2>
      </div>
    </div>
</template>

<style scoped>
    .hullamocskak {
        position: relative;
        width: 100%; /* vagy a képek szélessége */
        height: 100%; /* vagy a képek magassága */
        z-index: -1;
    }

    .hullamocskak img {
        position: absolute; /* vagy fixed */
        top: 0;
        left: 0;
        z-index: -1;
    }

</style>