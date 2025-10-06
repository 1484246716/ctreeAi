<script setup lang="ts">
import {useTheme} from "@@/composables/useTheme.ts";
const { activeThemeName } = useTheme()

const changeIndex=ref(0)

const changeSelect=ref([
  {
    label:'免费',
    value:'0',
  },
  {
    label:'基础',
    value:'1',
  },
  {
    label:'标准',
    value:'2',
  },
  {
    label:'高级',
    value:'3',
  },
  {
    label:'专家',
    value:'4',
  },
])

const changeValue=ref('0')
const pricePlan = ref([
  {
    title:'使用限制',
    leftHeaderList:[
      {
        icon:false,
        title:'网站',
        text:'每个额外的网站',
      },
      {
        icon:false,
        title:'页面',
      },
      {
        icon:false,
        title:'子域',
      }
    ],
    rightViewList:[
      {
        viewList: [
          {
            icon: false,
            title: '1个网站',
            text: '',
            align:'start',
          },
          {
            icon: false,
            title: '3个页面',
            text: ''
          },
          {
            icon: false,
            title: '',
            text: ''
          }
        ]
      },
      {
        viewList: [
          {
            icon: false,
            title: '1个网站',
            text: '',
            align:'start',
          },
          {
            icon: false,
            title: '7个页面',
            text: ''
          },
          {
            icon: false,
            title: '1/网站',
            text: ''
          }
        ]
      },
      {
        viewList: [
          {
            icon: false,
            title: '2个网站',
            text: '',
            align:'start',

          },
          {
            icon: false,
            title: '50个页面',
            text: ''
          },
          {
            icon: false,
            title: '2/网站',
            text: ''
          }
        ]
      },
      {
        viewList: [
          {
            icon: false,
            title: '5个网站',
            text: '',
            align:'start',
          },
          {
            icon: false,
            title: '150个页面',
            text: ''
          },
          {
            icon: false,
            title: '无限',
            text: ''
          }
        ]
      },
      {
        viewList: [
          {
            icon: false,
            title: '20个网站',
            text: '+8$  网站/月',
            align:'start',
          },
          {
            icon: false,
            title: '无限页面',
            text: ''
          },
          {
            icon: false,
            title: '无限',
            text: ''
          }
        ]
      }
    ]

  },
  {
    title:'Ctree 特价',
    leftHeaderList:[
      {
        icon:true,
        title:'专家支持',
        text:'',
      },
      {
        icon:true,
        title:'专业版和基本版设计模式',
      },
      {
        icon:true,
        title:'网站转移',
      },
      {
        icon:true,
        title:'高级菜单',
      }
    ],
    rightViewList:[
      {
        viewList: [
          {
            icon: false,
            title: '实时聊天',
            text: '',
            align:'',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '',
            text: ''
          },
        ]
      },
      {
        viewList: [
          {
            icon: false,
            title: '实时聊天',
            text: '',
            align:'',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '',
            text: ''
          },
        ]
      },
      {
        viewList: [
          {
            icon: false,
            title: '实时聊天',
            text: '',
            align:'',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
        ]
      },
      {
        viewList: [
          {
            icon: false,
            title: '实时聊天',
            text: '',
            align:'',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
        ]
      },
      {
        viewList: [
          {
            icon: false,
            title: '优先聊天',
            text: '',
            align:'',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
        ]
      },
    ]

  },
  {
    title:'团队合作',
    leftHeaderList:[
      {
        icon:true,
        title:'协作',
        text:'每个额外的编辑',
      },
      {
        icon:false,
        title:'文件夹分组',
      },
      {
        icon:true,
        title:'访问管理',
      },
    ],
    rightViewList:[
      {
        viewList: [
          {
            icon: false,
            title: '',
            text: '',
            align:'start',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '',
            text: ''
          },
        ]
      },
      {
        viewList: [
          {
            icon: false,
            title: '1位编辑者',
            text: '',
            align:'start',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '',
            text: ''
          },
        ]
      },
      {
        viewList: [
          {
            icon: false,
            title: '1位编辑者',
            text: '+4$/月',
            align:'start',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '',
            text: ''
          },
        ]
      },
      {
        viewList: [
          {
            icon: false,
            title: '最多3位编辑者',
            text: '3.5$/月',
            align:'start',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '',
            text: ''
          },
        ]
      },
      {
        viewList: [
          {
            icon: false,
            title: '最多5位编辑者',
            text: '+4$/月',
            align:'start',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
        ]
      },
    ]

  },
  {
    title:'网站要点',
    leftHeaderList:[
      {
        icon:false,
        title:'网站分析',
        text:'',
      },
      {
        icon:false,
        title:'集成客户关系管理',
      },
      {
        icon:true,
        title:'自定义域',
        text:'可用选项',
      },
      {
        icon:true,
        title:'删除Ctree.io水印',
      },
      {
        icon:true,
        title:'自定义 HTML 和 CSS',
      },
      {
        icon:true,
        title:'头部和正文脚本',
      },
      {
        icon:true,
        title:'人工智能写作',
      },
      {
        icon:false,
        title:'人工智能写作',
      },
    ],
    rightViewList:[
      {
        viewList: [
          {
            icon: true,
            title: '',
            text: '',
            align:'',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '',
            text: '',
            align: 'start'
          },
          {
            icon: false,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '检查附加组件',
            text: ''
          },
        ]
      },
      {
        viewList: [
          {
            icon: true,
            title: '',
            text: '',
            align:'',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: 'A, NS, CNAME',
            text: '',
            align: 'start'
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '检查附加组件',
            text: ''
          },
        ]
      },
      {
        viewList: [
          {
            icon: true,
            title: '',
            text: '',
            align:'',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: 'A, NS, CNAME',
            text: '',
            align: 'start'
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '检查附加组件',
            text: ''
          },
        ]
      },
      {
        viewList: [
          {
            icon: true,
            title: '',
            text: '',
            align:'',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: 'A, NS, CNAME',
            text: '',
            align: 'start'
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '检查附加组件',
            text: ''
          },
        ]
      },
      {
        viewList: [
          {
            icon: true,
            title: '',
            text: '',
            align:'',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: 'A, NS, CNAME',
            text: '',
            align: 'start'
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '检查附加组件',
            text: ''
          },
        ]
      },

    ]

  },
  {
    title:'性能增强',
    leftHeaderList:[
      {
        icon:false,
        title:'优化跟踪',
        text:'',
      },
      {
        icon:false,
        title:'灵活的跟踪事件',
      },
      {
        icon:false,
        title:'SEO 优化',
        text:'',
      },
      {
        icon:true,
        title:'高级人工智能搜索引擎优化',
      },
      {
        icon:true,
        title:'转换 API',
      },
    ],
    rightViewList:[
      {
        viewList: [
          {
            icon: true,
            title: '',
            text: '',
            align:'',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: '',
            align: ''
          },
          {
            icon: false,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '',
            text: ''
          },
        ]
      },
      {
        viewList: [
          {
            icon: true,
            title: '',
            text: '',
            align:'',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: '',
            align: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '',
            text: ''
          },
        ]
      },
      {
        viewList: [
          {
            icon: true,
            title: '',
            text: '',
            align:'',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: '',
            align: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '',
            text: ''
          },
        ]
      },
      {
        viewList: [
          {
            icon: true,
            title: '',
            text: '',
            align:'',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: '',
            align: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
        ]
      },
      {
        viewList: [
          {
            icon: true,
            title: '',
            text: '',
            align:'',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: '',
            align: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
        ]
      },


    ]

  },
  {
    title:'自动化与集成',
    leftHeaderList:[
      {
        icon:true,
        title:'通过Zapier集成5000个应用',
        text:'',
      },
      {
        icon:true,
        title:'通过Make集成1000个应用',
      },
      {
        icon:true,
        title:'Hubspot',
        text:'',
      },
      {
        icon:true,
        title:'Telegram',
      },
      {
        icon:true,
        title:'KlickTipp',
      },
      {
        icon:true,
        title:'Quentn',
      },
      {
        icon:true,
        title:'Webhook',
      },
    ],
    rightViewList:[
      {
        viewList: [
          {
            icon: true,
            title: '',
            text: '',
            align:'',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: '',
            align: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '',
            text: ''
          },
        ]
      },
      {
        viewList: [
          {
            icon: true,
            title: '',
            text: '',
            align:'',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: '',
            align: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
        ]
      },
      {
        viewList: [
          {
            icon: true,
            title: '',
            text: '',
            align:'',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: '',
            align: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
        ]
      },
      {
        viewList: [
          {
            icon: true,
            title: '',
            text: '',
            align:'',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: '',
            align: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
        ]
      },
      {
        viewList: [
          {
            icon: true,
            title: '',
            text: '',
            align:'',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: '',
            align: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
        ]
      },
    ]

  },
  {
    title:'安全',
    leftHeaderList:[
      {
        icon:false,
        title:'HTTPS 连接',
        text:'',
      },
      {
        icon:false,
        title:'位于欧盟的服务器',
      },
      {
        icon:false,
        title:'GDPR cookie-通知',
        text:'',
      },
      {
        icon:true,
        title:'DDoS 防护',
      },
      {
        icon:true,
        title:'GDPR 同意解决方案',
      },
      {
        icon:true,
        title:'第三方内容防护',
      },
    ],
    rightViewList:[
      {
        viewList: [
          {
            icon: true,
            title: '',
            text: '',
            align:'',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: '',
            align: ''
          },
          {
            icon: false,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '',
            text: ''
          },
        ]
      },
      {
        viewList: [
          {
            icon: true,
            title: '',
            text: '',
            align:'',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: '',
            align: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '',
            text: ''
          },
        ]
      },
      {
        viewList: [
          {
            icon: true,
            title: '',
            text: '',
            align:'',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: '',
            align: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '',
            text: ''
          },
        ]
      },
      {
        viewList: [
          {
            icon: true,
            title: '',
            text: '',
            align:'',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: '',
            align: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
        ]
      },
      {
        viewList: [
          {
            icon: true,
            title: '',
            text: '',
            align:'',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: '',
            align: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
        ]
      },


    ]


  },
  {
    title:'电子邮件服务',
    leftHeaderList:[
      {
        icon:false,
        title:'电子邮件量',
        text:'',
      },
      {
        icon:true,
        title:'潜在客户通知',
      },
      {
        icon:true,
        title:'自定义电子邮件模板',
        text:'',
      },
      {
        icon:true,
        title:'自定义发件人',
      },
      {
        icon:false,
        title:'电子邮件自动回复',
      },
      {
        icon:true,
        title:'双重选择加入',
      },
    ],
    rightViewList:[
      {
        viewList: [
          {
            icon: false,
            title: '无限',
            text: '',
            align:'',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '',
            text: '',
            align: ''
          },
          {
            icon: false,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '',
            text: ''
          },
        ]
      },
      {
        viewList: [
          {
            icon: false,
            title: '无限',
            text: '',
            align:'',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '',
            text: '',
            align: ''
          },
          {
            icon: false,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '',
            text: ''
          },
        ]
      },
      {
        viewList: [
          {
            icon: false,
            title: '无限',
            text: '',
            align:'',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '',
            text: '',
            align: ''
          },
          {
            icon: false,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '',
            text: ''
          },
          {
            icon: false,
            title: '',
            text: ''
          },
        ]
      },
      {
        viewList: [
          {
            icon: false,
            title: '无限',
            text: '',
            align:'',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: '',
            align: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
        ]
      },
      {
        viewList: [
          {
            icon: false,
            title: '无限',
            text: '',
            align:'',
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: '',
            align: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
          {
            icon: true,
            title: '',
            text: ''
          },
        ]
      },

    ]


  },
])


</script>
<template>
  <div class="pricePlan-main app-header-max-width">
    <div class="top-view">
      <p class="title">
        <span>使用</span>
        <svg v-if="activeThemeName=='normal'" width="196" height="80" viewBox="0 0 196 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_281_2472)">
            <rect x="8" y="4" width="180" height="64" rx="24" fill="#DDE4F0" shape-rendering="crispEdges"/>
            <rect x="8.5" y="4.5" width="179" height="63" rx="23.5" stroke="#C6C2DA" shape-rendering="crispEdges"/>
            <g filter="url(#filter1_d_281_2472)">
              <path d="M34.2281 50.9731C31.3974 50.9731 28.9171 50.3454 26.7873 49.0899C24.6558 47.8344 23.0153 46.0828 21.8658 43.835C20.7145 41.5873 20.1389 39.0071 20.1389 36.0928C20.1389 33.5818 20.6434 31.2025 21.6558 28.9547C22.6666 26.707 24.2597 24.8626 26.4369 23.4214C28.6141 21.9803 31.3347 21.2598 34.6005 21.2598C36.0007 21.2598 37.3212 21.415 38.5656 21.7238L37.9595 28.467C37.2755 28.2814 36.4815 28.1886 35.5808 28.1886C33.2783 28.1886 31.4363 28.8484 30.0531 30.1647C28.6683 31.4826 27.9775 33.5211 27.9775 36.2801C27.9775 38.7287 28.6463 40.644 29.9837 42.0227C31.3212 43.403 33.1564 44.0915 35.4894 44.0915C36.3596 44.0915 37.2924 43.9683 38.2879 43.7186L38.6604 50.4618C37.1976 50.8027 35.7213 50.9731 34.2281 50.9731Z" fill="#433D63"/>
              <path d="M46.2635 27.3039H39.312V21.585H60.8182V27.3039H53.8668V50.3212H46.2618V27.3039H46.2635Z" fill="#433D63"/>
              <path d="M76.7037 48.1596C74.4791 46.5953 72.6219 44.7728 71.1287 42.6955V36.5108C72.715 36.2628 73.912 35.7042 74.7212 34.8368C75.5305 33.9695 75.9351 32.8844 75.9351 31.5817C75.9351 30.2789 75.5609 29.2175 74.816 28.583C74.0694 27.9485 72.7641 27.6296 70.8967 27.6296H69.8707V50.3212H62.127V21.585H70.9441C74.0846 21.585 76.5818 21.8718 78.4323 22.4456C80.2827 23.0193 81.6287 23.9188 82.4684 25.1422C83.3081 26.3673 83.728 28.0025 83.728 30.0477C83.728 32.093 83.1287 33.9239 81.9317 35.5354C80.7348 37.147 79.0621 38.4497 76.917 39.442C78.2545 40.4967 79.4515 41.3016 80.5096 41.8602C81.566 42.4187 82.6394 42.8372 83.728 43.1157L82.8409 50.5085C80.9752 50.5085 78.93 49.7256 76.7054 48.1596H76.7037Z" fill="#433D63"/>
              <path d="M85.7309 21.585H103.971L103.785 27.6296H93.3342V33.2101C94.4838 32.4355 95.9076 31.8618 97.6023 31.4888C99.297 31.1176 100.985 30.9303 102.664 30.9303L102.478 37.6262C100.115 37.6262 98.2016 37.7579 96.7405 38.0211C95.2778 38.2844 94.1435 38.7737 93.3342 39.4859V44.275H105.324V50.3195H85.7292V21.585H85.7309Z" fill="#433D63"/>
              <path d="M106.819 21.585H125.059L124.873 27.6296H114.422V33.2101C115.572 32.4355 116.996 31.8618 118.69 31.4888C120.385 31.1176 122.073 30.9303 123.752 30.9303L123.566 37.6262C121.203 37.6262 119.29 37.7579 117.829 38.0211C116.366 38.2844 115.232 38.7737 114.422 39.4859V44.275H126.412V50.3195H106.817V21.585H106.819Z" fill="#433D63"/>
              <path d="M128.955 49.6248C128.255 48.9431 127.905 47.8428 127.905 46.3241C127.905 45.1783 128.271 44.2637 129.002 43.5802C129.732 42.8985 130.781 42.5576 132.151 42.5576C133.301 42.5576 134.227 42.8985 134.928 43.5802C135.627 44.262 135.977 45.3639 135.977 46.881C135.977 48.0588 135.635 48.9819 134.951 49.6485C134.267 50.315 133.194 50.6474 131.733 50.6474C130.582 50.6474 129.657 50.3066 128.956 49.6248H128.955Z" fill="#8167FF"/>
              <path d="M145.773 50.3212H138.03V21.585H145.773V50.3229V50.3212Z" fill="#433D63"/>
              <path d="M155.032 49.275C152.901 48.2979 151.167 46.71 149.83 44.5078C148.492 42.3073 147.823 39.4555 147.823 35.9522C147.823 32.9147 148.391 30.2721 149.527 28.0244C150.661 25.7767 152.271 24.0487 154.355 22.8404C156.439 21.6305 158.88 21.0264 161.679 21.0264C164.198 21.0264 166.523 21.5073 168.654 22.4675C170.784 23.4294 172.518 25.0105 173.855 27.211C175.193 29.4132 175.861 32.2651 175.861 35.7666C175.861 38.8058 175.294 41.4551 174.158 43.7181C173.022 45.981 171.405 47.7174 169.306 48.9256C167.207 50.1339 164.772 50.7397 162.006 50.7397C159.487 50.7397 157.16 50.252 155.031 49.275H155.032ZM166.485 41.7656C167.511 40.3701 168.024 38.448 168.024 35.9995C168.024 34.3255 167.799 32.8911 167.347 31.6981C166.895 30.505 166.211 29.5752 165.295 28.9086C164.378 28.2421 163.235 27.9096 161.867 27.9096C159.783 27.9096 158.229 28.6066 157.201 30.0021C156.175 31.3977 155.662 33.3197 155.662 35.7683C155.662 38.2168 156.175 40.2941 157.201 41.7201C158.227 43.146 159.768 43.8598 161.82 43.8598C163.871 43.8598 165.458 43.1629 166.485 41.7673V41.7656Z" fill="#433D63"/>
            </g>
          </g>
          <defs>
            <filter id="filter0_d_281_2472" x="0" y="0" width="196" height="80" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="4"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.653155 0 0 0 0 0.628143 0 0 0 0 0.826923 0 0 0 0.23 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_281_2472"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_281_2472" result="shape"/>
            </filter>
            <filter id="filter1_d_281_2472" x="12.1389" y="17.0264" width="171.722" height="45.9463" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="4"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.653155 0 0 0 0 0.628143 0 0 0 0 0.826923 0 0 0 0.23 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_281_2472"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_281_2472" result="shape"/>
            </filter>
          </defs>
        </svg>
        <svg v-else width="196" height="80" viewBox="0 0 196 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_880_53292)">
            <rect x="8" y="4" width="180" height="64" rx="24" fill="#232326" shape-rendering="crispEdges"/>
            <rect x="8.5" y="4.5" width="179" height="63" rx="23.5" stroke="#35353F" shape-rendering="crispEdges"/>
            <g filter="url(#filter1_d_880_53292)">
              <path d="M34.2281 50.9731C31.3974 50.9731 28.9171 50.3454 26.7873 49.0899C24.6558 47.8344 23.0153 46.0828 21.8658 43.835C20.7145 41.5873 20.1389 39.0071 20.1389 36.0928C20.1389 33.5818 20.6434 31.2025 21.6558 28.9547C22.6666 26.707 24.2597 24.8626 26.4369 23.4214C28.6141 21.9803 31.3347 21.2598 34.6005 21.2598C36.0007 21.2598 37.3212 21.415 38.5656 21.7238L37.9595 28.467C37.2755 28.2814 36.4815 28.1886 35.5808 28.1886C33.2783 28.1886 31.4363 28.8484 30.0531 30.1647C28.6683 31.4826 27.9775 33.5211 27.9775 36.2801C27.9775 38.7287 28.6463 40.644 29.9837 42.0227C31.3212 43.403 33.1564 44.0915 35.4894 44.0915C36.3596 44.0915 37.2924 43.9683 38.2879 43.7186L38.6604 50.4618C37.1976 50.8027 35.7213 50.9731 34.2281 50.9731Z" fill="#C0BCDF"/>
              <path d="M46.2635 27.3039H39.312V21.585H60.8182V27.3039H53.8668V50.3212H46.2618V27.3039H46.2635Z" fill="#C0BCDF"/>
              <path d="M76.7037 48.1596C74.4791 46.5953 72.6219 44.7728 71.1287 42.6955V36.5108C72.715 36.2628 73.912 35.7042 74.7212 34.8368C75.5305 33.9695 75.9351 32.8844 75.9351 31.5817C75.9351 30.2789 75.5609 29.2175 74.816 28.583C74.0694 27.9485 72.7641 27.6296 70.8967 27.6296H69.8707V50.3212H62.127V21.585H70.9441C74.0846 21.585 76.5818 21.8718 78.4323 22.4456C80.2827 23.0193 81.6287 23.9188 82.4684 25.1422C83.3081 26.3673 83.728 28.0025 83.728 30.0477C83.728 32.093 83.1287 33.9239 81.9317 35.5354C80.7348 37.147 79.0621 38.4497 76.917 39.442C78.2545 40.4967 79.4515 41.3016 80.5096 41.8602C81.566 42.4187 82.6394 42.8372 83.728 43.1157L82.8409 50.5085C80.9752 50.5085 78.93 49.7256 76.7054 48.1596H76.7037Z" fill="#C0BCDF"/>
              <path d="M85.7309 21.585H103.971L103.785 27.6296H93.3342V33.2101C94.4838 32.4355 95.9076 31.8618 97.6023 31.4888C99.297 31.1176 100.985 30.9303 102.664 30.9303L102.478 37.6262C100.115 37.6262 98.2016 37.7579 96.7405 38.0211C95.2778 38.2844 94.1435 38.7737 93.3342 39.4859V44.275H105.324V50.3195H85.7292V21.585H85.7309Z" fill="#C0BCDF"/>
              <path d="M106.819 21.585H125.059L124.873 27.6296H114.422V33.2101C115.572 32.4355 116.996 31.8618 118.69 31.4888C120.385 31.1176 122.073 30.9303 123.752 30.9303L123.566 37.6262C121.203 37.6262 119.29 37.7579 117.829 38.0211C116.366 38.2844 115.232 38.7737 114.422 39.4859V44.275H126.412V50.3195H106.817V21.585H106.819Z" fill="#C0BCDF"/>
              <path d="M128.955 49.6248C128.255 48.9431 127.905 47.8428 127.905 46.3241C127.905 45.1783 128.271 44.2637 129.002 43.5802C129.732 42.8985 130.781 42.5576 132.151 42.5576C133.301 42.5576 134.227 42.8985 134.928 43.5802C135.627 44.262 135.977 45.3639 135.977 46.881C135.977 48.0588 135.635 48.9819 134.951 49.6485C134.267 50.315 133.194 50.6474 131.733 50.6474C130.582 50.6474 129.657 50.3066 128.956 49.6248H128.955Z" fill="#4532C9"/>
              <path d="M145.773 50.3212H138.03V21.585H145.773V50.3229V50.3212Z" fill="#C0BCDF"/>
              <path d="M155.032 49.275C152.901 48.2979 151.167 46.71 149.83 44.5078C148.492 42.3073 147.823 39.4555 147.823 35.9522C147.823 32.9147 148.391 30.2721 149.527 28.0244C150.661 25.7767 152.271 24.0487 154.355 22.8404C156.439 21.6305 158.88 21.0264 161.679 21.0264C164.198 21.0264 166.523 21.5073 168.654 22.4675C170.784 23.4294 172.518 25.0105 173.855 27.211C175.193 29.4132 175.861 32.2651 175.861 35.7666C175.861 38.8058 175.294 41.4551 174.158 43.7181C173.022 45.981 171.405 47.7174 169.306 48.9256C167.207 50.1339 164.772 50.7397 162.006 50.7397C159.487 50.7397 157.16 50.252 155.031 49.275H155.032ZM166.485 41.7656C167.511 40.3701 168.024 38.448 168.024 35.9995C168.024 34.3255 167.799 32.8911 167.347 31.6981C166.895 30.505 166.211 29.5752 165.295 28.9086C164.378 28.2421 163.235 27.9096 161.867 27.9096C159.783 27.9096 158.229 28.6066 157.201 30.0021C156.175 31.3977 155.662 33.3197 155.662 35.7683C155.662 38.2168 156.175 40.2941 157.201 41.7201C158.227 43.146 159.768 43.8598 161.82 43.8598C163.871 43.8598 165.458 43.1629 166.485 41.7673V41.7656Z" fill="#C0BCDF"/>
            </g>
          </g>
          <defs>
            <filter id="filter0_d_880_53292" x="0" y="0" width="196" height="80" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="4"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.0951007 0 0 0 0 0.0935651 0 0 0 0 0.105769 0 0 0 0.4 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_880_53292"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_880_53292" result="shape"/>
            </filter>
            <filter id="filter1_d_880_53292" x="12.1389" y="17.0264" width="171.722" height="45.9463" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="4"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0.0951007 0 0 0 0 0.0935651 0 0 0 0 0.105769 0 0 0 0.4 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_880_53292"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_880_53292" result="shape"/>
            </filter>
          </defs>
        </svg>
        <span>免费开始构建</span>
      </p>
    </div>
    <p class="p1">选择一个免费计划，并负责你的第一个项目直到它准备就绪。 只有在必要时才切换到付费选项，没有隐藏费用或试用期。</p>
    <button class="startNow">
      <img src="@@/assets/images/defaultPages/home/module-4-start.png" alt="">
      <span>创建你的免费账户</span>
    </button>

    <div class="pricePlan-list-main" style="display: none;">
      <div class="pricePlan-list-main-header">
        <div class="left-view">
          <h3>主许可证</h3>
          <div class="tab-view">
            <span class="active">月度</span>
            <span>年度</span>
          </div>
        </div>

        <div class="right-view">
          <div class="right-view-box">
            <span class="title">免费</span>
            <div class="content">
              <span>0</span>
              <span>$</span>
            </div>
            <div>
              <p >免费探索 Ctree.io，创建一个简单网站开始使用</p>
            </div>
          </div>
          <div class="right-view-box">
            <span class="title">基础</span>
            <div class="content">
              <span>19.9</span>
              <span>$/月</span>
            </div>
            <div>
              <p >≈ 19.9 $/网站</p>
              <p >
                使用您自己的域名和基本功能创建网站
              </p>
            </div>
          </div>
          <div class="right-view-box">
            <span class="title">标准</span>
            <div class="content">
              <span>39.9</span>
              <span>$/月</span>
            </div>
            <div>
            <p >≈ 19.95 $/网站</p>
            <p >
              启动最多两个网站,具备核心功能并完全访问GDPR模块
            </p>
            </div>
          </div>
          <div class="right-view-box">
            <span class="title">高级</span>
            <div class="content">
              <span>69.9</span>
              <span>$/月</span>
            </div>
            <div>
            <p >≈ 13.98 $/网站</p>
            <p >
              扩展至五个网站并解锁Ctree 的大部分功能——适合成长型企业
            </p>
            </div>
          </div>
          <div class="right-view-box">
            <span class="title">专家</span>
            <div class="content">
              <span>179.9</span>
              <span>$/月</span>
            </div>
            <div>
            <p >≈ 9 $/网站</p>
            <p >
              无限制使用所有功能，网站数量或线索生成不受限制,非常适合代理机构和成熟企业
            </p>
            </div>
          </div>

        </div>

      </div>

      <div class="pricePlan-list-main-content" v-for="(item1,index1) in pricePlan" :key="index1">
          <div class="main-content-title">{{item1.title}}</div>

          <div class="main-content-box">
            <div class="main-content-box-left">
              <div class="header-view " :class="{'header-view-start':item2.title&&item2.text}" v-for="(item2,index2) in item1.leftHeaderList" :key="index2">
                <svg v-if="item2.icon" :class="{icon:item2.title&&item2.text}" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.99902 1.33301C9.83979 1.33301 11.5071 2.08037 12.7129 3.28613C13.9187 4.49191 14.666 6.15923 14.666 8C14.666 9.84077 13.9187 11.5081 12.7129 12.7139C11.5071 13.9196 9.83979 14.667 7.99902 14.667C6.15825 14.667 4.49093 13.9196 3.28516 12.7139C2.07939 11.5081 1.33203 9.84077 1.33203 8C1.33203 6.15923 2.0794 4.49191 3.28516 3.28613C4.49093 2.08037 6.15825 1.33301 7.99902 1.33301ZM7.99902 2.5459C6.49264 2.5459 5.12936 3.15484 4.1416 4.14258C3.15386 5.13034 2.54492 6.49362 2.54492 8C2.54492 9.50638 3.15386 10.8697 4.1416 11.8574C5.12936 12.8452 6.49265 13.4541 7.99902 13.4541C9.50541 13.4541 10.8687 12.8452 11.8564 11.8574C12.8442 10.8697 13.4531 9.50638 13.4531 8C13.4531 6.49362 12.8442 5.13034 11.8564 4.14258C10.8687 3.15484 9.50541 2.5459 7.99902 2.5459ZM8.21289 6.18457C8.51834 6.21577 8.75684 6.47441 8.75684 6.78809V10.4238H9.21094C9.54565 10.4238 9.81737 10.6956 9.81738 11.0303C9.81738 11.365 9.54566 11.6367 9.21094 11.6367H7.08984C6.75517 11.6367 6.4834 11.365 6.4834 11.0303C6.48341 10.6956 6.75518 10.4239 7.08984 10.4238H7.54492V7.39355C7.21027 7.39355 6.93859 7.12271 6.93848 6.78809C6.93848 6.45337 7.2102 6.18164 7.54492 6.18164H8.15039L8.21289 6.18457ZM7.99902 4.06055C8.41742 4.06055 8.75684 4.39997 8.75684 4.81836C8.75674 5.23667 8.41736 5.57617 7.99902 5.57617C7.58069 5.57617 7.24131 5.23667 7.24121 4.81836C7.24121 4.39997 7.58063 4.06055 7.99902 4.06055Z" fill="#8167FF"/>
                </svg>
                <div v-if="item2.title||item2.text" class="header-text-view">
                  <span v-if="item2.title">{{item2.title}}</span>
                  <span v-if="item2.text">每个额外的编辑</span>
                </div>
              <div v-if="!item2.title&&!item2.text" class="rowbg"></div>
              </div>
            </div>
            <div class="main-content-box-right">
              <div class="box-right-column"  v-for="(item3,index3) in item1.rightViewList" :key="index3">
                <div class="box-view" :class="{'box-view-start':item4.align=='start'}" v-for="(item4,index4) in item3.viewList" :key="index4">
                  <div class="header-text-view" >
                    <svg v-if="item4.icon" :class="{'icon':item4.icon&&item4.title&&item4.text}"  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.5 10C17.5 7.92873 16.6617 6.05462 15.3035 4.69645C13.9454 3.33831 12.0713 2.5 10 2.5C7.92873 2.5 6.05462 3.33831 4.69645 4.69645C3.33831 6.05462 2.5 7.92873 2.5 10C2.5 12.0713 3.33831 13.9454 4.69645 15.3035C6.05462 16.6617 7.92873 17.5 10 17.5C12.0713 17.5 13.9454 16.6617 15.3035 15.3035C16.6617 13.9454 17.5 12.0713 17.5 10ZM13.5775 6.91081C13.9029 6.58537 14.4304 6.58537 14.7559 6.91081C15.0813 7.23624 15.0813 7.76375 14.7559 8.08919L9.75586 13.0892C9.43042 13.4146 8.90291 13.4146 8.57747 13.0892L6.07747 10.5892L6.02051 10.5257C5.75355 10.1984 5.77238 9.7159 6.07747 9.41081C6.38257 9.10571 6.86507 9.08688 7.19238 9.35384L7.25586 9.41081L9.16667 11.3216L13.5775 6.91081ZM19.1667 10C19.1667 12.5311 18.1399 14.824 16.4819 16.4819C14.824 18.1399 12.5311 19.1667 10 19.1667C7.46894 19.1667 5.17601 18.1399 3.51807 16.4819C1.86014 14.824 0.833333 12.5311 0.833333 10C0.833333 7.46894 1.86015 5.17601 3.51807 3.51807C5.17601 1.86015 7.46894 0.833333 10 0.833333C12.5311 0.833333 14.824 1.86014 16.4819 3.51807C18.1399 5.17601 19.1667 7.46894 19.1667 10Z" fill="#8167FF"/>
                    </svg>
                    <span v-if="item4.title">{{item4.title}}</span>
                    <span v-if="item4.text">{{item4.text}}</span>
                    <div  v-if="!item4.icon&&!item4.title&&!item4.text"class="rowbg"></div>
                  </div>
                </div>
              </div>

            </div >
          </div>

      </div>

    </div>

    <div class="pricePlan-list-main-h5" >
      <h3>主许可证</h3>
      <div class="tab-view">
        <span class="active">月度</span>
        <span>年度</span>
      </div>
      <el-select  v-model="changeValue" class="app-form-select app-form-select-width-all"  popper-class="app-form-select-popper" placeholder="please select your zone" style="display: none;">
        <el-option v-for="item in changeSelect" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <div class="pricePlan-list-main-h5-box">
        <div class="pricePlan-list-main-header">
          <div class="top-view-box">
            <span class="title">免费</span>
            <div class="content">
              <span>0</span>
              <span>$</span>
            </div>
            <div>
              <p >免费探索 Ctree.io，创建一个简单网站开始使用</p>
            </div>
          </div>
        </div>
        <div class="pricePlan-list-main-content" v-for="(item1,index1) in pricePlan" :key="index1">
          <div class="main-content-box">
            <h3 class="main-content-box-h3">{{item1.title}}</h3>
            <div class="header-view " :class="{'header-view-start':item2.title&&item2.text}" v-for="(item2,index2) in item1.leftHeaderList" :key="index2">

              <div class="header-view-row" >
                <svg v-if="item2.icon" class="icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.99902 1.33301C9.83979 1.33301 11.5071 2.08037 12.7129 3.28613C13.9187 4.49191 14.666 6.15923 14.666 8C14.666 9.84077 13.9187 11.5081 12.7129 12.7139C11.5071 13.9196 9.83979 14.667 7.99902 14.667C6.15825 14.667 4.49093 13.9196 3.28516 12.7139C2.07939 11.5081 1.33203 9.84077 1.33203 8C1.33203 6.15923 2.0794 4.49191 3.28516 3.28613C4.49093 2.08037 6.15825 1.33301 7.99902 1.33301ZM7.99902 2.5459C6.49264 2.5459 5.12936 3.15484 4.1416 4.14258C3.15386 5.13034 2.54492 6.49362 2.54492 8C2.54492 9.50638 3.15386 10.8697 4.1416 11.8574C5.12936 12.8452 6.49265 13.4541 7.99902 13.4541C9.50541 13.4541 10.8687 12.8452 11.8564 11.8574C12.8442 10.8697 13.4531 9.50638 13.4531 8C13.4531 6.49362 12.8442 5.13034 11.8564 4.14258C10.8687 3.15484 9.50541 2.5459 7.99902 2.5459ZM8.21289 6.18457C8.51834 6.21577 8.75684 6.47441 8.75684 6.78809V10.4238H9.21094C9.54565 10.4238 9.81737 10.6956 9.81738 11.0303C9.81738 11.365 9.54566 11.6367 9.21094 11.6367H7.08984C6.75517 11.6367 6.4834 11.365 6.4834 11.0303C6.48341 10.6956 6.75518 10.4239 7.08984 10.4238H7.54492V7.39355C7.21027 7.39355 6.93859 7.12271 6.93848 6.78809C6.93848 6.45337 7.2102 6.18164 7.54492 6.18164H8.15039L8.21289 6.18457ZM7.99902 4.06055C8.41742 4.06055 8.75684 4.39997 8.75684 4.81836C8.75674 5.23667 8.41736 5.57617 7.99902 5.57617C7.58069 5.57617 7.24131 5.23667 7.24121 4.81836C7.24121 4.39997 7.58063 4.06055 7.99902 4.06055Z" fill="#8167FF"/>
                </svg>
                <div class="header-text-view">
                  <span v-if="item2.title">{{item2.title}}</span>
                  <span v-if="item2.text">每个额外的编辑</span>
                </div>
              </div>
              <div class="header-view-row header-view-row-right">
                <div class="header-text-view ">
                  <svg v-if="item1.rightViewList[Number(changeValue)]?.viewList[index2]?.icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 10C17.5 7.92873 16.6617 6.05462 15.3036 4.69645C13.9454 3.33831 12.0713 2.5 10 2.5C7.92874 2.5 6.05463 3.33831 4.69646 4.69645C3.33832 6.05462 2.50001 7.92873 2.50001 10C2.50001 12.0713 3.33832 13.9454 4.69646 15.3035C6.05463 16.6617 7.92874 17.5 10 17.5C12.0713 17.5 13.9454 16.6617 15.3036 15.3035C16.6617 13.9454 17.5 12.0713 17.5 10ZM13.5775 6.91081C13.9029 6.58537 14.4304 6.58537 14.7559 6.91081C15.0813 7.23624 15.0813 7.76376 14.7559 8.08919L9.75587 13.0892C9.43043 13.4146 8.90292 13.4146 8.57748 13.0892L6.07748 10.5892L6.02052 10.5257C5.75356 10.1984 5.77239 9.7159 6.07748 9.41081C6.38258 9.10571 6.86508 9.08688 7.19239 9.35384L7.25587 9.41081L9.16668 11.3216L13.5775 6.91081ZM19.1667 10C19.1667 12.5311 18.1399 14.824 16.4819 16.4819C14.824 18.1399 12.5311 19.1667 10 19.1667C7.46895 19.1667 5.17602 18.1399 3.51808 16.4819C1.86015 14.824 0.833344 12.5311 0.833344 10C0.833344 7.46894 1.86016 5.17601 3.51808 3.51807C5.17602 1.86015 7.46895 0.833333 10 0.833333C12.5311 0.833333 14.824 1.86014 16.4819 3.51807C18.1399 5.17601 19.1667 7.46894 19.1667 10Z" fill="#8167FF"/>
                  </svg>
                  <span v-if="item1.rightViewList[Number(changeValue)]?.viewList[index2]?.title">{{ item1.rightViewList[Number(changeValue)]?.viewList[index2]?.title}}</span>
                  <span v-if="item1.rightViewList[Number(changeValue)]?.viewList[index2]?.text">{{ item1.rightViewList[Number(changeValue)]?.viewList[index2]?.text}}</span>
                  <div v-if="!item1.rightViewList[Number(changeValue)].viewList[index2].title&&!item1.rightViewList[Number(changeValue)].viewList[index2].text&&!item1.rightViewList[Number(changeValue)].viewList[index2].icon" class="rowbg"></div>
                </div>
              </div >
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pricePlan-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  //gap:56px;
  margin-bottom: 56px;


  .top-view{
    display: flex;
    align-items: center;
    justify-content: center;

    .logleft{
      width: 196px;
      height: 80px;
      display: flex;
      flex-direction: column;
      place-content: center;
      place-items: center;
      gap: 10px;
      flex-shrink: 0;
      padding: 16px;
      border-radius: 24px;
      border: 1px solid var(--Stroke-default, #c6c2da);
      box-sizing: border-box;
      background: var(--Bg-3, #dde4f0);
      box-shadow: 0px 4px 8px var(--Shadow-1, #a7a0d33b);
    }
    .title{
      display: flex;
      align-items: center;
      justify-content: center;
      span{
        color: var(--app-h2-text-Light-color);
        font-family: "Alibaba PuHuiTi 2.0";
        font-weight: 1000;
        font-size: 36px;
        &:nth-child(2){
          color: var(--app-h2-text-Dark-color);
        }
      }
    }
  }
  .p1{
    max-width: 346px;
    color:var(--app-module-box-p1);
    font-family: "Smiley Sans";
    font-weight: 400;
    font-size: 14px;
    margin-bottom:24px;
    padding:0 !important;
    text-align: center;
  }

  .startNow{
    height: 48px;
    display: flex;
    place-content: center;
    place-items: center;
    gap: 8px;
    flex-shrink: 0;
    padding: 8px 12px;
    border-radius: 12px;
    background: var(--app-purpleButton-bg-color);
    box-shadow: 0px 2px 8px var(--app-purpleButton-bg-boxshow-color);
    border:0;
    margin-bottom:16px;
    animation: slideUp 0.8s ease-out forwards;
    &:hover{
      box-shadow: 0px 2px 8px var(--app-purpleButton-hover-boxshow-color);
    }
    img{
      width: 20px;
      height: 20px;
    }
    span{
      color: #e2e2ff;
      font-family: "Alibaba PuHuiTi 2.0";
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
    }
  }


  .pricePlan-list-main{
    width:100%;
    padding: 16px 12px;
    border-radius: 8px;
    border: 0.5px solid var(--pricePlan-border-color);
    box-sizing: border-box;
    background: var(--pricePlan-bg-color);
    display: flex;
    flex-direction: column;
    gap:16px;
    .pricePlan-list-main-header{
      display: flex;
      gap:12px;
      padding-bottom:8px;
      border-bottom: 0.5px solid #b1abcf;
      .left-view{
        display: flex;
        flex-direction: column;
        gap:8px;
        min-width: 220px;
        h3{
          color: var(--app-h2-text-Light-color);
          font-family: "Alibaba PuHuiTi 2.0";
          font-weight: 700;
          font-size: 24px;
          line-height: 32px;
        }

        .tab-view{
          padding: 4px;
          border-radius: 8px;
          border: 0.5px solid var(--app-border-color);
          box-sizing: border-box;
          background: var(--pricePlan-tab-view-bg-color);
          width: fit-content;
          span{
            height: fit-content;
            display: inline-flex;
            padding: 2px 16px;
            cursor: pointer;

            color: var(--pricePlan-text-color);
            font-family: "Alibaba PuHuiTi 2.0";
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            border-radius: 4px;
          }
          .active{
            background: var(--pricePlan-purple-color);
            color: var(--pricePlan-title-color);
          }
        }
      }

      .right-view{
        flex:1;
        display: grid;
        gap:12px;
        grid-template-columns: repeat(5, 1fr) ;
        .right-view-box{
          width: 100%;
          display: flex;
          flex-direction: column;
          gap:8px;
          .title{
            color: var(--pricePlan-purple-color);
            font-family: "Alibaba PuHuiTi 2.0";
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
          }

          .content{
            display: flex;
            align-items: flex-end;
            span{
              color: var(--pricePlan-title-color);
              font-family: "Alibaba PuHuiTi 2.0";
              font-weight: 700;
              font-size: 32px;
              line-height: 40px;
              &:nth-child(2){
                font-size: 16px;
                line-height: 32px;
              }
            }
          }
          p{
            color: var(--pricePlan-text-color);
            font-family: "Alibaba PuHuiTi 2.0";
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
          }

        }
      }


    }
    .pricePlan-list-main-content{
      display: flex;
      flex-direction: column;
      gap:12px;
      padding-bottom:16px;
      border-bottom: 0.5px solid #b1abcf;
      .main-content-title{
        color: var(--pricePlan-title-color);
        font-family: "Alibaba PuHuiTi 2.0";
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
      }
      .main-content-box{
        display: flex;
        gap:12px;
        .main-content-box-left{
          display: flex;
          min-width: 220px;
          flex-direction: column;
          gap:4px;
          .header-view{
            display: flex;
            align-items: center;
            gap:4px;
            height:40px;
            .icon{
              margin-top:4.5px;
            }
            .header-text-view{
              display: flex;
              flex-direction: column;
              span{
                &:nth-child(1){
                  color: var(--pricePlan-title-color);
                  font-family: "Alibaba PuHuiTi 2.0";
                  font-weight: 400;
                  font-size: 16px;
                  line-height: 24px;
                }
                &:nth-child(2){
                  color: var(--pricePlan-text-color);
                  font-size: 14px;
                  line-height: 20px;
                }
              }
            }
          }
          .header-view-start{
            height:56px;
            align-items: flex-start;
          }
        }

        .main-content-box-right{
          flex:1;
          display: grid;
          grid-template-columns: repeat(5, 1fr) ;
          gap:12px;
          .box-right-column{
            display: flex;
            flex-direction: column;
            gap:4px;

            .box-view{
              display: flex;
              align-items: center;
              gap:4px;
              min-height:40px;
            .icon{
              margin-top:4.5px;
            }
            .header-text-view{
              display: flex;
              flex-direction: column;
              span{
                &:nth-child(1){
                  color: var(--pricePlan-title-color);
                  font-family: "Alibaba PuHuiTi 2.0";
                  font-weight: 400;
                  font-size: 16px;
                  line-height: 24px;
                }
                &:nth-child(2){
                  color: var(--pricePlan-text-color);
                  font-size: 14px;
                  line-height: 20px;
                }
              }

              .rowbg{
                width: 16px;
                height: 1px;
                background: var(--pricePlan-nodata-bg--color);
              }
            }
          }
            .box-view-start{
              height:56px;
              align-items: flex-start;

              .rowbg{
                margin-top:25px        ;
              }
            }
          }
        }
      }
    }


  }

  .pricePlan-list-main-h5{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    h3{
      color: var(--app-h2-text-Light-color);
      font-family: "Alibaba PuHuiTi 2.0";
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      margin-bottom:16PX;
    }
    .tab-view{
      width: 100%;
      box-sizing: border-box;
      padding: 4px;
      border-radius: 8px;
      border: 0.5px solid var(--pricePlan-border-color);
      box-sizing: border-box;
      background: var(--pricePlan-bg-color);
      display: flex;
      margin-bottom: 16px;
      span{
        width: 100%;
        height: 32px;
        display: inline-flex;
        padding: 2px 16px;
        cursor: pointer;
        color: var(--Text-2, #66637c);
        font-family: "Alibaba PuHuiTi 2.0";
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        border-radius: 4px;
        justify-content: center;
      }
      .active{
        background: var(--pricePlan-purple-color);
        color: #fff;
      }
    }
    .pricePlan-list-main-h5-box{
      width: 100%;
      padding: 16px 12px;
      border-radius: 8px;
      border: 0.5px solid var(--pricePlan-border-color);
      box-sizing: border-box;
      background: var(--pricePlan-bg-color);
      display:flex;
      flex-direction: column;
      gap:16px;
      .pricePlan-list-main-header{
        width: 100%;
        .top-view-box{
          width: 100%;
          display: flex;
          flex-direction: column;
          gap:8px;
          padding-bottom:16px;
          border-bottom: 0.5px solid  var(--pricePlan-border-color);
          .title{
            color: var(--pricePlan-purple-color);
            font-family: "Alibaba PuHuiTi 2.0";
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
          }

          .content{
            display: flex;
            align-items: flex-end;
            span{
              color: var(--pricePlan-title-color);
              font-family: "Alibaba PuHuiTi 2.0";
              font-weight: 700;
              font-size: 32px;
              line-height: 40px;
              &:nth-child(2){
                font-size: 16px;
                line-height: 32px;
              }
            }
          }
          p{
            color: var(--pricePlan-text-color);
            font-family: "Alibaba PuHuiTi 2.0";
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
          }

        }
      }
      .pricePlan-list-main-content{
        display: flex;
        flex-direction: column;
        gap:16px;
        .main-content-box{
          display: flex;
          flex-direction: column;
          gap:4px;
          .main-content-box-h3{
            color: var(--pricePlan-text-color);
            font-family: "Alibaba PuHuiTi 2.0";
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
            padding-bottom:8px;
            border-bottom: 0.5px solid var(--pricePlan-border-color);
            margin-bottom:8px;
          }
          .header-view{
            display: flex;
            align-items: center;
            gap:4px;
            height:28px;
            padding-bottom:8px;
            border-bottom: 0.5px solid var(--pricePlan-border-color);
            justify-content: space-between;
            &:last-of-type{
              border:0;
            }
            .header-view-row{
              display: flex;
              align-items: flex-start;
              gap:4px;
              .icon{
                margin-top:2.5px;
              }
              .header-text-view{
                display: flex;
                flex-direction: column;

                span{
                  &:nth-child(1){
                    color: var(--pricePlan-title-color);
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 20px;
                  }
                  &:nth-child(2){
                    color: var(--pricePlan-text-color);
                    font-size: 12px;
                    line-height: 16px;
                  }
                }
              }
              .rowbg{
                width: 16px;
                height: 1px;
                background: var(--pricePlan-nodata-bg--color);
              }
            }
            .header-view-row-right{
              justify-content: flex-end;
              span{
                text-align: right;
              }
            }

          }
          .header-view-start{
            height:fit-content;
            align-items: flex-start;
          }
        }
      }
    }

  }

}


@media (max-width: 1000px) {
  .pricePlan-main{
    gap:16px !important;
  }
}


@media (max-width: 1000px)  {
  .top-view{
    .title{
      margin-bottom:16px !important;
      span{
        font-size:24px !important;
      }
    }
  }
  .p1{
    max-width: 269px;
    margin-bottom:16px !important;
  }
}

</style>