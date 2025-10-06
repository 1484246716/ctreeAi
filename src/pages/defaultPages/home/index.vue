<script setup lang="ts">


import module1 from "./module1.vue"

import module2 from "./module2.vue"
import module3 from "./module3.vue"
import module4 from "./module4.vue"
import module5 from "./module5.vue"
import module6 from "./module6.vue"
import module7 from "./module7.vue"
import module8 from "./module8.vue"


import homeBottom from "./homeBottom.vue"


</script>

<template>
    <div class="home-main app-header-max-width">
      <module1/>
      <module2 />
      <module3 />
      <module4 />
      <module5 />
      <module6 />
      <module7/>
      <module8/>
      <homeBottom />
    </div>
</template>

<style scoped lang="scss">
.home-main{
  display: flex;
  flex-direction: column;
  gap:56px;
  margin-top:7px;
}
@media (max-width: 1000px) {
  .home-main{
    gap:16px !important;
  }
}
</style>