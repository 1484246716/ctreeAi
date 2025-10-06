<script setup lang="ts">
import module1 from "./module1.vue"
import module2 from "./module2.vue"
</script>

<template>
  <div class="pricePlan-main app-header-max-width">
    <module1 />
    <module2 />
  </div>
</template>

<style scoped lang="scss">
.pricePlan-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:56px;
  margin-bottom: 56px;
}
@media (max-width: 1000px) {
  .pricePlan-main{
    gap:16px !important;
  }
}

</style>