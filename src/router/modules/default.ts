export const defaultRouter = [
  {
    path: "/features",
    component: () => import("@/pages/defaultPages/features/index.vue"),
    meta: { title: "features", svgIcon: "home", role: ["default"], sidebarShow:true }
  },
  {
    path: "/case",
    component: () => import("@/pages/defaultPages/case/index.vue"),
    meta: { title: "case", svgIcon: "home", role: ["default"], sidebarShow:true }
  },
  {
    path: "/about",
    component: () => import("@/pages/defaultPages/about/index.vue"),
    meta: { title: "about", svgIcon: "home", role: ["default"], sidebarShow:true }
  },
  // {
  //   path: "/pricePlan",
  //   component: () => import("@/pages/defaultPages/pricePlan/index.vue"),
  //   meta: { title: "pricePlan", svgIcon: "home", role: ["default"], sidebarShow:true }
  // },
  {
    path: "/pricePlan",
    component: () => import("@/pages/defaultPages/pricePlan2/index.vue"),
    meta: { title: "pricePlan", svgIcon: "home", role: ["default"], sidebarShow:true }
  },

]
