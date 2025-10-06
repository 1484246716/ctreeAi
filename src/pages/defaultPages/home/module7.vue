<script setup lang="ts">
import { ref} from 'vue'
import TestimonialsGrid from "./TestimonialsGrid.vue"



const list2=[
    [
      {
        text1:"Mesha Carlisle",
        text2:"Jul 10, 2025",
        img:'module71',
        content:"I have absolutely enjoyed using Ctree. Easy to understand even for the novice website builder (that's me). Ctree has enabled me to start the directory I have wanted to start for years but didn't have the knowledge to do myself. Documentation is easy to follow. Customer Service is AMAZING. I asked a question, what I wanted wasn't available, so they created the option for me!! Love, Love, Love this software and company!!!"
      },
      {
        text1:"wealthyshezzy1",
        text2:"Jul 10, 2025",
        img:'module72',
        content:"Serg has been so dedicated in making Ctree the best no code software to build and deploy directories with no hassle of hosting. One of my directories idea is live and I am working in the next one already. Love it and also looking forward to all the features in the roadmap."
      },
      {
        text1:"Sunny Patel",
        text2:"Jul 10, 2025",
        img:'module73',
        content:"One of the best apps around for what it does. It loads quick, extremely user friendly and works right out of the box. I already have the main directory indexed the day after publishing!! Not only an awesome app, the Founder, Serge, is amazing. He is very responsive and has a clear growth vision for Ctree."
      },
      {
        text1:"Leon",
        text2:"Jul 10, 2025",
        img:'module74',
        content:"The developer is constantly updating this, and it is the best directory SaaS I have found! Great pricing too. I am excited to see where it goes in the future!"
      },
    ],
    [
      {
        text1:"Luca Piccinotti",
        text2:"Jul 10, 2025",
        img:'module75',
        content:"One of the best no-code tools I have ever used: regular updates, a wealth of resources, and a great active community. Everything you need, all in one place!"
      },
      {
        text1:"Mark Delaney",
        text2:"Jul 10, 2025",
        img:'module76',
        content:"I am not a coder and tried a few directory builders all claiming to be \"no-code\". Not only were they not, they also just lakced a lot of features that I would want to see in a directory builder.  That's when I found Ctree.  It's awesome and does everything I need. And the things it doesn't do now are on the roadmap and Serg ships products.  Love it."
      },
      {
        text1:"Karan B.",
        text2:"Jul 10, 2025",
        img:'module77',
        content:"Ctree is hands down the best directory-creation platform available. Everything from the speed of shipping features to the community is awesome. I highly recommend the platform."
      },
      {
        text1:"Dmytro Reshtei",
        text2:"Jul 10, 2025",
        img:'module78',
        content:"Easy-to-understand directory builder that will allow you to launch your directory in minutes!"
      },
      {
        text1:"Balazs",
        text2:"Jul 10, 2025",
        img:'module79',
        content:"Ctree doesn't really have a learning curve, makes it a breeze to start a directory website literally in minutes. But the founder makes it really special who's responsive, implement feature request swiftly and a great guy! :D"
      },
    ],
    [
      {
        text1:"Anselmo",
        text2:"Jul 10, 2025",
        img:'module710',
        content:"Ctree makes you spend less time maintaining or debugging your directory. It's perfect for those who only want to concentrate on finding and cleaning the data.  Serg is awsome and always there to support and discuss new features (on Discord)"
      },
      {
        text1:"Oak Cassidy",
        text2:"Jul 10, 2025",
        img:'module711',
        content:"It's not just about the tool itself but the founder behind it and the improvements, new features and community involved. It's an easy way to create directories with many features. It's still missing options you get with more established no-code tools, and there is a lack of design options right now, but with the speed the dev has been rolling out updates, I am sure it won't be too long.... great tool"
      },
      {
        text1:"Ankit S J B Rana",
        text2:"Jul 10, 2025",
        img:'module712',
        content:"Directify is a nocode, intuitive and easy solution for people who want to build directories without worrying about coding.  I mostly work on WordPress Directories but when I saw Ctree providing a simple solution without needing to setup a complicated backend/frontend, I bought it. The UI is intuitive, the app delivers but most importantly - Serge, the developer behind directify is driven to provide the best result and experience for directify users which makes it ann awesome tool.  Highly recommeneded."
      },
    ]
]
</script>

<template>
  <div class="module-7">
    <div class="top-Dot">
      <div class="Dot"></div>
      <div class="line1"></div>
      <div class="Dot"></div>
      <div class="line1"></div>
      <div class="Dot"></div>
      <div class="line1"></div>
      <div class="Dot"></div>
      <div class="line1"></div>
      <div class="Dot"></div>
      <div class="line2 "></div>
      <div class="Dot Dot1"></div>
      <div class="line1"></div>
      <div class="Dot"></div>
      <div class="line1"></div>
      <div class="Dot"></div>
    </div>
    <h2>客户评价</h2>
    <p class="p1">我们很自豪能帮助大家创建属于自己的目录网站。以下是部分客户对我们的评价。</p>
    <TestimonialsGrid :list="list2" />
  </div>
</template>

<style scoped lang="scss">
.module-7{
  display: flex;
  flex-direction: column;
  align-items: center;
  h2{
    font-weight: 900;
    font-size: 36px;
    color: var(--app-module-box-h2);
    margin-bottom:8px;
    font-family: "Alibaba PuHuiTi 2.0 900";
  }
  .p1{
    color:var(--app-module-box-p1);
    font-family: "Smiley Sans";
    font-weight: 400;
    font-size: 14px;
    margin-bottom:49px;
    text-align: center;
    padding:0 !important;
  }
  .top-Dot{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom:32px;
    .line1{
      width:8px;
      height:1px;
    }
    .line2{
      width: 24px;
      height: 1px;
      background: linear-gradient(270deg, var(--app-line2-bg-left-color) 0%, var(--app-line2-bg-right-color) 98.08%);
    }
    .Dot{
      width: 10px;
      height: 10px;
      border-radius:100%;
      border: 1px solid var(--app-Dot-border-color);
      box-sizing: border-box;
    }
    .Dot1{
      background: var(--app-Dot1-bg-color);
    }
  }
}
@media (max-width: 1000px) {
  h2{
    font-size: 24px !important;
  }
  .p1{
    margin-bottom:16px !important;
  }
}
@media (max-width: 750px)  {
  .columns-wrapper{
    flex-direction: column !important;
  }
}
</style>