
<template>
    <div class="columns-wrapper">
      <div class="column" v-for="(column, index) in columns" :key="index">
        <div class="flow-box"  v-for="(item, idx) in column" :key="idx">
            <div class="box-top">
<!--              <img src="@@/assets/images/defaultPages/home/module7-1.png" alt="">-->
              <img v-if="item.img=='module71'" src="@@/assets/images/defaultPages/home/module71.png" alt="">
              <img v-if="item.img=='module72'" src="@@/assets/images/defaultPages/home/module72.png" alt="">
              <img v-if="item.img=='module73'" src="@@/assets/images/defaultPages/home/module73.png" alt="">
              <img v-if="item.img=='module74'" src="@@/assets/images/defaultPages/home/module74.png" alt="">
              <img v-if="item.img=='module75'" src="@@/assets/images/defaultPages/home/module75.png" alt="">
              <img v-if="item.img=='module76'" src="@@/assets/images/defaultPages/home/module76.png" alt="">
              <img v-if="item.img=='module77'" src="@@/assets/images/defaultPages/home/module77.png" alt="">
              <img v-if="item.img=='module78'" src="@@/assets/images/defaultPages/home/module78.png" alt="">
              <img v-if="item.img=='module79'" src="@@/assets/images/defaultPages/home/module79.png" alt="">
              <img v-if="item.img=='module710'" src="@@/assets/images/defaultPages/home/module710.png" alt="">
              <img v-if="item.img=='module711'" src="@@/assets/images/defaultPages/home/module711.png" alt="">
              <img v-if="item.img=='module712'" src="@@/assets/images/defaultPages/home/module712.png" alt="">

              <div class="right">
                <p>{{item.text1}}</p>
                <p>{{item.text2}}</p>
              </div>
            </div>
          <div class="content">
            {{item.content}}
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
const props = defineProps({
  list: {
    type: Array,
    required: true
  }
})

const columns = computed(() => {
  return props.list
})
</script>

<style scoped lang="scss">
  .columns-wrapper {
    display: flex;
    gap:16px;

    .column {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap:16px;

      .flow-box{

        height: fit-content;
        display:flex;
        flex-direction: column;
        gap: 16px;
        flex-shrink: 0;
        padding: 16px;
        border-radius: 24px;
        border: 0.5px solid var(--app-border-color);
        box-sizing: border-box;
        .box-top{
          display: flex;
          align-items: center;
          gap: 8px;
          img{
            width:36px;
            height:36px;
          }
          .right{
            p{
              &:first-of-type{
                height: 20px;
                display: flex;
                align-items: center;
                color:  var(--app-module6-text-1-color);
                font-family: "Alibaba PuHuiTi 2.0";
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
              }
              &:last-of-type{
                height: 16px;
                display: flex;
                align-items: center;
                color:  var(--app-module6-text-2-color);
                font-family: "Alibaba PuHuiTi 2.0";
                font-weight: 400;
                font-size: 12px;
                line-height: 16px;
              }
            }
          }
        }
        .content{
          display: flex;
          align-items: center;
          color:  var(--app-module6-text-3-color);
          font-family: "Alibaba PuHuiTi 2.0";
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
  }








</style>
