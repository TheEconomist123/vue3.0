<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import ExcelDemo from "./components/ExcelDemo.vue";
/*import ExcelDemo01 from "./components/ExcelDemo01.vue";*/
import Sfc_composition_01 from "./vue_onself/Sfc_composition_01.vue";
import Sfc_composition_02 from "./vue_onself/Sfc_composition_02.vue";
import Sfc_composition_03 from "./vue_onself/Sfc_composition_03.vue";
import Excel from "./vue_onself/excel.vue";
import Sfc_composition_04 from "./vue_onself/Sfc_composition_04.vue";
import Sfc_composition_05 from "./vue_onself/Sfc_composition_05.vue";
import Sfc_composition_06 from "./vue_onself/Sfc_composition_06.vue";
import V_if_show from "./vue_onself/v_if_show.vue";
import Axios_demo_01 from "./vue_onself/axios_demo_01.vue";
import Element_01 from "./vue_onself/element/element_01.vue";

</script>

<template>
<!--
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>-->

<!--    <ExcelDemo msg=自定义></ExcelDemo>-->
<!--  <ExcelDemo01></ExcelDemo01>-->
<!--  <Sfc_composition_01></Sfc_composition_01>-->
<!--  <Sfc_composition_02></Sfc_composition_02>-->
<!--  <Sfc_composition_03></Sfc_composition_03>-->
<!--  <Excel></Excel>-->
<!--
  <Sfc_composition_04></Sfc_composition_04>
-->
<!--  <Sfc_composition_05></Sfc_composition_05>-->
<!--  <Sfc_composition_06></Sfc_composition_06>-->
<!--  <V_if_show></V_if_show>-->
<!--  <Axios_demo_01></Axios_demo_01>-->
  <Element_01></Element_01>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
