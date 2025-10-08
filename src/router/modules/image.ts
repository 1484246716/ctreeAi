import type { RouteRecordRaw } from "vue-router"
const Layouts = () => import("@/layouts/index.vue")

export const imageRoutes: RouteRecordRaw[] = [
  {
    path: "/image",
    component: Layouts,
    redirect: "/image/ai-image-generator",
    meta: {
      title: "image",
      svgIcon: "dashboard",
      roles: ["admin", "image"],
      isShowTitle: false,
      alwaysShow: true
    },
    children: [
      {
        path: "/image/ai-image-generator",
        name: "aiImageGenerator",
        component: () => import("@/pages/imagePages/aiImageGenerator/index.vue"),
        meta: { title: "图片生成", svgIcon: "Sidebar1", roles: ["admin", "image"] },
      },
      {
        path: "/image/background-remover",
        name: "backgroundRemover",
        component: () => import("@/pages/imagePages/backgroundRemover/index.vue"),
        meta: { title: "背景移除", svgIcon: "Sidebar1", roles: ["admin", "image"] },
      },
      {
        path: "/image/text-remover",
        name: "textRemover",
        component: () => import("@/pages/imagePages/textRemover/index.vue"),
        meta: { title: "文字移除", svgIcon: "Sidebar1", roles: ["admin", "image"] },
      },
      {
        path: "/image/photo-eraser",
        name: "photoEraser",
        component: () => import("@/pages/imagePages/photoEraser/index.vue"),
        meta: { title: "区域抹除", svgIcon: "Sidebar1", roles: ["admin", "image"] },
      },
      {
        path: "/image/inpaint",
        name: "inpaint",
        component: () => import("@/pages/imagePages/inpaint/index.vue"),
        meta: { title: "局部重绘", svgIcon: "Sidebar1", roles: ["admin", "image"] },
      },
      {
        path: "/image/image-upscaler",
        name: "imageUpscaler",
        component: () => import("@/pages/imagePages/imageUpscaler/index.vue"),
        meta: { title: "画质提升", svgIcon: "Sidebar1", roles: ["admin", "image"] },
      },
      {
        path: "/image/background-changer",
        name: "backgroundChanger",
        component: () => import("@/pages/imagePages/backgroundChanger/index.vue"),
        meta: { title: "背景替换", svgIcon: "Sidebar1", roles: ["admin", "image"] },
      },
    ]
  },
]