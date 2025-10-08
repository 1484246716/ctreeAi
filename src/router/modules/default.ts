export const defaultRouter = [
  {
    path: "/displayPage",
    component: () => import("@/pages/defaultPages/displayPage/index.vue"),
    meta: { title: "displayPage", svgIcon: "home", role: ["default"], sidebarShow:true }
  },
  {
    path: "/extensions",
    component: () => import("@/pages/defaultPages/extensions/index.vue"),
    meta: { title: "extensions", svgIcon: "home", role: ["default"], sidebarShow:true }
  },
  {
    path: "/chatpdf",
    component: () => import("@/pages/defaultPages/chatpdf/index.vue"),
    meta: { title: "chatpdf", svgIcon: "home", role: ["default"], sidebarShow:true }
  },
]
