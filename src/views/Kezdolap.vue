
<script setup lang="ts">
import Button from '@/components/Button.vue';
</script>

<template>

    <div class="hatter">
      <div class="hullamocskak">
        <svg width="2013" height="1080" viewBox="0 0 2013 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 876.603V1080H905.835C931.646 1079.96 937.394 1071.63 957.277 1059.16L1037.8 1006.29C1108.61 955.676 1176.53 896.474 1201.34 820.803C1218.47 768.514 1214.6 714.155 1214.49 660.605L1212.25 633.606C1211.49 580.938 1206.64 511.063 1239.85 464.408C1270.74 420.992 1334.22 400.167 1391.18 387.009C1517.4 357.849 1593.37 361.017 1737.86 318.034C1806.28 297.694 1887.4 263.314 1950.34 233.291L1992.84 213.167C1998.29 210.629 2007.42 207.155 2010.68 202.817C2013.46 199.145 2012.97 193.241 2012.97 189.011V0.0135518H1107.13C1102.46 0.0135518 1095.81 -0.202801 1091.47 1.09341C1084.81 3.07348 1061.93 20.3353 1055.69 25.2311L966.023 99.0123C899.639 156.468 840.279 220.205 814.469 297.01C781.322 395.649 794.853 501.865 742.874 595.806C706.641 661.271 627.017 718.457 552.447 755.662C427.89 817.797 289.465 847.443 145.381 862.707L38.0227 873.291L0 876.603Z" fill="#EA580C" fill-opacity="0.7"/>
        <path d="M1089.26 0.000276717L1093.74 55.8001L1095.97 82.8001C1096.08 142.848 1094.25 207.18 1043.55 255.6C1020.67 277.47 994.967 288.594 964.012 301.05C892.954 329.634 792.148 349.056 735.963 394.272C695.95 426.456 685.37 469.548 679.6 513L675.485 549L673.247 581.4L671.213 606.6C668.171 642.222 664.95 683.622 636.299 712.8C603.554 746.154 543.254 751.644 494.316 754.362L467.476 756.072H433.927L407.087 757.8C333.099 757.882 258.887 764.208 190.132 787.896C127.327 809.532 101.493 823.572 44.7498 852.156C35.6467 856.746 4.93737 871.848 1.3589 878.724C-0.252535 881.838 0.0169247 887.562 0.0169247 891V1080H905.86C931.044 1079.95 935.383 1073.21 955.066 1061.33L1004.27 1030.93C1071.21 987.084 1134.51 939.78 1154.37 869.4C1159.45 851.418 1158.87 833.706 1158.6 815.4L1154.46 784.8L1122.43 633.6L1120.58 617.4C1120.31 597.168 1124.98 574.164 1136.95 556.2C1157.06 526.032 1196.98 506.322 1234.65 492.66C1323.35 460.44 1447.98 445.23 1545.54 422.748C1687.68 389.97 1792.49 335.592 1910.11 265.266L1983.92 221.166C2003.67 209.25 2012.96 208.818 2013 189V0L1089.26 0.000276717Z" fill="#FB923C" fill-opacity="0.5"/>
        </svg>
      </div>
    </div>

    <div class="tartalom">

      <div class="tartalom-bal">
        <h1>Valami menő text</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quam consectetur dolore quidem quae? Laboriosam assumenda, ducimus illum molestias quo in illo quis pariatur accusamus consequuntur obcaecati, provident fugit? Aut.</p>
        <Button class="primary" text="Bejelentkezés"></Button>
        <h5 class="text-neutral-500 font-medium flex flex-row">vagy <RouterLink to="/Registration"><h5 class="text-neutral-500 underline" id="Reg"> Regisztrálj!</h5></RouterLink></h5>
      </div>
      

      <div class="tartalom-jobb">
        <img src="../assets/fooldal_logo.svg" alt="">
      </div>
    </div>

</template>

<style scoped>
    .hullamocskak {
        position: absolute; /* vagy fixed */
        top: 0;
        left: 0;
        z-index: -1;
    }
     .tartalom{
      @apply flex flex-row justify-between content-center items-center;
      width: 100%;
      padding: 10%;
    }
    
    .tartalom-jobb{
      @apply flex flex-col justify-center content-center items-center;
    }
    .tartalom-bal{
      @apply flex flex-col justify-center content-center items-center w-full
    }
    h1{
      @apply text-7xl text-neutral-800;
      margin-bottom: 80px
    }
    #Reg{
        padding-left: 5px;
    }
    svg{
      width: 100%;
      height: 120%;
    }
</style>